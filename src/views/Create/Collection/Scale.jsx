import { RadioGroup } from '@headlessui/react';
import { classNames } from '../Collection';

export default ({ value, onClick }) => {
    console.log('Vvalue', value);
    function clicked({ target }) {
        const group = target.closest('.group-option');
        const optionValue = group.getAttribute('data-value');

        console.log('optionValue', optionValue);
        onClick(optionValue);
    }

    return (
        <div className="rounded-md shadow-sm">
            <RadioGroup value={value} className="mt-2">
                <RadioGroup.Label className="sr-only">Choose a memory option</RadioGroup.Label>
                <div className="flex">
                    {[...Array(7)].map((e, i, a) => (
                        <RadioGroup.Option
                            key={i}
                            onClick={clicked}
                            data-value={`${i + 1}`}
                            value={`${i + 1}`}
                            className={({ active, checked }) => classNames(
                                active ? 'ring-2 ring-indigo-600 ring-offset-2' : '',
                                checked
                                    ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                                    : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50',
                                'group-option flex items-center justify-center rounded-md py-4 px-2 text-sm font-semibold uppercase sm:flex-1 mr-4 last:mr-0'
                            )}
                        >
                            <RadioGroup.Label as="span" className='flex flex-col justify-center items-center'>
                                <span>{i + 1}</span>
                            </RadioGroup.Label>
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        </div>
    );
}