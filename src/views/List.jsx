import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';
import Fetch from '../fetch';
import OAuth from './o/index';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

import { AuthContext } from '../App';
import Trigger from '../components/Create/Trigger';

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
    }, []);

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
                                    <div className='flex flex-col items-center'>
                                        <div className='text-xl text-center my-8'>This is more deserted than a party without cake. Bake your first Apology and sweeten the deal!</div>
                                        <Trigger>Create Your First</Trigger>
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