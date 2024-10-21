import { User } from '../components/Auth/types/User';
import { Notebook } from '../components/Notebook/types/Notebook';
import {
  SIGN_IN,
  SIGN_UP,
  LOG_OUT,
  CHECK_USER,
  GET_NOTEBOOKS,
  REMOVE_NOTEBOOK,
} from '../redux/actions/naming';

type Action =
  | { type: typeof SIGN_IN; payload: User }
  | { type: typeof SIGN_UP; payload: User }
  | { type: typeof LOG_OUT; payload: undefined }
  | { type: typeof CHECK_USER; payload: User }
  | { type: typeof GET_NOTEBOOKS; payload: Notebook[] }
  | { type: typeof REMOVE_NOTEBOOK; payload:  number  };

export default Action;
