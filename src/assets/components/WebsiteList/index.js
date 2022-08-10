import React, { useState } from 'react';
import Modal from '../Modal';

const WebsiteList = ({ category }) => {
	const [currentWebsite, setCurrentWebsite] = useState();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [Websites] = useState([
		{
			name: 'Run Buddy',
			category: 'projects',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
		},
		{
			name: 'Note-Taker',
			category: 'projects',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
		},
	]);
	const currentWebsites = Websites.filter(
		(website) => website.category === category
	);
	const toggleModal = (image, i) => {
		// current photo
		setCurrentWebsite({ ...image, index: i });
		setIsModalOpen(!isModalOpen);
	};

	return (
		<div>
			{/* The following statement will only render the Modal if the value isModalOpen is true, */}
			{isModalOpen && (
				<Modal currentWebsite={currentWebsite} onClose={toggleModal} />
			)}
			{/* <div className="flex-row">
				{currentWebsites.map((image, i) => (
					<img
						src={require(` ${category}/${i}.jpg`)}
						alt={image.name}
						className="img-thumbnail mx-1"
						onClick={() => toggleModal(image, i)}
						key={image.name}
					/>
				))}
			</div> */}
		</div>
	);
};

export default WebsiteList;
