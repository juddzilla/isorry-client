import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';

import Store from '../store';

const Component = () => {
    const [apology, setApology] = useState(null);  
    const [copied, setCopied] = useState(false);  
    let { uuid } = useParams();

    const API = document.querySelector("meta[name='api']").getAttribute("content");

    useEffect(() => {
        const stored = Store.get();

        if (stored.uuid === uuid && stored.apology) {
            setApology(stored.apology);
        } else {
            fetch(`${API}/apology/${uuid}`)
            .then(res => res.json())
            .then(res => {
                if (res.message) {                
                    setApology(res.message);
                } else if (res.error) {
                    console.log('RES ERR', res.error);
                }
            })
            .catch(err => {
                console.log('ERR', err);
            })
        }
    }, [])

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

    
    return (
        <>
            <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-base font-semibold leading-7 text-primary">AI Generated</p>
                    <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">iSorry.lol</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Engage with Genuine Amends: Tailored messages expressing regret and facilitating reconciliation on our unique apology platform.
                    </p>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                { apology && 
                    <>
                        { copy() }
                        <div className="mx-auto max-w-7xl px-6 lg:px-8 whitespace-pre-line">
                            <div className="mx-auto max-w-2xl lg:mx-0 pb-16">                    
                                <p className="mt-6 text-lg leading-8">
                                    {apology}
                                </p>
                            </div>
                        </div>
                        { copy() }
                    </>
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