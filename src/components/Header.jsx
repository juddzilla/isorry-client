import { Fragment, useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LockClosedIcon, UserCircleIcon } from '@heroicons/react/20/solid';
import { AuthContext } from '../App';
import CreateTrigger from '../components/Create/Trigger';
import Fetch from '../fetch';

import Logo from '../images/noun-tilde-1125364.svg';

const navigation = [
  { name: 'Apology Anatomy', href: '/anatomy'},
  { name: 'Fauxpologies', href: '/fauxpologies', icon: LockClosedIcon},
  { name: 'Best Practices', href: '/best-practices'},
  { name: 'How It Works', href: '/how-it-works'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const location = useLocation();
  const { auth, setAuth } = useContext(AuthContext);
  const [isAuthed, setIsAuthed] = useState(auth);
  const navigate = useNavigate();
  const [pages, setPages] = useState([]);

  useEffect(() => {
    Fetch.get('u/check').then(resp => {
      const [err] = resp;
      setIsAuthed(!err);
      setAuth(!err);      
    });
  }, []);

  useEffect(() => {
    setIsAuthed(auth);
  }, [auth]);

  useEffect(() => {    
    const isCurrentCheck = (route) => ({
      ...route,
      current: location.pathname === route.href,
    });

    const checked = navigation.map(isCurrentCheck);    
    setPages(checked);
  }, [location]);

  const userNavigation = [
    { name: 'Your Apologies', href: '/sorries' },
  ]

  if (!isAuthed) {
    userNavigation.push({ name: 'Login', href: '/login' });
  }

  async function logout() {
     await Fetch.get('u/logout');
     navigate('/');
     setIsAuthed(false);
     setAuth(false);   
  }

  return (
    <Disclosure as="nav" className="bg-off-white z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <Link to='/'>
                    <img
                      className="h-10 w-auto"
                      src={Logo}
                      alt="iSorry.lol"
                    />
                  </Link>
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">                  
                  {pages.map((item) => {
                    const classList = ['rounded-md px-3 py-2 text-sm font-medium flex items-center'];

                    if (item.current) {
                      classList.push('bg-primary text-white');
                    } else {
                      classList.push('hover:text-white hover:bg-secondary');
                    }
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classList.join(' ')}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                        { (item.icon && !isAuthed) &&
                          <item.icon className='h-4 w-4 ml-1'/>
                        }
                      </Link>
                  )})}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <CreateTrigger>Get Started</CreateTrigger>
                </div>
                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-fulltext-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <UserCircleIcon  className="h-10 w-10" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                to={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </Link>
                            )}                            
                          </Menu.Item>                          
                        ))} 
                        { isAuthed &&
                          <Menu.Item>
                              <button
                                className='block px-4 py-2 text-sm text-gray-700'
                                onClick={ logout }>
                                    Logout
                              </button>
                            </Menu.Item>            
                        }          
                        </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {pages.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}                  
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="space-y-1 px-2 sm:px-3">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className='text-gray-800 hover:bg-gray-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                { isAuthed &&
                  <Disclosure.Button>
                      <button
                        className='text-gray-800 hover:bg-gray-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                        onClick={ logout }>
                            Logout
                      </button>
                    </Disclosure.Button>            
                } 
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
