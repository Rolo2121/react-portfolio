import React, { useState } from 'react';
import './App.css';
import About from './assets/components/About/index';
import Nav from './assets/components/Nav/index';
import Projects from './assets/components/Projects/index';
// import Gallery from './assets/components/Gallery/index';
import ContactForm from './assets/components/Contact/index';
import './App.css';

function App() {
	const [contactSelected, setContactSelected] = useState(false);
	// false. This is to prevent the contact form from showing when a user initially navigates to the homepage
	const [categories] = useState([
		{
			name: 'projects',
			description: 'Links to current projects',
		},
		{ name: 'Resume', description: 'List of technologies I am familiar with' },
	]);
	const [currentCategory, setCurrentCategory] = useState(categories[0]);
	return (
		<div>
			<Nav
				categories={categories}
				setCurrentCategory={setCurrentCategory}
				currentCategory={currentCategory}
				contactSelected={contactSelected}
				setContactSelected={setContactSelected}
			/>
			<main>
				<div>
					{!contactSelected ? (
						<>
							<Projects currentCategory={currentCategory} />
							<About />
						</>
					) : (
						// <> </> are <React.Fragment></React.Fragment> React fragments
						// : is equal to else
						<ContactForm />
					)}

					{/* <ContactForm />
					<Gallery currentCategory={currentCategory} />
					<About /> */}
				</div>
			</main>
		</div>
	);
}

export default App;
