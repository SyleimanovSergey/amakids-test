import { combineReducers } from 'redux';
import gameReducer from './game-reducer';
import { InterfaceStartGame } from 'types/interfaceGameRedux';

export interface RootReducer {
	gameReducer: InterfaceStartGame;
}

export const rootReducer = combineReducers({
	gameReducer: gameReducer
});

export type RootState = ReturnType<typeof rootReducer>;
