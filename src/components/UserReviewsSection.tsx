/** @format */

import {
	Box,
	Heading,
	Text,
	Image,
	VStack,
	Flex,
	StackDivider,
} from '@chakra-ui/react';
import React from 'react';

const UserReviewsSection = ({ reviews }) => {
	const sampleReviews = [
		{
			username: 'John Doe',
			ratings: {
				total: 4.5,
				service: 4.5,
				facility: 4.5,
				food: 4.5,
				cleanliness: 4.5,
			},
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget est sit amet nisl euismod vulputate.',
			images: [
				'https://via.placeholder.com/150',
				'https://via.placeholder.com/150',
			],
		},
		{
			username: 'Alice Smith',
			ratings: {
				total: 5,
				service: 5,
				facility: 5,
				food: 5,
				cleanliness: 5,
			},
			text: 'Sed tincidunt lacus eu viverra. Maecenas a libero ac arcu facilisis cursus eu sit amet nulla.',
			images: ['https://via.placeholder.com/150'],
		},
	];

	const reviewsToDisplay = reviews || sampleReviews;

	return (
		<Box>
			<Heading as='h2' size='lg' mb={4} color='white'>
				User Reviews
			</Heading>
			{reviewsToDisplay.map((review, index) => (
				<Box
					key={index}
					mb={4}
					p={4}
					borderWidth='1px'
					borderRadius='md'
					boxShadow='md'
					bg='black'
					color='white'>
					<Flex alignItems='center' justifyContent='space-between' mb={2}>
						<Flex alignItems='center'>
							<Text fontSize='lg' fontWeight='bold'>
								{review.username}
							</Text>
							<Box
								ml={2}
								fontSize='md'
								fontWeight='semibold'
								color='gray.500'
								display='flex'
								alignItems='center'>
								<Text mr={1}>Rating:</Text>
								<Box
									as='span'
									bgGradient={`linear(to-r, #FFD700 ${
										review.ratings.total * 20
									}%, #E2E8F0 ${review.ratings.total * 20}%)`}
									px={2}
									py={1}
									borderRadius='md'
									color='black'>
									{review.ratings.total}
								</Box>
							</Box>
						</Flex>
						<Text fontSize='sm'>{review.date}</Text>
					</Flex>
					<Text fontSize='md' mb={2}>
						{review.text}
					</Text>
					<VStack
						mt={2}
						spacing={2}
						divider={<StackDivider borderColor='gray.200' />}>
						{review.images.map((image, imgIndex) => (
							<Image
								key={imgIndex}
								src={image}
								alt={`Review Image ${imgIndex}`}
								borderRadius='md'
								boxShadow='sm'
								maxW='300px'
							/>
						))}
					</VStack>
				</Box>
			))}
		</Box>
	);
};

export default UserReviewsSection;
