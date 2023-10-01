/** @format */

import {
	Box,
	VStack,
	Heading,
	Text,
	Image,
	IconButton,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

type Review = {
	id: string;
	text: string;
	user: string;
	images: string[];
};

type ReviewListProps = {
	reviews: Review[];
	onDeleteReview: (reviewId: string) => void;
};

const ReviewList: React.FC<ReviewListProps> = ({ reviews, onDeleteReview }) => {
	return (
		<VStack align='start' spacing={4}>
			<Heading fontSize='xl' fontWeight='bold'>
				User Reviews
			</Heading>
			{reviews.map((review) => (
				<Box
					key={review.id}
					p={4}
					borderWidth='1px'
					borderRadius='lg'
					boxShadow='md'
					bg='white'>
					<Text fontSize='lg' mb={2}>
						{review.text}
					</Text>
					<Text fontWeight='semibold' fontSize='md' mb={2}>
						User: {review.user}
					</Text>
					<VStack spacing={2} mt={2}>
						{review.images.map((imageUrl, index) => (
							<Image
								key={index}
								src={imageUrl}
								alt={`Review Image ${index + 1}`}
								maxW='200px'
								borderRadius='md'
								boxShadow='sm'
							/>
						))}
					</VStack>
					<IconButton
						aria-label='Delete Review'
						icon={<DeleteIcon />}
						colorScheme='red'
						size='sm'
						mt={2}
						onClick={() => onDeleteReview(review.id)}
					/>
				</Box>
			))}
		</VStack>
	);
};

export default ReviewList;
