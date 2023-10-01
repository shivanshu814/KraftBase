/** @format */

import {
	Flex,
	Button,
	Input,
	Select,
	Stack,
	Box,
	Spacer,
} from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
	onToggle: () => void;
}

const SearchAndFilterBar: React.FC<Props> = ({ onToggle }) => {
	// State for handling the search input
	const [searchTerm, setSearchTerm] = useState<string>('');

	// State for handling the selected filters
	const [selectedType, setSelectedType] = useState<string | null>(null);
	const [selectedProximity, setSelectedProximity] = useState<string | null>(
		null
	);
	const [selectedAmenity, setSelectedAmenity] = useState<string | null>(null);

	// Handler for the search input change
	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	// Handlers for the filter changes
	const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedType(event.target.value);
	};

	const handleProximityChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSelectedProximity(event.target.value);
	};

	const handleAmenityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedAmenity(event.target.value);
	};

	return (
		<Flex
			direction={['column', 'row']}
			align='start'
			justify='space-between'
			wrap='wrap'
			py={2}
			px={4}
			bg='black'
			rounded='md'
			shadow='sm'
			mb={4}>
			<Box w={['full', '790px']} mb={[2, 0]}>
				<Input
					placeholder='Search Camps or Drivers'
					value={searchTerm}
					onChange={handleSearchChange}
				/>
			</Box>
			<Stack
				direction={['column', 'row']}
				spacing={4}
				align='start'
				mb={[2, 0]}>
				<Select
					placeholder='Type'
					color='white'
					_placeholder={{ color: 'white' }}
					value={selectedType || ''}
					onChange={handleTypeChange}
					mb={['2', '0']}>
					<option value='camp'>Camp</option>
					<option value='driver'>Driver</option>
				</Select>
				<Select
					placeholder='Proximity'
					color='white'
					_placeholder={{ color: 'white' }}
					value={selectedProximity || ''}
					onChange={handleProximityChange}
					minWidth='130px'>
					<option value='near'>Near</option>
					<option value='far'>Far</option>
				</Select>
				<Select
					placeholder='Amenities'
					color='white'
					_placeholder={{ color: 'white' }}
					value={selectedAmenity || ''}
					onChange={handleAmenityChange}
					minWidth='130px'>
					<option value='wifi'>Wi-Fi</option>
					<option value='parking'>Parking</option>
				</Select>
			</Stack>
			<Spacer />
			<Stack direction='row' spacing={4} align='center'>
				<Button
					colorScheme='blue'
					onClick={() => {
						/* Here you can handle search action */
					}}>
					Search
				</Button>
				<Button colorScheme='teal' onClick={onToggle}>
					Toggle View
				</Button>
			</Stack>
		</Flex>
	);
};

export default SearchAndFilterBar;
