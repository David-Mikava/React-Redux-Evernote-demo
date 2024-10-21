import { User } from '../components/Auth/types/User';
import { Notebook } from '../components/Notebook/types/notebook';

export type State = {
  auth: User | undefined;
  notebooks: Notebook[];
};
