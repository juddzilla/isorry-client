import { RadioGroup } from '@headlessui/react';
import { pill } from './Options';

export default ({ onChange }) => {
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