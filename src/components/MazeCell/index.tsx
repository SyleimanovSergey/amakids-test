import React, { useEffect, useState } from 'react';

import { useTypeSelector } from 'hooks/useTypeSelector';
import { getGame } from 'redux/selector';
import { useGameAction } from 'hooks/useActions';

import { InterfaceMazeCell } from 'types/Maze';

import styles from './index.module.scss';
import "assets/images/finish.png"
import "assets/images/start.png"


const MazeCell: React.FC<InterfaceMazeCell> = (props) => {
	const { id: MazeCellId } = props;
	const { gameOption, stopGame } = useTypeSelector(getGame);
	const { finish, start } = gameOption;
	const { setStopGame } = useGameAction();
	const [fail, setFail] = useState<boolean>(false);

	useEffect(() => setFail(false), [finish, start]);

	let styleItem;

	if (finish === MazeCellId) {
		styleItem = `${styles.cell} ${styles.finish}`;
	} else if (stopGame && start !== '' && fail) {
		styleItem = `${styles.cell} ${styles.fail}`;
	} else if (stopGame && start === MazeCellId) {
		styleItem = `${styles.cell} ${styles.start}`;
	} else {
		styleItem = `${styles.cell}`;
	}

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
		<div className={styleItem} id={MazeCellId} onClick={onClick} role="button" tabIndex={0} onKeyPress={onKeyDown} />
	);
};

export default MazeCell;
