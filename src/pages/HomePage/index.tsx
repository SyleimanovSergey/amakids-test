import React, { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

import { getGame } from 'redux/selector';
import { useGameAction } from 'hooks/useActions';
import { useTypeSelector } from 'hooks/useTypeSelector';

import { PageName } from 'types/Links';

import styles from './index.module.scss';

const SettingPage: React.FC = () => {
	const { gameOption } = useTypeSelector(getGame);
	const { setFieldSize, setNumberSteps } = useGameAction();
	const { sizeField, numberSteps } = gameOption;

	const onChangeFieldSize = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		!Number.isNaN(Number(value)) && value.length > 0 && Number(value) <= 8
			? setFieldSize(Number(value))
			: setFieldSize(0);
	};

	const onChangeSteps = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		!Number.isNaN(Number(value)) && value.length > 0 && Number(value) <= 30
			? setNumberSteps(Number(value))
			: setNumberSteps(0);
	};

	return (
		<div className={styles.setting}>
			<div className={styles.about}>В этой игре вам необходимо найти токи старта.</div>
			<div className={styles.blockInput}>
				<label className={styles.label}>
					Укажите размер поля (макс: 8)
					<input className={styles.input} type="text" value={sizeField} onChange={onChangeFieldSize} />
				</label>
				<label className={styles.label}>
					Укажите количество шагов (макс: 30)
					<input className={styles.input} type="text" value={numberSteps} onChange={onChangeSteps} />
				</label>
				<Link className={styles.btn} to={PageName.GAME}>
					Начать игру
				</Link>
			</div>
		</div>
	);
};

export default SettingPage;
