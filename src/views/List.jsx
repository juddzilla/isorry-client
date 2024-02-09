import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';
import Fetch from '../fetch';
import OAuth from './o/index';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

import Angel from '../images/emoji/smiling-face-with-halo_1f607.png';
import Devil from '../images/emoji/smiling-face-with-horns_1f608.png';
import Diagonal from '../images/emoji/face-with-diagonal-mouth_1fae4.png';
import Pleading from '../images/emoji/pleading-face_1f97a.png';

import { AuthContext } from '../App';

const Component = () => {
    const [list, setList] = useState(null);
    const [error, setError] = useState(null);
    const {setAuth} = useContext(AuthContext);
    const {hash, search} = useLocation();

    function getList() {
        Fetch.get('apologize/list')
        .then(res => {
            const [err, apologies] = res;
            if (err) {
                setError(err);
                setAuth(false);
            } else {
                setList(apologies);
                setAuth(true);
            }
        });
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(search);
        let params = Object.fromEntries(urlParams);
        
        if (!!hash) {
            function parseHash(str) {
                var pieces = str.split("&"), data = {}, i, parts;                
                for (i = 0; i < pieces.length; i++) {
                    parts = pieces[i].split("=");
                    if (parts.length < 2) {
                        parts.push("");
                    }
                    data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
                }
                return data;
            }

            params = {...params, ...parseHash(hash.replace('#', ''))};        
        }


        if (Object.hasOwn(params, 'provider')) {
            OAuth(params)
            .then(res => {
                const [err] = res;          
                setAuth(!err);
                if (!err) {
                    window.history.pushState("", document.title, window.location.pathname);
                    getList();
                }
            });
        } else {
            getList();
        }
    }, [])

    const icon = (type) => {
        const mapping = {
            'None': Devil,
            'Half': Pleading,
            'Full': Angel,
        };

        const src = mapping[type] || Diagonal;
        return (
            <img src={src} alt='type-emoji' className="h-12 w-12 text-green-600" aria-hidden="true" />            
        );
    };

    const Loading = () => (<div>Loading</div>)


    return (
        <div className='flex flex-col flex-1'>
            <div className="bg-primary px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Your Apologies</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Explore your heartfelt apologies – a collection of sincere expressions, reflections, and amends.
                    </p>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-4 flex flex-col flex-1 py-8">
                { error ? (
                    <div>Login and see your apologies.</div>
                ) : (
                    <div>
                        { list === null ? (
                            <>{ Loading() }</>
                        ) : (
                            <div className="mx-auto max-w-2xl lg:mx-0 pb-16">  
                                { !list.length ? (
                                    <div>
                                        <div>Nothing to see here</div>
                                        <button
                                            type="button"
                                            className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            <svg
                                            className="mx-auto h-12 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                            >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
                                            />
                                            </svg>
                                            <span>&#2639 </span>
                                            <span className="mt-2 block text-sm font-semibold text-gray-900">Create a new database</span>
                                        </button>
                                  </div>
                                ) : (
                                    <ul className="divide-y divide-gray-100">
                                    {list.map((item, index) => (
                                        <li key={item.uuid} className="relative flex justify-between py-5">
                                            <div className='font-semibold mr-4'>{ index + 1}</div>
                                            <div className="flex min-w-0 w-full">                                    
                                                
                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm font-semibold leading-6 text-gray-900">
                                                        <Link to={`/apology/${item.uuid}`}>                                                    
                                                            {item.reason} ...
                                                        </Link>
                                                    </p>
                                                    <p className="mt-1 flex text-xs leading-5 text-gray-500">
                                                        <Link to={`/apology/${item.uuid}`} className="relative truncate hover:underline">
                                                        {moment(item.created_at).format('LLLL')}
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex shrink-0 items-center gap-x-4">   
                                                <Link to={`/apology/${item.uuid}`}>
                                                    <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                                </Link>                                 
                                            </div>
                                        </li>                                                                                  
                                    ))}
                                    </ul>                           
                                )}
                        </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

const Route = {
    element: <Component />,
    path: "/sorries",
};
  
export default Route;