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
        <div className='pl-16'>
            <form className="flex items-end bg-white rounded-xl border-0 relative shadow-lg " onSubmit={setChange}>                
                <textarea
                    id="reason"
                    maxLength={limit}
                    name="reason"
                    ref={textareaRef}
                    className="inline-block border border-gray-300 flex-1 p-3 pr-11 rounded-xl text-gray-900 focus:ring-transparent outline-0 border-0 max-h-40 overflow-scroll placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    value={ reason }
                    onChange={change}
                />
                <button
                    className='absolute right-0 bottom-0 h-10 w-10 mr-1 mb-1 flex justify-center items-center bg-primary rounded-full text-white disabled:bg-transparent disabled:text-gray-200'
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