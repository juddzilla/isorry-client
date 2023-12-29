import { RadioGroup } from '@headlessui/react';
import { classNames } from '../Collection';

export default ({ value, onClick, options }) => {
    function clicked({ target }) {
        const group = target.closest('.group-option');
        const optionValue = group.getAttribute('data-value');

        onClick(optionValue);
    }

    return (
        <div className="rounded-md">
            <RadioGroup value={value} className="mt-2">
                <RadioGroup.Label className="sr-only">Choose a memory option</RadioGroup.Label>
                <div className="flex justify-center">
                    {options.map((e, i, a) => (
                        <RadioGroup.Option
                            key={e}
                            onClick={clicked}
                            data-value={e}
                            value={e}
                            className={({ checked }) => classNames(
                                checked
                                ? 'border-primary hover:bg-secondary ring-secondary text-white shadow-xl font-bold ring-1 ring-inset ring-gray-300 '
                                : 'bg-white tborder-gray-300 ext-gray-900 hover:border-secondary',
                                'group-option cursor-pointer flex items-center border  rounded-md py-2 px-3 text-sm font-semibold mr-4 last:mr-0 hover:shadow-xl'
                            )}
                        >
                            <span className="flex flex-col items-center">
                                <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900 flex justify-center items-center">
                                    <span>{i + 1}</span>
                                </RadioGroup.Label>
                                <RadioGroup.Description as="span" className="mt-1 flex items-center text-sm text-gray-500">
                                    <span>{ e }</span>
                                </RadioGroup.Description>
                            </span>
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        </div>
    );
}