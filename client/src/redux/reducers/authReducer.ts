import { State } from '../../components/Auth/types/Auth';
import Action from '../../types/Action';
import { SIGN_IN, SIGN_UP, LOG_OUT, CHECK_USER } from '../actions/naming';

const initialState: State = {
  auth: undefined,
};

const authReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SIGN_IN:
    case SIGN_UP:
    case CHECK_USER:
      return {
        ...state,
        auth: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        auth: undefined,
      };
    default:
      return state;
  }
};

export default authReducer;
