import { HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/react/24/outline'

import { RadioGroup } from '@headlessui/react';
import { classNames } from '../Collection';

export default ({ value, onClick }) => {
    console.log('BOOL', value);
    function clicked({ target }) {
        const group = target.closest('.group-option');
        const optionValue = group.getAttribute('data-value');

        onClick(optionValue);
    }

    return (
        <div className="rounded-md">
            <RadioGroup value={value} className="mt-2">
                <RadioGroup.Label className="sr-only">Choose a memory option</RadioGroup.Label>
                <div className="flex justify-center">
                    { [true, false].map(opt => {
                        const Icon = opt ? HandThumbUpIcon : HandThumbDownIcon;
                        return (
                            <RadioGroup.Option
                                key={opt}
                                onClick={ () => onClick(opt) }         
                                value={value === opt}                                       
                                className={({ active, checked }) => classNames(
                                    checked
                                    ? 'bg-primary text-white hover:border-secondary'
                                    : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 border-transparent',
                                    'group-option flex items-center justify-center border rounded-md py-4 px-2 text-sm font-semibold uppercase w-3/12 mr-4 last:mr-0 hover:border-primary hover:shadow-xl'
                                )}
                            >
                                <RadioGroup.Label as="span" className='flex flex-col justify-center items-center'>                                
                                    <Icon className='h-10 w-auto' />
                                </RadioGroup.Label>
                            </RadioGroup.Option>
                        )
                    })}
                </div>
            </RadioGroup>
        </div>
    );
}