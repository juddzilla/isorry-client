import { RadioGroup } from '@headlessui/react';
import { pill } from './Options';

export default function Type({ onChange }) {
    const types = [
        {
            name: 'None',
            description: 'For when you HAVE to apologize, but not WANT to apologize.'
        },

        {
            name: 'Full',
            description: 'This is on me.'
        }
    ];

    function onChoice({target}) {
      const group = target.closest('.type-group');    
      const value = group.getAttribute('data-value');      
      onChange(value);
    }

    return (      
      <RadioGroup className='flex'>
        <RadioGroup.Label className="sr-only text-base font-semibold leading-6 text-gray-900">
          About how much responsibility are you willing to own up to?
        </RadioGroup.Label>
      
        {types.map((type) => (
            <RadioGroup.Option
              key={type.name}
              data-value={type.name}
              onClick={onChoice}
              value={type.name}
              className={`${pill} text-sm py-2 type-group flex-1 mr-4 last:mr-0 !justify-start !items-start`}
            >
              <RadioGroup.Label as="span">
                <div>{type.name}</div>
                <span className="text-gray-500">{type.description}</span>
              </RadioGroup.Label>                              
          </RadioGroup.Option>
        ))}
        </RadioGroup>
    );
}