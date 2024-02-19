import { RadioGroup } from '@headlessui/react';
import { pill } from './Options';

export default function Type({ onChange }) {
    const types = [
        {
            name: 'Fauxpology',
            description: 'For when you HAVE to apologize, but not WANT to apologize.'
        },

        {
            name: 'Classic',
            description: "A heartfelt expression of remorse for one's actions or words."
        }
    ];

    function onChoice({target}) {
      const group = target.closest('.type-group');    
      const value = group.getAttribute('data-value');      
      onChange(value);
    }

    return (      
      <RadioGroup className='flex justify-center flex-wrap overflow-hidden'>
        <RadioGroup.Label className="sr-only text-base font-semibold leading-6 text-gray-900">
          About how much responsibility are you willing to own up to?
        </RadioGroup.Label>
      
        {types.map((type) => (
            <RadioGroup.Option
              key={type.name}
              data-value={type.name}
              onClick={onChoice}
              value={type.name}
              className={`${pill} type-group !px-0 w-5/12 mr-4 overflow-hidden flex-1`}
            >
              <RadioGroup.Label as="span" className='px-3 py-2 bg-white'>
                <div>{type.name}</div>
                <span className="text-sm text-gray-500">{type.description}</span>
              </RadioGroup.Label>                              
          </RadioGroup.Option>
        ))}
        </RadioGroup>
    );
}