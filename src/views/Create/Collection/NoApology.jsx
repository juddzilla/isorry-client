import { RadioGroup } from '@headlessui/react';
import { classNames } from '../Collection';
import { CheckCircleIcon } from '@heroicons/react/24/outline'

export default ({ value, onChange }) => {
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
      <RadioGroup value={value} onChange={onChange}>
        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
          {types.map((type) => (
            <RadioGroup.Option
              key={type.name}
              value={type.name}
                className={({ active }) =>
                    classNames(
                      active ? 'border-primary ring-2 ring-secondary' : 'border-gray-300',
                      'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none  hover:border-primary hover:shadow-xl'
                    )
                  }
                >
                  {({ checked, active }) => (
                    <>
                      <span className="flex flex-1">
                        <span className="flex flex-col">
                          <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                            {type.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description as="span" className="mt-1 flex items-center text-sm text-gray-500">
                            {type.description}
                          </RadioGroup.Description>
                          <RadioGroup.Description as="span" className="mt-6 text-sm font-medium text-gray-900">
                            {type.example}
                          </RadioGroup.Description>

                        </span>
                      </span>
                      <CheckCircleIcon
                        className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-primary')}
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          active ? 'border' : 'border-2',
                          checked ? 'border-primary' : 'border-transparent',
                          'pointer-events-none absolute -inset-px rounded-lg'
                        )}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
    );
}