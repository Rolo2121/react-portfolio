import React from 'react';
import WebsiteList from '../WebsiteList';
import { capitalizeFirstLetter } from '../../../utils/helpers';

function Projects(props) {
	const { currentCategory } = props;
	return (
		<section>
			<h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
			<p>{currentCategory.description}</p>
			<WebsiteList category={currentCategory.name} />
		</section>
	);
}
export default Projects;
