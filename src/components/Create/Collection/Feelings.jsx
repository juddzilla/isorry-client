import { RadioGroup } from '@headlessui/react';

import Emoji from './Emoji';
import { pill } from './Options';


export default ({ onClick }) => {
    const emotions = [
        {
            display: 'Neutral',
        },
        {
            display: 'Unease',
        },
        {
            display: 'Mischief',
        },
        {
            display: 'Unamused',
        },
        {
            display: 'Weary',
        },
        {
            display: 'Woozy',
        },
        {
            display: 'Nothing',
        },
    ];

    function clicked({ target }) {
        const group = target.closest('.group-option');
        const optionValue = group.getAttribute('data-value');

        onClick(optionValue);
    }
        
        return (
            <RadioGroup className="relative">
                <RadioGroup.Label className="sr-only">Choose a feeling</RadioGroup.Label>
                <div className="md:flex md:justify-between overflow-visible">                
                    {emotions.map((option) => (
                        <RadioGroup.Option
                            key={option.display}
                            onClick={clicked}
                            data-value={option.display}
                            value={option.display}
                            className={`${pill} justify-center !px-0 !min-w-0 group-option`}
                        >
                            
                            <RadioGroup.Label as="span" className='flex flex-col justify-center items-center'>          
                                { Emoji(option.display) }                                            
                            </RadioGroup.Label>
                            
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        )
}