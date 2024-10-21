import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';
import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
import Tasks from '../components/Tasks/Tasks';
import Notebooks from '../components/Notebook/Notebooks';
import NewTask from '../components/Tasks/newTask/NewTask';
import NewNoteBook from '../components/Notebook/newNotebook/NewNotebook';
import { useEffect } from 'react';
import * as api from './api';
import { GET_NOTEBOOKS } from '../redux/actions/naming';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    api.getNotebooks().then((data) => dispatch({ type: GET_NOTEBOOKS, payload: data }));
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/reg" element={<SignUp />} />
      <Route path="/" element={<NavBar />}>
        <Route index path="/home" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/notebooks" element={<Notebooks />} />
        <Route path="/task/new" element={<NewTask />} />
        <Route path="/notebook/new" element={<NewNoteBook />} />
        {/* <Route path="/logout" /> */}
      </Route>
    </Routes>
  );
}

export default App;
