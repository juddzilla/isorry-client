import { Dialog, RadioGroup, Transition } from '@headlessui/react';

export default ({ onChange, value}) => {
    let remainingColor = 'text-gray-300';
    
    if (value.length) {
        remainingColor = value.length >= 900 ? 'text-red-600' : 'text-gray-900';        
    }
    
    return (
        <div className='flex flex-col'>
            <textarea        
                id="reason"
                maxLength={ 1000 }
                name="reason"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                value={ value }
                onChange={ onChange }
            />
            <span className={`py-1 px-2 w-full text-right text-sm ${remainingColor}`}>{value.length}/1000</span>            
        </div>
    );
}