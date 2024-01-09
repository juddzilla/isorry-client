import { HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/react/24/outline'

import { RadioGroup } from '@headlessui/react';
import { classNames } from '../Collection';

export default ({ value, onClick }) => {   
    const targets = [
        'Family',
        'Friend',
        'Coworker',
        'Neighbor',
        'Child',
        'Pet',
        'Acquaintance',
        'Other',
    ] 
    return (
        <div className="rounded-md">
            <RadioGroup value={value} className="mt-2">
                <RadioGroup.Label className="sr-only">Choose a memory option</RadioGroup.Label>
                <div className="flex justify-center">
                    { targets.map(opt => {                        
                        return (
                            <RadioGroup.Option
                                key={opt}
                                onClick={ () => onClick(opt) }         
                                value={value === opt}                                       
                                className={({ active, checked }) => classNames(
                                    checked
                                    ? 'bg-primary text-white hover:border-secondary'
                                    : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 border-transparent',
                                    'group-option cursor-pointer flex items-center justify-center border rounded-md py-4 px-2 text-sm font-semibold uppercase w-3/12 mr-4 last:mr-0 hover:border-primary hover:shadow-xl'
                                )}
                            >
                                <RadioGroup.Label as="span" className='flex flex-col justify-center items-center text-xs'>                                
                                    {opt}
                                </RadioGroup.Label>
                            </RadioGroup.Option>
                        )
                    })}
                </div>
            </RadioGroup>
        </div>
    );
}