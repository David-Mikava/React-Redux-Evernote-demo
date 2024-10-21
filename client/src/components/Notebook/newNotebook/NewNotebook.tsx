import React, { useState } from 'react';

function NewNotebook() {
  const [notebook, setNotebook] = useState('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNotebook(e.target.value);
  }

  async function formNotebook(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/notebook/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ notebook }),
      });
      if (res.status === 200) {
        window.location.href = '/notebooks';
      } else {
        alert('Произошла ошибка. Пожалуйста, попробуйте еще раз.');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="new-page">
      <form className="form-login" onSubmit={formNotebook}>
        <input
          onChange={handleInputChange}
          type="text"
          className="task-text"
          placeholder="new notebook"
          name="title"
          required
        />
        <button className="login-button" type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
}

export default NewNotebook;
