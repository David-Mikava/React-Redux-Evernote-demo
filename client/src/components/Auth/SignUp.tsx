import React, { useState } from 'react';
import { regSubmit } from './api';

export type formDataTypes = {
  email: string;
  password: string;
};

function SignUp() {
  const [formData, setFormData] = useState<formDataTypes>();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <main className="form-main">
      <h1>Регистрация</h1>

      <form
        className="form-login"
        onSubmit={(e) => {
          e.preventDefault();
          regSubmit(formData);
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
        <p>У вас есть аккаунт?</p>
        <a href="/login">Войти</a>
      </div>
    </main>
  );
}

export default SignUp;
