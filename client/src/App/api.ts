import { Notebook } from '../components/Notebook/types/Notebook';

export const getNotebooks = (): Promise<Notebook[]> =>
  fetch('http://localhost:3000/notebooks', { method: 'GET', credentials: 'include' }).then((res) =>
    res.json(),
  );

export const logout = (): Promise<void> =>
  fetch('http://localhost:3000/auth/logout', { method: 'GET', credentials: 'include' }).then((res) =>
    res.json(),
  );

// export const getTasks = (): Promise<Tasks[]> => {}
