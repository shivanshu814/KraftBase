/** @format */

import { Box, Heading, Text, Divider } from '@chakra-ui/react';
import React from 'react';

const CampDetailsSection = ({ campInfo }) => {
	const randomData = {
		name: 'Shivanshu Pathak',
		amenities: ['Swimming Pool', 'Hiking Trails', 'Campfire Area'],
		contactInfo: 'Contact: example@example.com',
		location: 'Forest Retreat, USA',
		capacity: '50 people',
		checkInTime: '3:00 PM',
		checkOutTime: '11:00 AM',
	};

	const RestData = {
		name: 'Rest',
		amenities: ['Wifi', 'BBQ Area', 'Nature Walks'],
		contactInfo: 'Contact: Rest@example.com',
		location: 'Mountain Valley, Canada',
		capacity: '30 people',
		checkInTime: '2:00 PM',
		checkOutTime: '12:00 PM',
	};

	const dataToDisplay = [randomData, RestData];

	return (
		<Box
			bg='gray.100'
			p={4}
			borderRadius='md'
			boxShadow='md'
			border='1px solid #e2e8f0'
			borderColor='teal.300'>
			<Heading as='h2' size='lg' mb={4}>
				Camp Details
			</Heading>
			{dataToDisplay.map((data, index) => (
				<div key={index}>
					<Text fontSize='lg' mb={2}>
						<strong>Name:</strong> {data.name}
					</Text>
					{data.amenities && (
						<Text fontSize='lg' mb={2}>
							<strong>Amenities:</strong> {data.amenities.join(', ')}
						</Text>
					)}
					<Text fontSize='lg' mb={2}>
						<strong>Contact Info:</strong> {data.contactInfo}
					</Text>
					<Text fontSize='lg' mb={2}>
						<strong>Location:</strong> {data.location}
					</Text>
					<Text fontSize='lg' mb={2}>
						<strong>Capacity:</strong> {data.capacity}
					</Text>
					<Text fontSize='lg' mb={2}>
						<strong>Check-In Time:</strong> {data.checkInTime}
					</Text>
					<Text fontSize='lg' mb={2}>
						<strong>Check-Out Time:</strong> {data.checkOutTime}
					</Text>
					{index < dataToDisplay.length - 1 && <Divider my={4} />}
				</div>
			))}
		</Box>
	);
};

export default CampDetailsSection;
