import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import './Home.scss';

function Home() {
  const { notebooks } = useSelector((store: RootState) => store.notebooks);

  return (
    <div className="home">
      <p className="tg">Ready to start taking notes?</p>
      <h1>'s Home</h1>
      <div className="home-info">
        <div className="home-task">
          <a href="/Task" className="title-task">
            <h3>My Tasks</h3>
          </a>
          <ul className="tasks">
            <li>
              <input type="checkbox" name="" id="" /> yep
            </li>
            <li>
              <input type="checkbox" name="" id="" /> yep
            </li>
            <li>
              <input type="checkbox" name="" id="" /> yep
            </li>
          </ul>
        </div>
        <div className="home-notebooks">
          <a href="/notebooks" className="title-task">
            <h3>Notebooks</h3>
          </a>
          <ul className="home-notebook">
            {notebooks.slice(0, 4).map((notebook) => (
              <li key={notebook.id}>
                <a href="">
                  <p>{notebook.title}</p> <p>how many-notes</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
