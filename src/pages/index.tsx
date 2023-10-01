/** @format */

import {
	Box,
	ChakraProvider,
	CSSReset,
	extendTheme,
	Heading,
} from '@chakra-ui/react';
import { ReactNode, useState } from 'react';
import SearchAndFilterBar from '../components/SearchAndFilterBar';
import MapAndListingSplitView from '../components/MapAndListingSplitView';
import ListView from '../components/ListView'; // Assuming you have a separate component for List View

const theme = extendTheme({
	config: {
		useSystemColorMode: false,
		initialColorMode: 'light',
	},
});

const Page = ({ children }: { children: ReactNode }) => (
	<ChakraProvider theme={theme}>
		<CSSReset />
		<Box p={4}>{children}</Box>
	</ChakraProvider>
);

const IndexPage = () => {
	const [isMapView, setIsMapView] = useState(true); // State to toggle between Map and List View

	const toggleView = () => {
		setIsMapView(!isMapView); // Toggle the view when the button is clicked
	};

	return (
		<Page>
			<Heading mb={4} textAlign='center'>
				Camp and Driver Search
			</Heading>
			<SearchAndFilterBar onToggle={toggleView} />
			{isMapView ? <MapAndListingSplitView /> : <ListView />}
		</Page>
	);
};

export default IndexPage;
