export interface InterfaceStartGame {
	startGame: boolean;
	stopGame: boolean;
	gameOption: InterfaceGameOptions;
}

export interface InterfaceGameOptions {
	sizeField: number;
	numberSteps: number;
	finish: string;
	start: string;
	steps: MoveArray[];
	gridField: string[][];
}

export interface MoveArray {
	newPosition: string;
	moveName: string;
}

export enum TypesMoves {
	LEFT = 'left',
	RIGHT = 'right',
	UP = 'up',
	DOWN = 'down'
}

export enum ActionGameTypes {
	SET_START_GAME = 'startGame',
	SET_STOP_GAME = 'stopGame',
	SET_SIZE_FIELD = 'setSizeField',
	SET_NUMBER_STEPS = 'setNumberSteps'
}

interface ActionStartGame {
	type: ActionGameTypes.SET_START_GAME;
}

interface ActionStopGame {
	type: ActionGameTypes.SET_STOP_GAME;
}

interface setSizeFile {
	type: ActionGameTypes.SET_SIZE_FIELD;
	payload: number;
}

interface setNumberSteps {
	type: ActionGameTypes.SET_NUMBER_STEPS;
	payload: number;
}

export type GameAction = ActionStartGame | ActionStopGame | setSizeFile | setNumberSteps;
