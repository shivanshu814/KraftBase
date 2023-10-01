/** @format */

// theme.ts
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const theme = extendTheme({
	config,
	colors: {
		primary: {
			50: '#FF7A00',
			100: '#FFD700',
			// Add more shades as needed
		},
	},
});

export default theme;
