import React from 'react';

import MazeCell from 'components/MazeCell';

import { useTypeSelector } from 'hooks/useTypeSelector';
import { getGame } from 'redux/selector';

import styles from './index.module.scss';

const Maze: React.FC = () => {
	const { gameOption } = useTypeSelector(getGame);
	const { sizeField, gridField } = gameOption;

	return (
		<div
			className={styles.mazeGrid}
			style={{ gridTemplateColumns: `repeat(${sizeField}, 60px)`, gridTemplateRows: `repeat(${sizeField}, 60px)` }}>
			{gridField.map((mazeGridLine) =>
				mazeGridLine.map((mazeGridItem) => {
					return <MazeCell id={mazeGridItem} key={mazeGridItem} />;
				})
			)}
		</div>
	);
};

export default Maze;
