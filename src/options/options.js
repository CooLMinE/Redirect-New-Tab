$(document).ready(function() {
	loadOptions();

	$('#submit').click(saveOptions);
});

function loadOptions()
{
	var optionsToGet = ["urlToRedirectTo"];

	chrome.storage.local.get(optionsToGet,	function(options) {
		$('#url').val(options.urlToRedirectTo == null ? "" : options.urlToRedirectTo);
	});
}

function saveOptions()
{
	var url = $('#url').val();

	if (url.length > 0)
	{
		chrome.storage.local.set({ urlToRedirectTo: url }, 
			function() {
				chrome.extension.getBackgroundPage().urlToRedirectTo = url;
				displaySuccess("Changes have been saved")
		});	
	}
	else
	{
		displayError("Input is not valid");
	}
}

function displayError(message)
{
	$('#messages').css("color","red")
	displayMessage(message);
}

function displaySuccess(message)
{	
	$('#messages').css("color","green")
	displayMessage(message);
}

function displayMessage(message)
{	
	$('#messages').text(message);
	$('#messages').fadeIn(1000);
	$('#messages').fadeOut(2000);
}