import { useRef, useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

export default function Reason({ onChange}) {    
    const limit = 2000;
    const [reason, setReason] = useState('');
    const textareaRef = useRef(null);
    
    function change({ target }) {
        if (target.value.length >= limit) {
            return;
        }
        const textarea = textareaRef.current;        
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;

        setReason(target.value);
    }

    function setChange(e) {
        e.preventDefault();
        if (reason.length) {
            onChange(reason);
        }
    }

    let remainingColor = 'text-gray-300';
    
    if (reason.length) {
        remainingColor = reason.length >= (limit-100) ? 'text-red-600' : 'text-secondary';        
    }
    
    return (
        <div className=''>
            <form className="flex border-0 relative" onSubmit={setChange}>                
                <textarea
                    id="reason"
                    maxLength={limit}
                    name="reason"
                    ref={textareaRef}
                    className="inline-block border border-gray-800 flex-1 p-3 pr-11 mr-2 rounded-xl text-gray-900 focus:ring-transparent outline-0 max-h-40 overflow-scroll placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    value={ reason }
                    onChange={change}
                />
                <button
                    className='w-10 absolute h-full -right-10 flex justify-center items-center bg-primary text-white disabled:bg-transparent disabled:text-gray-200'
                    disabled={!reason.length}                        
                    type='submit'
                >
                    <PaperAirplaneIcon className='w-4 h-4'/>
                </button>                
            </form>
            
            <div className='flex justify-end'>
                <span className={`py-1 px-2 w-full text-right text-sm ${remainingColor}`}>{reason.length}/{limit}</span>            
            </div>
        </div>
    );
}