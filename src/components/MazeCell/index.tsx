import React, { useEffect, useState } from 'react';

import { useTypeSelector } from 'hooks/useTypeSelector';
import { getGame } from 'redux/selector';
import { useGameAction } from 'hooks/useActions';

import { InterfaceMazeCell } from 'types/Maze';

import finishImg from 'assets/images/finish.png';
import startImg from 'assets/images/start.png';

import styles from './index.module.scss';

const MazeCell: React.FC<InterfaceMazeCell> = (props) => {
	const { id: MazeCellId } = props;
	const { gameOption, stopGame } = useTypeSelector(getGame);
	const { finish, start } = gameOption;
	const { setStopGame } = useGameAction();
	const [fail, setFail] = useState<boolean>(false);

	useEffect(() => setFail(false), [finish, start]);

	const styleItem = stopGame && start !== '' && fail ? `${styles.cell} ${styles.fail}` : `${styles.cell}`;

	const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (stopGame) return;
		const { id } = e.currentTarget;
		if (id === start) {
			setStopGame();
		} else {
			setFail(true);
			setStopGame();
		}
	};

	const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (stopGame) return;
		if (e.key === 'Enter') {
			const { id } = e.currentTarget;
			if (id === start) {
				setStopGame();
			} else {
				setFail(true);
				setStopGame();
			}
		}
	};

	return (
		<div className={styleItem} id={MazeCellId} onClick={onClick} role="button" tabIndex={0} onKeyPress={onKeyDown}>
			{start === MazeCellId && stopGame && <img src={startImg} alt="Start" className={styles.img} />}
			{finish === MazeCellId && <img src={finishImg} alt="Finish" className={styles.img} />}
		</div>
	);
};

export default MazeCell;
