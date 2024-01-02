import { RadioGroup } from '@headlessui/react';
import { classNames } from '../Collection';

export default ({ value, onChange }) => {
    const types = [
        {
            description: "to make sure it doesn't happen again",
            name: 'Everything You Can',
        },
        {
            description: 'to never do it again',
            name: 'Your Best',
        },
        {
            description: "aka thoughts and prayers",
            name: 'Positive Thinking and Meditation',
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