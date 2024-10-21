import React, { useState } from 'react';
import { loginSubmit } from './api';
import './auth.scss';
import { formDataTypes } from './SignUp';

function SignIn() {
  const [formData, setFormData] = useState<formDataTypes>();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <main className="form-main">
      <h1>Вход</h1>

      <form
        className="form-login"
        onSubmit={(e) => {
          e.preventDefault();
          loginSubmit(formData);
        }}
      >
        <input
          onChange={handleInputChange}
          className="login-input"
          type="email"
          placeholder="email"
          name="email"
          required
        />
        <input
          onChange={handleInputChange}
          className="login-input"
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <button className="login-button" type="submit">
          Войти
        </button>
      </form>
      <div className="auth-link">
        <p>У вас нет аккаунта?</p>
        <a href="/reg">Создать аккаунт</a>
      </div>
    </main>
  );
}

export default SignIn;
