import { Dialog, RadioGroup, Transition } from '@headlessui/react';
import { classNames } from '../Collection';
import { CheckIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default ({ value, onChange }) => {
    const types = [
        {
            name: '0%',
            description: 'Zero as in zero responsibility. For when you HAVE to apologize, but not WANT to apologize.'
        },
        {
            name: '50%',
            description: "I made a mistake, they made a mistake."
        },
        {
            name: '100%',
            description: 'My bad yo. My bad.'
        }
    ];

    return (
      <RadioGroup value={value}>
        <RadioGroup.Label className="sr-only text-base font-semibold leading-6 text-gray-900">
          What percentage of this is your fault?
        </RadioGroup.Label>
      
        <div className="mt-4 flex grid grid-cols-1 md:grid-cols-3 gap-y-6 msm:grid-cols-3 sm:gap-x-4">          
          {types.map((type) => (
            <RadioGroup.Option
              key={type.name}
              data-value={type.name}
              onClick={onChange}
              value={type.name}
                className={({ active }) =>
                    classNames(
                      active ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-300',
                      'type-group relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                    )
                  }
                >
                  {({ checked, active }) => (
                    <>
                      <span className="flex flex-col w-full">
                        <RadioGroup.Label as="span" className="block text-sm text-center font-medium text-gray-900">
                          {type.name}
                        </RadioGroup.Label>
                        <RadioGroup.Description as="span" className="mt-1 text-center text-sm text-gray-500">
                          {type.description}
                        </RadioGroup.Description>
                        <RadioGroup.Description as="span" className="mt-6 text-center text-sm font-medium text-gray-900">
                          other thing
                        </RadioGroup.Description>
                      </span>
                      <CheckCircleIcon
                        className={classNames(!checked ? 'invisible' : '', 'h-6 w-6 text-indigo-600 absolute right-2 top-2')}
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          active ? 'border' : 'border-2',
                          checked ? 'border-indigo-600' : 'border-transparent',
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