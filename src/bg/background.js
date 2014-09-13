// Events
chrome.tabs.onCreated.addListener(tabCreatedEvent);

function tabCreatedEvent(tab)
{
	if (tab.url != null && tab.url == "chrome://newtab/")
	{
		var optionsToGet = ["urlToRedirectTo"];

		chrome.storage.local.get(optionsToGet,	function(options) {
			chrome.tabs.update(tab.id, { url: options.urlToRedirectTo == null ? "http://www.google.com/" : options.urlToRedirectTo });
		});		
	}		
}