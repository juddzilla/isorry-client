import { HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/react/24/outline';

import { RadioGroup } from '@headlessui/react';
import { pill } from './Options';

export default function Bool({ id, onClick }) {    
    return (
        <RadioGroup>
            <RadioGroup.Label className="sr-only">Choose a memory option</RadioGroup.Label>
            <div className="flex justify-center flex-wrap">
                { [true, false].map(opt => {
                    const Icon = opt ? HandThumbUpIcon : HandThumbDownIcon;
                    return (
                        <RadioGroup.Option
                            key={`${id}-${opt}`}
                            onClick={ () => onClick(opt) }         
                            value={opt}                                       
                            className={`${pill} px-6 py-2`}
                        >
                            <RadioGroup.Label as="span" className='flex flex-col justify-center items-center'>                                
                                <Icon className='h-8 w-auto' />
                            </RadioGroup.Label>
                        </RadioGroup.Option>
                    )
                })}
            </div>
        </RadioGroup>        
    );
}