
import { Fragment, useRef, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react';
import { CheckIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

import Grimacing from '../images/emoji/grimacing-face_1f62c.png';
import Neutral from '../images/emoji/neutral-face_1f610.png';
import Smirking from '../images/emoji/smirking-face_1f60f.png';
import Unamused from '../images/emoji/unamused-face_1f612.png';
import Weary from '../images/emoji/weary-face_1f629.png';
import WithoutMouth from '../images/emoji/face-without-mouth_1f636.png';
import Woozy from '../images/emoji/woozy-face_1f974.png';

import Heading from './Create/Heading';
import Collection, { classNames } from './Create/Collection';

const rangeClassList = `w-full bg-transparent cursor-pointer appearance-none mx-4 disabled:opacity-50 disabled:pointer-events-none focus:outline-none
[&::-webkit-slider-thumb]:w-2.5
[&::-webkit-slider-thumb]:h-2.5
[&::-webkit-slider-thumb]:-mt-0.5
[&::-webkit-slider-thumb]:appearance-none
[&::-webkit-slider-thumb]:bg-white
[&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
[&::-webkit-slider-thumb]:rounded-full
[&::-webkit-slider-thumb]:transition-all
[&::-webkit-slider-thumb]:duration-150
[&::-webkit-slider-thumb]:ease-in-out
[&::-webkit-slider-thumb]:dark:bg-slate-700

[&::-moz-range-thumb]:w-2.5
[&::-moz-range-thumb]:h-2.5
[&::-moz-range-thumb]:appearance-none
[&::-moz-range-thumb]:bg-white
[&::-moz-range-thumb]:border-4
[&::-moz-range-thumb]:border-blue-600
[&::-moz-range-thumb]:rounded-full
[&::-moz-range-thumb]:transition-all
[&::-moz-range-thumb]:duration-150
[&::-moz-range-thumb]:ease-in-out

[&::-webkit-slider-runnable-track]:w-full
[&::-webkit-slider-runnable-track]:h-2
[&::-webkit-slider-runnable-track]:bg-gray-100
[&::-webkit-slider-runnable-track]:rounded-full
[&::-webkit-slider-runnable-track]:dark:bg-gray-700

[&::-moz-range-track]:w-full
[&::-moz-range-track]:h-2
[&::-moz-range-track]:bg-gray-100
[&::-moz-range-track]:rounded-full`;

const Component = () => {


    const actions = (current) => {

    };
    const [form, setForm] = useState({
        reason: '',
        selfFeeling: '',
        selfFault: '',
        remorse: '',
        empathy: '',
        type: '',
    });
    const [open, setOpen] = useState(true);

    
    const [stage, setStage] = useState('reason');

    const cancelButtonRef = useRef(null);


    const Scale = (key) => {
        console.log(Array(5));
        return (
            <div className="isolate inline-flex rounded-md shadow-sm">
                <RadioGroup value={form[key]} onChange={(value) => { setForm({ ...form, [key]: value }) }} className="mt-2">
                    <RadioGroup.Label className="sr-only">Choose a memory option</RadioGroup.Label>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                        {[...Array(5)].map((e, i, a) => (
                            <RadioGroup.Option
                                key={i}
                                value={i + 1}
                                className={({ active, checked }) => classNames(
                                    active ? 'ring-2 ring-indigo-600 ring-offset-2' : '',
                                    checked
                                        ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                                        : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50',
                                    'flex items-center justify-center rounded-md py-2 px-2 text-sm font-semibold uppercase sm:flex-1'
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
    return (
        <>        
            <Collection />
            <Heading />
        </>

    )
}

const Route = {
    element: <Component />,
    path: "/create",
};

export default Route;