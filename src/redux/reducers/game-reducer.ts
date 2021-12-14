import { ActionGameTypes, GameAction, InterfaceStartGame } from 'types/interfaceGameRedux';
import { addStep } from 'utils/addStep';

const initialState: InterfaceStartGame = {
	startGame: false,
	stopGame: false,
	gameOption: {
		sizeField: 4,
		numberSteps: 10,
		start: '',
		finish: '',
		steps: [],
		gridField: []
	}
};

const reducer = (state = initialState, action: GameAction): InterfaceStartGame => {
	switch (action.type) {
		case ActionGameTypes.SET_START_GAME: {
			const { sizeField, numberSteps } = state.gameOption;
			const mazeGrid: string[][] = [];

			const randomFinishArray: string[] = [];

			// Создаем поле согласна задданым размерам
			for (let i = 0; i < sizeField; i++) {
				const mazeLine: string[] = [];
				for (let a = 0; a < sizeField; a++) {
					mazeLine.push(`${i}${a}`);
					if (i === 0 || i === sizeField - 1 || a === 0 || a === sizeField - 1) {
						randomFinishArray.push(`${i}${a}`);
					}
				}
				mazeGrid.push(mazeLine);
			}

			// Создаем финишнию позицию
			const randomFinish: string = randomFinishArray[Math.floor(Math.random() * randomFinishArray.length)];
			let stepArray = addStep(sizeField, mazeGrid, randomFinish, numberSteps);
			let startPosition = stepArray[stepArray.length - 1].newPosition;

			if (startPosition === randomFinish) {
				console.log('/');
				stepArray = addStep(sizeField, mazeGrid, randomFinish, numberSteps);
				startPosition = stepArray[stepArray.length - 1].newPosition;
			}

			return {
				...initialState,
				startGame: true,
				gameOption: {
					...state.gameOption,
					start: startPosition,
					finish: randomFinish,
					steps: stepArray,
					gridField: mazeGrid
				}
			};
		}

		case ActionGameTypes.SET_STOP_GAME: {
			return {
				...state,
				startGame: false,
				stopGame: true,
				gameOption: {
					...state.gameOption,
					steps: initialState.gameOption.steps
				}
			};
		}

		case ActionGameTypes.SET_SIZE_FIELD: {
			return { ...state, gameOption: { ...state.gameOption, sizeField: action.payload } };
		}

		case ActionGameTypes.SET_NUMBER_STEPS: {
			return { ...state, gameOption: { ...state.gameOption, numberSteps: action.payload } };
		}

		default:
			return state;
	}
};

export default reducer;
