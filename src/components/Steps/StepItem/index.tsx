import React, { useEffect, useState } from 'react';

import { InterfaceStepItem } from 'types/Maze';

import arrow from 'assets/images/arrow.png';
import styles from './index.module.scss';

const StepItem: React.FC<InterfaceStepItem> = (props) => {
	const { typeArrow, wait } = props;
	const [hidden, setHidden] = useState(true);

	useEffect(() => {
		const interval = setTimeout(() => {
			setHidden(false);
		}, 1000 * (wait + 1));
		return () => clearInterval(interval);
	}, [hidden, wait]);

	const styleItem = hidden ? `${styles.arrow} ${styles.hidden}` : `${styles.arrow} ${styles[typeArrow]}`;

	return (
		<div className={styles.stepItem}>
			<img src={arrow} className={styleItem} alt="#" />
		</div>
	);
};

export default StepItem;
