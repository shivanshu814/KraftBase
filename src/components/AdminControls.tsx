/** @format */

import { Box, Button } from '@chakra-ui/react';
import React from 'react';

const AdminControls = () => {
	return (
		<Box>
			<Button colorScheme='red' mr={2}>
				Delete Review
			</Button>
			<Button colorScheme='teal'>Other Admin Action</Button>
		</Box>
	);
};

export default AdminControls;
