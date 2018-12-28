const colors = {
	normal: {
		primary: {
			light: '#feaa91',
			main: '#fd5523',
			dark: '#fc310d',
			contrastText: '#fff',
			hover: '#d84a20',
			backgroundColor: '#fff',
			lockColor: '#333',
			contrast: '#fff',
			labelColor: '#5e5e5e',
			textDecoration: 'rgb(94, 94, 94)',
			headBackground: '#e6e6e6',
			bodyBackground: '#fbfbfb',
		},
		secondary: {
			light: '#f5f5f5',
			main: '#c8c8c8',
			dark: '#999',
			contrastText: '#333',
			lockColor: '#999',
			lock: '#f5f5f5',
			black: '#000',
		},
		tertiary: {
			light: '#666',
			main: '#555',
			dark: '#333',
			contrastText: '#999',
			contrast: '#555',
		},
		alerts: {
			success: '#6bc40c',
			danger: '#d7151d',
			warning: '#f9aa33',
		},
		defaultColors: {
			light: '#e8e8e8',
			main: '#333333',
			dark: '#555555',
			contrastText: '#fd5523',
			lockColor: '#fd5523',
		},
	},
	red: {
		primary: {
			light: '#832828',
			main: '#832828',
			dark: '#832828',
			contrastText: '#fff',
			hover: '#601414',
			backgroundColor: '#fff',
			lockColor: '#333',
			contrast: '#fff',
			labelColor: '#5e5e5e',
			textDecoration: 'rgb(94, 94, 94)',
			headBackground: '#e6e6e6',
			bodyBackground: '#fbfbfb',
		},
		secondary: {
			light: '#f5f5f5',
			main: '#c8c8c8',
			dark: '#999',
			contrastText: '#333',
			lockColor: '#999',
			lock: '#f5f5f5',
			black: '#000',
		},
		tertiary: {
			light: '#666',
			main: '#555',
			dark: '#333',
			contrastText: '#999',
			contrast: '#555',
		},
		alerts: {
			success: '#6bc40c',
			danger: '#d7151d',
			warning: '#f9aa33',
		},
		defaultColors: {
			light: '#e8e8e8',
			main: '#333333',
			dark: '#555555',
			contrastText: '#832828',
			lockColor: '#832828',
		},
	},
}

const theme = {
	normal: {
		palette: {
			actions: {
				active: 'rgba(0, 0, 0, 0.54)',
				disabled: 'rgba(0, 0, 0, 0.26)',
				disabledBackground: 'rgba(0, 0, 0, 0.12)',
				hover: 'rgba(0, 0, 0, 0.08)',
				hoverOpacity: '0.08',
				selected: 'rgba(0, 0, 0, 0.14)',
				hoverField: 'rgba(0, 0, 0, 0.87)',
			},
			primary: colors.normal.primary,
			secondary: colors.normal.secondary,
			tertiary: colors.normal.tertiary,
			defaultColors: colors.normal.defaultColors,
			error: {
				light: colors.normal.secondary.light,
				main: colors.normal.secondary.main,
				dark: colors.normal.secondary.dark,
				contrastText: colors.normal.secondary.contrastText,
			},
			alerts: colors.normal.alerts,
			welcomeBar: {
				textColor: '#333333',
				lineColor: '#999999',
				backgroundColor: '#e8e8e8',
				infoBlockBackground: '#333333',
				infoBlockText: '#999999',
				supText: '#0a2973',
			},
		},
		props: {
			buttonStyle: {
				borderRadius: 0,
				boxShadow: 'none',
				medium: {
					width: 110,
					height: 40,
				},
				disabled: {
					color: colors.normal.primary.contrastText,
					backgroundColor: colors.normal.primary.light,
					border: '1px solid',
					borderColor: colors.normal.secondary.light,
				},
			},
			linkStyle: {
				color: colors.normal.tertiary.contrastText,
				hoveredLink: colors.normal.secondary.main,
			},
		},
		typography: {
			useNextVariants: true,
		},
		authBar: {
			background: '#ffffff',
			main: '#999999',
		},
	},
	red: {
		palette: {
			actions: {
				active: 'rgba(0, 0, 0, 0.54)',
				disabled: 'rgba(0, 0, 0, 0.26)',
				disabledBackground: 'rgba(0, 0, 0, 0.12)',
				hover: 'rgba(0, 0, 0, 0.08)',
				hoverOpacity: '0.08',
				selected: 'rgba(0, 0, 0, 0.14)',
				hoverField: 'rgba(0, 0, 0, 0.87)',
			},
			buttons: {
				main: colors.red.primary.main,
				mainHover: colors.red.primary.hover,
			},
			primary: colors.red.primary,
			secondary: colors.red.secondary,
			tertiary: colors.red.tertiary,
			defaultColors: colors.red.defaultColors,
			error: {
				light: colors.red.secondary.light,
				main: colors.red.secondary.main,
				dark: colors.red.secondary.dark,
				contrastText: colors.red.secondary.contrastText,
			},
			alerts: colors.alerts,
		},
		props: {
			buttonStyle: {
				borderRadius: 0,
				boxShadow: 'none',
				medium: {
					width: 110,
					height: 40,
				},
				disabled: {
					color: colors.red.primary.contrastText,
					backgroundColor: colors.red.primary.light,
					border: '1px solid',
					borderColor: colors.red.secondary.light,
				},
			},
			linkStyle: {
				color: colors.red.tertiary.contrastText,
				hoveredLink: colors.red.secondary.main,
			},
		},
		typography: {
			useNextVariants: true,
		},
	},
}

export { theme }
