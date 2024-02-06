import { useContext } from 'react';
import { ShowCreateContext } from '../../App';

const Trigger = ({ children }) => {
    const {showCreate, setShowCreate} = useContext(ShowCreateContext);

    return (
        <>
            <div
                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-brand px-3 py-2 text-sm font-semibold shadow-sm hover:bg-brand/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={() => { setShowCreate(!showCreate)}}
            >                                              
                { children }      
            </div>
        </>
    )
};

export default Trigger;