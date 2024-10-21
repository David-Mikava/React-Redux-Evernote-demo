import React, { useRef } from 'react';
import './NavBar.scss';
import { Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import * as api from '../../App/api';

function NavBar() {
  const onClickLogout = async () => {
    try {
      await api.logout();
      window.location.href = '/login'
    } catch (error) {
      console.error('Ошибка при выходе из системы:', error);
    }
  };
  const items = [
    {
      key: 'home',
      label: 'Главная',
      to: '/home',
    },
    {
      key: 'tasks',
      label: 'Задачи',
      to: '/tasks',
    },
    {
      key: 'notebooks',
      label: 'Notebooks',
      to: '/notebooks',
    },
    {
      key: 'logout',
      label: 'Выйти',
      onClick: onClickLogout,
    },
  ];

  const onClick = (e: any) => {};

  return (
    <div className="content">
      <div className="navbar">
        <Menu
          onClick={onClick}
          mode="inline"
          style={{ backgroundColor: '#f2f2f2', borderRadius: '5px', margin: '10px' }}
        >
          <Menu.Item key="user" className="menu-item non-clickable">
            User
          </Menu.Item>
          {items.map((item) => (
             <Menu.Item key={item.key} className="menu-item">
             {item.onClick ? (
               // Если есть onClick, то создаем кнопку с обработчиком onClick
               <button className='out' onClick={item.onClick}>{item.label}</button>
             ) : (
               // Иначе создаем ссылку на соответствующий маршрут
               <Link to={item.to}>{item.label}</Link>
             )}
           </Menu.Item>
          ))}
        </Menu>
      </div>
      <Outlet />
    </div>
  );
}

export default NavBar;
