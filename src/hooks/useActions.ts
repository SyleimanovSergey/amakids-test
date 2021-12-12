import { useDispatch } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import action from 'redux/action/index';

const { GameActionType } = action;

export const useGameAction = () => {
	const dispatch: Dispatch = useDispatch();
	return bindActionCreators(GameActionType, dispatch);
};
