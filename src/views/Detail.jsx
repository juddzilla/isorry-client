import { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { BookmarkSquareIcon, BookOpenIcon, QueueListIcon, LockClosedIcon } from '@heroicons/react/24/solid';

import Fetch from '../fetch';
import Store from '../store';

const Component = () => {

    const [apology, setApology] = useState(null);
    const [reason, setReason] = useState(null);
    const [copied, setCopied] = useState(false);
    const [title, setTitle] = useState('AI Generated');
    const [description, setDescription] = useState('Engage with Genuine Amends: Tailored messages expressing regret and facilitating reconciliation on our unique apology platform.');
    const [viewing, setViewing] = useState(null);
    let { uuid } = useParams();

    const links = [
      {
        name: 'Anatomy',
        href: '/anatomy',
        description: "Find out what's in a good apology",
        icon: BookOpenIcon,
      },
      { name: 'Usage', href: '/usage', description: 'How can I use iSorry.lol generated apologies', icon: QueueListIcon },
      {
        name: 'My Apologies',
        href: '/sorries',
        description: 'View your previously generated apologies',
        icon: BookmarkSquareIcon,
      },     
      {
        name: 'Privacy',
        href: '/privacy',
        description: 'What we do with your apologies (hint: nothing)',
        icon: LockClosedIcon,
      },      
    ];

    const API = document.querySelector("meta[name='api']").getAttribute("content");

    useEffect(() => {
        const stored = Store.get();

        const setView = (data) => {
          console.log('data', data);
          setApology(data.message);
          setReason(data.reason);
          setViewing('apology');
          setTitle(data.model.replaceAll('-', ' '));
          setDescription(`Generated from your input on ${data.created_at}`)
        };

        if (stored.uuid === uuid && stored.apology) {
            setView(stored);
        } else {
            Fetch.get(`apology/${uuid}`)            
            .then(response => {
              console.log('RRR', response);
                const [error, apology] = response;
                if (apology) {
                  setView(apology);                
                } else if (error) {
                    console.log('RES ERR', error);
                    setTitle('Not Found');
                    setDescription('Sorry, we couldn’t find the page you’re looking for.')
                    setViewing('empty');
                }
            });
        }
    }, []);

    async function toClipboard() {
        await navigator.clipboard.writeText(apology);
        setCopied(true);
    }

    function copy() {
        return (
            <div className="bg-white px-6 mb-8 lg:px-8">
                <div className="mx-auto max-w-2xl flex justify-end">
                    <button
                        className="rounded-md w-24 flex items-center justify-center bg-primary/90 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        onClick={ toClipboard }
                        type="button"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>
                        <span>
                            Copy
                        </span>                
                    </button>
                </div>
            </div>
        )
    }

    function tabs() {
      return (
        <div>
          <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
            {
              ['reason', 'apology'].map(key => {
                let classList = 'capitalize py-3 px-4 inline-flex items-center gap-x-2 text-sm text-center text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active';
                if (viewing === key) {
                  classList += ' bg-primary text-white font-bold '
                } else {
                  classList += ' bg-transparent hover:text-primary'
                }
                return (
                  <button
                    className={classList}
                    key={key}
                    onClick={ () => setViewing(key) }
                    type="button">
                      {key}
                  </button>
                )})
            }
          </nav>
        </div>
      )
    }

    
    return (
        <>
            <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-base font-semibold leading-7 text-primary capitalize">{ title }</p>
                    <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">iSorry.lol</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">{ description }</p>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-4 flex flex-col flex-1 py-8">
              { viewing === 'empty' &&
              <div className="md:-mt-24">
                <div className="mx-auto flow-root max-w-lg">
                  <h2 className="sr-only">Popular pages</h2>
                  <ul role="list" className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5">
                    {links.map((link, linkIdx) => (
                      <li key={linkIdx} className="relative flex gap-x-6 py-6">
                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                          <link.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <h3 className="text-sm font-semibold leading-6 text-gray-900">
                            <Link to={link.href}>
                              <span className="absolute inset-0" aria-hidden="true" />
                              {link.name}
                            </Link>
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-gray-600">{link.description}</p>
                        </div>
                        <div className="flex-none self-center">
                          <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    to="/apologize"
                    className="rounded-md bg-primary/80 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Create
                    <span aria-hidden="true" className='inline-block ml-2'>&rarr;</span>
                  </Link>                  
                </div>
              </div>
              }

              
              { apology && 
                  <div className='flex flex-col justify-center items-center'>
                    <div className="max-w-2xl w-full flex justify-between">                        
                        { tabs() }                      
                        { viewing === 'apology' && copy() }
                    </div>
                      
                      <div className="mx-auto max-w-7xl px-6 lg:px-8 whitespace-pre-line">
                          <div className="mx-auto max-w-2xl lg:mx-0 pb-16">                    
                              <p className="mt-6 text-lg leading-8">
                                  { viewing === 'apology' ? apology : reason }
                              </p>
                          </div>
                      </div>
                      { copy() }
                  </div>
              }
            </div>
            <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={copied}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">Successfully copied!</p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      onClick={() => {
                        setCopied(false)
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
        </>
    )
}

const Route = {
    element: <Component />,
    path: "/apology/:uuid",
};
  
export default Route;