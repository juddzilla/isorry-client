import { RadioGroup } from '@headlessui/react';
import { pill } from './Options';

export default function NoApology({ onChange }) {
    const types = [
        {
            description: "Instead of apologizing for the action, shifts the blame to their sensitivity.",
            example: "I'm sorry if you were offended.",
            name: 'Non-Apology',
        },
        {
            description: "Offers an excuse for your behavior rather than taking responsibility.",
            example: "I'm sorry, but you know I was really stressed.",
            name: 'Justification Apology',
        },
        {
            description: 'Shift the blame onto them, minimize your personal responsibility.',
            example: "I'm sorry, but you made me do it.",
            name: 'Blame-Shift Apology',
        },
        {
            description: "Put conditions on the apology, making it contingent on their actions.",
            example: "I'm sorry if you'll just forgive me.",
            name: 'Conditional Apology',
        },
        {
            description: "Downplay the impact of the action. Minimize its significance.",
            example: "I'm sorry if it bothered you a little.",
            name: 'Minimizing Apology',
        },
        {
            description: "Turn the tables by bringing up their mistakes.",
            example: "I'm sorry, but what about when you did...",
            name: 'Redirected Apology',
        },
        {
            description: 'Acknowledge their feelings without admitting fault or expressing genuine remorse.',
            example: "I'm sorry you feel that way.",
            name: 'Empty Apology',
        },
        {
            description: "Express regret not for the action but for the consequence of being caught.",
            example: "I'm so sorry you found out.",
            name: 'Fake Regret Apology',
        },
    ];

    return (
      <RadioGroup onChange={onChange}>
        {types.map((type) => (
          <RadioGroup.Option
            key={type.name}
            value={type.name}
              className={`${pill} !block py-2 px-6`}
              >
              <RadioGroup.Label as="div">
                <div className='text-center'>{type.name}</div>
                <span className="ml-1 text-gray-500">{type.description}</span>
              </RadioGroup.Label> 
               
              <RadioGroup.Description as="div" className="mt-2 italic text-center text-sm font-medium text-gray-900">
                "{type.example}"
              </RadioGroup.Description>
          </RadioGroup.Option>
            ))}
          </RadioGroup>
    );
} 