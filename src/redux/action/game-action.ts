import { ActionGameTypes, GameAction } from 'types/interfaceGameRedux';

export const setStartGame = (): GameAction => {
	return {
		type: ActionGameTypes.SET_START_GAME
	};
};

export const setStopGame = (): GameAction => {
	return {
		type: ActionGameTypes.SET_STOP_GAME
	};
};

export const setFieldSize = (size: number): GameAction => {
	return {
		type: ActionGameTypes.SET_SIZE_FIELD,
		payload: size
	};
};

export const setNumberSteps = (steps: number): GameAction => {
	return {
		type: ActionGameTypes.SET_NUMBER_STEPS,
		payload: steps
	};
};
