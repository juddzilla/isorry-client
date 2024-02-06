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
      <RadioGroup onChange={onChange}>
        {types.map((type) => (
          <RadioGroup.Option
              key={type.name}
              value={type.name}
              className={pill}
            >
              <RadioGroup.Label as="div">
                {type.name}
                <span className="ml-1 text-gray-500">{type.description}</span>
              </RadioGroup.Label>                      
            </RadioGroup.Option>
          ))}
        </RadioGroup>
    );
}