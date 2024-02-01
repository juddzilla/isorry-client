import { Dialog, RadioGroup, Transition } from '@headlessui/react';
import { classNames } from '../Collection';
import { CheckIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default ({ value, onChange }) => {
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