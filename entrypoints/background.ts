import { TreeNode, Tree } from 'versatile-tree';
import { browser } from 'wxt/browser";

export default defineBackground(() => {
	browser.runtime.onInstalled.addListener(() => {

	});

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
  console.log('Hello background!', { id: browser.runtime.id });
});
