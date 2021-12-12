import { RootState } from './reducers';
import { InterfaceStartGame } from 'types/interfaceGameRedux';

export const getGame = (state: RootState): InterfaceStartGame => state.gameReducer;
