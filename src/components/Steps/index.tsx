import React from 'react';

import StepItem from './StepItem';

import { useTypeSelector } from 'hooks/useTypeSelector';
import { getGame } from 'redux/selector';

import styles from './index.module.scss';

const Steps: React.FC = () => {
	const { gameOption } = useTypeSelector(getGame);
	const { steps } = gameOption;

	return (
		<div className={styles.stepsList}>
			{steps.map((stepItem, index) => (
				<StepItem key={stepItem.moveName + index} typeArrow={stepItem.moveName} wait={index} />
			))}
		</div>
	);
};

export default Steps;
