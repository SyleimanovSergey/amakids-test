import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Maze from 'components/Maze';
import Steps from 'components/Steps';

import { useGameAction } from 'hooks/useActions';
import { useTypeSelector } from 'hooks/useTypeSelector';
import { getGame } from 'redux/selector';
import { PageName } from 'types/Links';

import styles from './index.module.scss';

const GamePage: React.FC = () => {
	const { stopGame } = useTypeSelector(getGame);

	const { setStartGame } = useGameAction();

	const onClick = () => {
		setStartGame();
	};

	useEffect(() => {
		setStartGame();
	}, []);

	return (
		<div className={styles.gamePage}>
			<Maze />
			<Steps />
			{stopGame && (
				<div className={styles.btnBlock}>
					<Link className={styles.btn} to={PageName.HOME}>
						Вернуться
					</Link>
					<button className={styles.btn} onClick={onClick}>
						Еще раз
					</button>
				</div>
			)}
		</div>
	);
};

export default GamePage;
