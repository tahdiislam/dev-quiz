import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderItems from './HeaderItems';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false)
    const routers = [
        {id: 1, name: 'Home', path: '/home'},
        {id: 2, name: 'Statistics', path: '/statistics'},
        {id: 3, name: 'Blog', path: '/blog'},
    ]
    return (
        <nav className='z-10 md:sticky top-0 w-full  flex items-center justify-between px-8 bg-gradient-to-r from-green-500 via-blue-500 to-indigo-600 h-16 text-white hover:text-gray-300 rounded'>
            <h1 className='text-3xl'><Link to='/'><span className='text-fuchsia-600'>dev</span>Quiz</Link></h1>
            <div className=''>
                <div onClick={() => setOpen(!open)} className='h-10 w-10 md:hidden'>
                    {open ? <XMarkIcon/> : <Bars3Icon/>}
                </div>
                <ul className={`md:flex w-full md:w-auto absolute md:static duration-700 ease-linear ${open ? 'top-16 right-0' : '-top-44 right-0'}`}>
                    {
                        routers.map(route => <HeaderItems key={route.id} route={route}/>)
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Header;