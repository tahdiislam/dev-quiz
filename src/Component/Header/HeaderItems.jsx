import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderItems = ({route}) => {
    const {name, path} = route;
    return (
        <li className='md:mr-8 w-full py-2 my-1 bg-indigo-600 rounded text-white hover:text-gray-300'><NavLink className='w-full cursor-pointer' to={path}>{name}</NavLink></li>
    );
};

export default HeaderItems;