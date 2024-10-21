import './Notebooks.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { REMOVE_NOTEBOOK } from '../../redux/actions/naming';

function Notebooks() {
  const { notebooks } = useSelector((store: RootState) => store.notebooks);
  const dispatch = useDispatch();

  const handleDelete = async (id: number) => {
    try {
      await fetch('http://localhost:3000/notebook', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ id }),
      });
      dispatch({ type: REMOVE_NOTEBOOK, payload: id });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page">
      <h1>Notebooks</h1>
      <div className="div-notebooks">
        <div className="title-task">
          <h3>title</h3>
          <Link to="/notebook/new" className="a">
            new notebook
          </Link>
        </div>
        <ul className="notebooks">
          {notebooks.map((notebook) => (
            <li key={notebook.id}>
              <div>
                <a href="">
                  <img src="../../../public/svg/book.svg" alt="" />
                  <p>{notebook.title}</p>
                </a>
              </div>
              <div className="btn-delet">
                <button
                  type="button"
                  className="delete"
                  onClick={() => {
                    handleDelete(notebook.id);
                  }}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Notebooks;
