import React, { useEffect, useState } from 'react';

import { InterfaceStepItem } from 'types/Maze';

import styles from './index.module.scss';

const StepItem: React.FC<InterfaceStepItem> = (props) => {
	const { typeArrow, wait } = props;
	const [hidden, setHidden] = useState(true);

	useEffect(() => {
		const interval = setTimeout(() => {
			setHidden(false);
		}, 1000 * wait);
		return () => clearInterval(interval);
	}, [hidden, wait]);

	const styleItem = hidden ? `${styles.arrow} ${styles.hidden}` : `${styles.arrow} ${styles[typeArrow]}`;

	return (
		<div className={styles.stepItem}>
			<div id={typeArrow} className={styleItem} />
		</div>
	);
};

export default StepItem;
