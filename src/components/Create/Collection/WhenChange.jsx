import { RadioGroup } from '@headlessui/react';
import { pill } from './Options';

export default function WhenChange({ onChange }) {
    const types = [
        {
            description: "I'll be a different person",
            name: 'Before They Know It',
        },
        {
            description: "I already feel like an entire new person",
            name: 'Immediately',
        },
        {
            description: "I'll be a whole new person",
            name: "When I'm ready",
        },
    ];

    return (
      <RadioGroup onChange={onChange} className='flex justify-center flex-wrap '>
        {types.map((type) => (
          <RadioGroup.Option
              key={type.name}
              value={type.name}
              className={`${pill} !block !px-0 flex-1 mr-4 last:mr-0 overflow-hidden`}
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