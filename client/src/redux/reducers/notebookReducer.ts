import { State } from '../../components/Notebook/types/State';
import Action from '../../types/Action';
import { GET_NOTEBOOKS, REMOVE_NOTEBOOK } from '../actions/naming';

const initialState: State = {
  notebooks: [],
};

const notebookReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case GET_NOTEBOOKS:
      return {
        ...state,
        notebooks: action.payload,
      };
    case REMOVE_NOTEBOOK:
      return {
        ...state,
        notebooks: state.notebooks.filter((notebook) => notebook.id !== action.payload),
      };

    default:
      return state;
  }
};

export default notebookReducer;
