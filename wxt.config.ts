import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  	manifest: {
		action: {},
		permissions: ['storage', 'tabs',],
	},
	modules: ['@wxt-dev/module-react'],
});
