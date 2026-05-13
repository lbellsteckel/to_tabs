import { TreeNode, Tree } from 'versatile-tree';
import { browser } from 'wxt/browser';

export default defineBackground(() => {
	const isFirefox = () => import.meta.env.FIREFOX

  	if (isFirefox()) {
    		// Firefox uses sidebarAction
    		browser.browserAction.onClicked.addListener(() => { browser.sidebarAction.toggle() })
  	} else {
    		// Chrome uses sidePanel
    		browser.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
  	}
	
	browser.runtime.onInstalled.addListener((details) => {
		if (details.reason == "install") {
			//initialize state only on initial install
			
		}
	});


	//Tabs sub tasks

	browser.tabs.onCreated.addListener(() => { //Handle when new tab is created

	});

	browser.tabs.onRemoved.addListener(() => { //Handle when tab is removed; need to know if it was suspension

	});

	browser.tabs.onMoved.addListener(() => { //Handle when tab is moved within the same window

	});

	browser.tabs.onAttached.addListener(() => { //Handle when tab is moved between windows

	});

	browser.tabs.onDetached.addListener(() => { //Handle when tab is removed from window

	});

	//Windows sub tasks
	
	browser.windows.onCreated.addListener(() => {

	});

	browser.windows.onRemoved.addListener(() => {

	});

	browser.windows.onFocusChanged.addListener(() => {

	});
  console.log('Hello background!', { id: browser.runtime.id });
});
