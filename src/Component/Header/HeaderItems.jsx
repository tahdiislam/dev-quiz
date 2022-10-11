import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderItems = ({route}) => {
    const {name, path} = route;
    return (
        <li className='md:mr-8 w-full py-2 my-1 bg-indigo-600 md:bg-transparent rounded text-white hover:text-gray-300'><NavLink className={({ isActive }) =>
              isActive ? 'py-1 border-0 border-b-2' : undefined} to={path}>{name}</NavLink></li>
    );
};

export default HeaderItems;