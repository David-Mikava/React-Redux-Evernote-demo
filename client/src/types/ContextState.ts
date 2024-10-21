import Action from './Action';
import { State } from './State';

export type ContextState = {
  state: State;
  dispatch: (value: Action) => void;
};
