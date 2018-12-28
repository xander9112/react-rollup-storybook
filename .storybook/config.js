import { configure, addDecorator } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { withNotes } from '@storybook/addon-notes'
import { withInfo } from '@storybook/addon-info'
import { withPropsTable } from 'storybook-addon-react-docgen'
import { version } from '../package'

addDecorator(withPropsTable)
addDecorator(withNotes)
addDecorator(withInfo)
addDecorator(
	withOptions({
		/**
		 * name to display in the top left corner
		 * @type {String}
		 */
		name: `React Rollup Storybook - ${version}`,
		/**
		 * URL for name in top left corner to link to
		 * @type {String}
		 */
		url: 'https://neogit.neoflex.ru/nfo-projects/prototypes/UI-KIT/ui-kit-nfo',
		/**
		 * show story component as full screen
		 * @type {Boolean}
		 */
		goFullScreen: false,
		/**
		 * display panel that shows a list of stories
		 * @type {Boolean}
		 */
		showStoriesPanel: true,
		/**
		 * display panel that shows addon configurations
		 * @type {Boolean}
		 */
		showAddonPanel: true,
		/**
		 * display floating search box to search through stories
		 * @type {Boolean}
		 */
		showSearchBox: false,
		/**
		 * show addon panel as a vertical panel on the right
		 * @type {Boolean}
		 */
		addonPanelInRight: true,
		/**
		 * sorts stories
		 * @type {Boolean}
		 */
		sortStoriesByKind: false,
		/**
		 * regex for finding the hierarchy separator
		 * @example:
		 *   null - turn off hierarchy
		 *   /\// - split by `/`
		 *   /\./ - split by `.`
		 *   /\/|\./ - split by `/` or `.`
		 * @type {Regex}
		 */
		hierarchySeparator: null,
		/**
		 * regex for finding the hierarchy root separator
		 * @example:
		 *   null - turn off multiple hierarchy roots
		 *   /\|/ - split by `|`
		 * @type {Regex}
		 */
		hierarchyRootSeparator: null,
		/**
		 * sidebar tree animations
		 * @type {Boolean}
		 */
		sidebarAnimations: true,
		/**
		 * id to select an addon panel
		 * @type {String}
		 */
		selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
		/**
		 * enable/disable shortcuts
		 * @type {Boolean}
		 */
		enableShortcuts: false, // true by default
	}),
)

function loadStories() {
	const req = require.context('../src', true, /\.stories\.js$/)
	req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
