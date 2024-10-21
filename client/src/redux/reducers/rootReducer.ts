import { combineReducers } from 'redux';
import authReducer from './authReducer';
import notebookReducer from './notebookReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  notebooks: notebookReducer,
});

export default rootReducer;
