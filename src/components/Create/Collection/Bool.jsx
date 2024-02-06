import { HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/react/24/outline';

import { RadioGroup } from '@headlessui/react';
import { pill } from './Options';

export default function Bool({ onClick }) {    
    return (
        <RadioGroup>
            <RadioGroup.Label className="sr-only">Choose a memory option</RadioGroup.Label>
            <div className="flex justify-center flex-wrap p-4">
                { [true, false].map(opt => {
                    const Icon = opt ? HandThumbUpIcon : HandThumbDownIcon;
                    return (
                        <RadioGroup.Option
                            key={opt}
                            onClick={ () => onClick(opt) }         
                            value={opt}                                       
                            className={pill}
                        >
                            <RadioGroup.Label as="span" className='flex flex-col justify-center items-center'>                                
                                <Icon className='h-6 w-auto' />
                            </RadioGroup.Label>
                        </RadioGroup.Option>
                    )
                })}
            </div>
        </RadioGroup>        
    );
}