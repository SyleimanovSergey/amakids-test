import React from 'react';
import { Route, Routes } from 'react-router-dom';

import GamePage from 'pages/GamePage';
import HomePage from 'pages/HomePage';

import { PageName } from 'types/Links';

import styles from './index.module.scss';

const Routers: React.FC = () => {
	return (
		<main className={styles.main}>
			<Routes>
				<Route path={PageName.HOME} element={<HomePage />} />
				<Route path={PageName.GAME} element={<GamePage />} />
			</Routes>
		</main>
	);
};

export default Routers;
