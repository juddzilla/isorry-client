import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

export default ({ onChange}) => {
    console.log('REAS');
    const limit = 2000;
    const [reason, setReason] = useState('');
    
    function change({ target }) {
        if (target.value.length >= limit) {
            return;
        }

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
        remainingColor = reason.length >= (limit-100) ? 'text-red-600' : 'text-gray-900';        
    }
    
    return (
        <div className='p-4 bg-gray-500'>
            <form className="flex items-end" onSubmit={setChange}>
                <textarea        
                    id="reason"
                    maxLength={limit}
                    name="reason"
                    rows={3}
                    className="inline-block mr-4 flex-1 bg-gray-100 rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
                    value={ reason }
                    onChange={change}
                />
                <button
                    className='h-12 p-4 rounded-full bg-brand disabled:bg-brand/10'
                    disabled={!reason.length}                        
                    type='submit'
                >
                    <PaperAirplaneIcon className='w-4 h-4'/>
                </button>
            </form>
            
            <div>
                <span className={`py-1 px-2 w-full text-right text-sm ${remainingColor}`}>{reason.length}/{limit}</span>            
            </div>
        </div>
    );
}