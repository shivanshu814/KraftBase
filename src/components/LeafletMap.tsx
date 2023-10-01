/** @format */

// components/LeafletMap.tsx
import React, { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap = () => {
	const mapRef = useRef(null);

	useEffect(() => {
		if (!mapRef.current) return;

		const map = L.map(mapRef.current).setView([51.505, -0.09], 13);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(map);

		L.marker([51.505, -0.09]).addTo(map);

		// Cleanup on component unmount
		return () => {
			map.remove();
		};
	}, []);

	return <Box ref={mapRef} h='full' w='full' position='absolute' />;
};

export default LeafletMap;
