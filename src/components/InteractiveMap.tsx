/** @format */

// components/InteractiveMap.tsx
import React, { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

// Dynamic import for the Leaflet component
const LeafletMap = dynamic(() => import('./LeafletMap'), {
	ssr: false, // This will disable server-side rendering for this component
});

const InteractiveMap = () => {
	return (
		<Box h='full' w='full' position='relative'>
			<LeafletMap />
		</Box>
	);
};

export default InteractiveMap;
