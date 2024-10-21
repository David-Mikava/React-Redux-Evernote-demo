import './NewTask.scss';
import { useState } from 'react';

function NewTask() {
  const [task, setTask] = useState('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value);
  }

 async function formTask(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/task/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({task}),
      });
      if (res.status === 200) {
        window.location.href = '/tasks';
      } else {
        alert('Произошла ошибка. Пожалуйста, попробуйте еще раз.');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="new-page">
      <form className="form-login" onSubmit={formTask}>
        <input
          onChange={handleInputChange}
          type="text"
          className="task-text"
          placeholder="new task"
          name="task"
          required
        />
        <button className="login-button" type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
}

export default NewTask;
