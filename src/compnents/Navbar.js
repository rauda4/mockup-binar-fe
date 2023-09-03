import { useState } from 'react';
import { BiSolidUserCircle, BiLogOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout action
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    navigate('/');
    window.location.reload();
  };

  return (
    <div>
      <nav
        className={
          'absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 '
        }>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <a
              className={
                'text-white text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
              }
              href='/'>
              test mockup
            </a>
            <button
              className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <i className='text-white'>=</i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
              (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
            }
            id='example-navbar-warning'>
            <ul className='flex flex-col lg:flex-row list-none mr-auto'></ul>
            <ul>
              <li>
                {!username ? (
                  <a
                    href='/auth/login'
                    className='w-full text-white'>
                    <BiSolidUserCircle
                      size={40}
                      color='white'
                    />{' '}
                  </a>
                ) : (
                  <div className='flex cursor-pointer text-white items-center gap-5'>
                    Hello, {username}
                    <BiLogOut
                      size={38}
                      color='white'
                      onClick={handleLogout}
                    />
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
