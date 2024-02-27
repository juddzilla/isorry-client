import { RadioGroup } from '@headlessui/react';
import { pill } from './Options';

export default function WillDo({ onChange }) {
    const types = [
        {
            description: "to make sure it doesn't happen again",
            name: 'Everything I Can',
        },
        {
            description: 'to never do it again',
            name: 'My Best',
        },
        {
            description: "aka thoughts and prayers",
            name: 'Positive Thinking and Meditation',
        },        
    ];

    return (
      <RadioGroup onChange={onChange} className='flex flex-col md:flex-row'>
        {types.map((type) => (
          <RadioGroup.Option
            key={type.name}
            value={type.name}
            className={`${pill} !block !px-0 flex-1 md:mr-4 mr-0 overflow-hidden`}
          >
              <RadioGroup.Label as="div" className='px-3 pt-3  pb-2 bg-white pb-1'>
                <div className=''>{type.name}</div>
                <span className="text-gray-500 text-sm">{type.description}</span>
              </RadioGroup.Label>
          </RadioGroup.Option>
        ))}
    </RadioGroup>
    );
}