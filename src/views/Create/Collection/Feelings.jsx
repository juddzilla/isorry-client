import { Dialog, RadioGroup, Transition } from '@headlessui/react';
import { classNames } from '../Collection';

import Grimacing from '../../../images/emoji/grimacing-face_1f62c.png';
import Neutral from '../../../images/emoji/neutral-face_1f610.png';
import Smirking from '../../../images/emoji/smirking-face_1f60f.png';
import Unamused from '../../../images/emoji/unamused-face_1f612.png';
import Weary from '../../../images/emoji/weary-face_1f629.png';
import WithoutMouth from '../../../images/emoji/face-without-mouth_1f636.png';
import Woozy from '../../../images/emoji/woozy-face_1f974.png';

export default ({ value, onClick, onChange }) => {
    const emotions = [
        {
            display: 'Neutral',
            icon: Neutral,
        },
        {
            display: 'Unease',
            icon: Grimacing,
        },
        {
            display: 'Mischief',
            icon: Smirking,
        },
        {
            display: 'Unamused',
            icon: Unamused,
        },
        {
            display: 'Weary',
            icon: Weary,
        },
        {
            display: 'Woozy',
            icon: Woozy,
        },
        {
            display: 'Nothing',
            icon: WithoutMouth,
        },
    ];

    function clicked({ target }) {
        const group = target.closest('.group-option');
        const optionValue = group.getAttribute('data-value');

        onClick(optionValue);
    }
        
        return (
            <div className="rounded-md">
                <RadioGroup value={value} className="mt-2">
                    <RadioGroup.Label className="sr-only">Choose a memory option</RadioGroup.Label>
                    <div className="md:flex md:justify-between">
                    {/* <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4"> */}
                        {emotions.map((option) => (
                            <RadioGroup.Option
                                key={option.display}
                                onClick={clicked}
                                data-value={option.display}
                                value={option.display}
                                className={({ active, checked }) =>
                                    classNames(
                                        active ? 'ring-2 ring-indigo-600 ring-offset-2' : '',
                                        checked
                                            ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                                            : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50',
                                        'group-option flex flex-col items-center justify-center rounded-md py-4 px-2 text-sm font-semibold uppercase sm:flex-1 mr-2 last:mr-0'
                                    )
                                }
                            >
                                <span className="flex flex-1">
                                    <span className="flex flex-col">
                                        <RadioGroup.Label as="span" className='flex flex-col justify-center items-center'>
                                            <img src={option.icon} className="h-8 w-8" aria-hidden="true" />
                                            {/* <span>{option.display}</span> */}
                                        </RadioGroup.Label>
                                        {/* <RadioGroup.Description as="span" className="mt-2 flex items-center text-sm text-gray-500">
                                            type.description
                                        </RadioGroup.Description> */}
                                    </span>
                                </span>
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
        )
}