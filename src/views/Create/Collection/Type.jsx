import { RadioGroup } from '@headlessui/react';
import { classNames } from '../Collection';

export default ({ value, onChange }) => {
    const types = [
        {
            name: 'None',
            description: 'For when you HAVE to apologize, but not WANT to apologize.'
        },
        {
            name: 'Half',
            description: "We both could have done something different."
        },
        {
            name: 'Full',
            description: 'This is on me.'
        }
    ];

    return (
      <RadioGroup value={value}>
        <RadioGroup.Label className="sr-only text-base font-semibold leading-6 text-gray-900">
          About how much responsibility are you willing to own up to?
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
                      active ? 'border-secondary ring-2 ring-primary' : 'border-gray-300',
                      'type-group relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none hover:border-primary hover:shadow-xl'
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
                      </span>
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