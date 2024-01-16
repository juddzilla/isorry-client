import { useContext, useEffect, useState } from 'react';
import Fetch from '../fetch';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

import Angel from '../images/emoji/smiling-face-with-halo_1f607.png';
import Devil from '../images/emoji/smiling-face-with-horns_1f608.png';
import Diagonal from '../images/emoji/face-with-diagonal-mouth_1fae4.png';
import Pleading from '../images/emoji/pleading-face_1f97a.png';

import { AuthContext } from '../App';

const Component = () => {
    const [list, setList] = useState(null);
    const [error, setError] = useState(null);
    const {auth, setAuth} = useContext(AuthContext);

    useEffect(() => {
        Fetch.get('apologize/list')
        .then(res => {
            const [err, apologies] = res;
            if (err) {
                console.log('ERR', err);
                setError(err);
            } else {
                console.log('apologies', apologies);
                setList(apologies);
                setAuth(true);
            }

        });
    }, [])

    const icon = (type) => {
        const mapping = {
            'None': Devil,
            'Half': Pleading,
            'Full': Angel,
        };

        const src = mapping[type] || Diagonal;
        return (
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                <img src={src} className="h-12 w-12 text-green-600" aria-hidden="true" />
            </div>
        );
    };

    const Loading = () => (<div>Loading</div>)


    return (
        <div className='flex flex-col flex-1'>
            <div className="bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
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
                            <div>
                            <ul role="list" className="divide-y divide-gray-100">
                            {list.map((item) => (
                                <li key={item.uuid} className="relative flex justify-between gap-x-6 py-5">
                                    <div className="flex min-w-0 gap-x-4">                                    
                                        { icon(item.type) }
                                        <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">
                                            <a href={`/apology/${item.uuid}`}>
                                            <span className="absolute inset-x-0 -top-px bottom-0" />
                                                {item.reason} ...
                                            </a>
                                        </p>
                                        <p className="mt-1 flex text-xs leading-5 text-gray-500">
                                            <a href={`/apology/${item.uuid}`} className="relative truncate hover:underline">
                                            {item.created_at}
                                            </a>
                                        </p>
                                        </div>
                                    </div>
                                    <div className="flex shrink-0 items-center gap-x-4">                                    
                                        <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                    </div>
                                </li>                                                                                  
                            ))}
                            </ul>                           
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