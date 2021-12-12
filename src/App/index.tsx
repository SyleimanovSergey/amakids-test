import React from 'react';

import Header from 'components/Header';
import Routers from 'App/Router';

import 'assets/styles/_reset.scss';

const App: React.FC = () => {
	return (
		<>
			<Header />
			<main>
				<Routers />
			</main>
		</>
	);
};

export default App;
