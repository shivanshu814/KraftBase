/** @format */

import { Box, Image, Flex, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';

const CampImagesCarousel = ({ images }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const nextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const prevImage = () => {
		setCurrentImageIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	return (
		<Box position='relative'>
			<Flex alignItems='center' position='absolute' top='50%' left='0'>
				<IconButton
					icon={<ChevronLeftIcon />}
					onClick={prevImage}
					aria-label='Previous Image'
					bg='blackAlpha.600'
					color='white'
					_hover={{
						bg: 'blackAlpha.800',
					}}
				/>
			</Flex>

			<Image
				src={images[currentImageIndex]}
				alt='Camp'
				borderRadius='md'
				boxShadow='md'
				maxHeight='600px'
				width='100%'
			/>

			<Flex alignItems='center' position='absolute' top='50%' right='0'>
				<IconButton
					icon={<ChevronRightIcon />}
					onClick={nextImage}
					aria-label='Next Image'
					bg='blackAlpha.600'
					color='white'
					_hover={{
						bg: 'blackAlpha.800',
					}}
				/>
			</Flex>
		</Box>
	);
};

export default CampImagesCarousel;
