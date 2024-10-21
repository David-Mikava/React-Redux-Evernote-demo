import './Task.scss';
import { Link } from 'react-router-dom';

function Tasks() {
  return (
    <div className="page">
      <h1>Task</h1>
      <div className="div-task">
        <div className="title-task">
          <h3>title</h3>
          <Link to="/task/new" className="a">
            new Task
          </Link>
        </div>
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
    </div>
  );
}

export default Tasks;
