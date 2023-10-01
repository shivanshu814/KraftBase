/** @format */

import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider {...pageProps}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
