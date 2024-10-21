import { formDataTypes } from './SignUp';

export async function regSubmit(formData: formDataTypes) {
  try {
    const res = await fetch('http://localhost:3000/auth/reg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formData),
    });
    if (res.status === 200) {
      alert('Вы зарегались');
      window.location.href = '/login';
    } else {
      alert('Произошла ошибка');
    }
  } catch (error) {
    console.log(error);
  }
}

export async function loginSubmit(formData: formDataTypes) {
  try {
    const res = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formData),
    });
    if (res.status === 200) {
      window.location.href = '/home';
    } else if (res.status === 401) {
      alert('Ошибка входа: неверный email или пароль');
    } else {
      alert('Произошла ошибка. Пожалуйста, попробуйте еще раз.');
    }
  } catch (error) {
    console.log(error);
  }
}
