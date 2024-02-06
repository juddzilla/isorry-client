import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';

import Collection from './Create/Collection';

const Create = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-brand px-3 py-2 text-sm font-semibold shadow-sm hover:bg-brand/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={() => { setOpen(!open)}}
            >                              
                <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                Genuine Gestures Guidance        
            </div>
            <Collection open={open} setOpen={setOpen} />
        </>
    )
};

export default Create;