
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react';
import { CheckIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

import Diagonal from '../../images/emoji/face-with-diagonal-mouth_1fae4.png';
import Grimacing from '../../images/emoji/grimacing-face_1f62c.png';
import Neutral from '../../images/emoji/neutral-face_1f610.png';
import Smirking from '../../images/emoji/smirking-face_1f60f.png';
import Unamused from '../../images/emoji/unamused-face_1f612.png';
import Weary from '../../images/emoji/weary-face_1f629.png';
import WithoutMouth from '../../images/emoji/face-without-mouth_1f636.png';
import Woozy from '../../images/emoji/woozy-face_1f974.png';

import Generating from './Collection/Generating';
import NoApology from './Collection/NoApology';
import Reason from './Collection/Reason';
import Type from './Collection/Type';
import Feelings from './Collection/Feelings';
import Scale from './Collection/Scale';

export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
};

export default () => {
    const initialStage = 'reason';
    const [open, setOpen] = useState(true);
    const [reason, setReason] = useState('');
    const [type, setType] = useState('');
    const [steps, setSteps] = useState([initialStage]);
    const [form, setForm] = useState({
        generating: '',
        reason: '',
        type: '',
        noApology: '',

        yourFeeling: '',
        yourFault: '',
        yourRemorse: '',
        yourEmpthay: '',
        theirFeelings: '',
        theirRightFeel: '',
        willingToChange: '',
        willChange: '',
        willDo: '',
        whenChange: '',
    });

    const cancelButtonRef = useRef(null);

    function updateSteps(nextStep) {
        setSteps([...steps, nextStep]);
    }

    function updateType() {
        if (type === '0') {
            updateSteps('noApology');
        } else {
            updateSteps(ordered[0]);
        }
    }

    useEffect(() => {
        if (type) {
            updateType();
        }
    }, [type]);

    const getCurrentStep = () => steps[steps.length - 1];

    const ordered = [
        'yourFeeling',
        // 'yourFault',
        'yourRemorse',
        'yourEmpthay',
        'theirFeelings',
        'theirRightFeel',
        'willingToChange',
        'willChange',
        'willDo',
        'whenChange',
    ];
    
    const updateForm = (key, newValue) => {
        console.log('key', key, newValue);
        setForm({...form, [key]: newValue});

        const currentStep = getCurrentStep();
        let nextStep = '';
        if (['noApology', ordered[ordered.length - 1]].includes(currentStep)) {
            nextStep = 'generating';
        } else {
            const currentIndex = ordered.indexOf(currentStep);
            nextStep = ordered[currentIndex + 1];
        }
        updateSteps(nextStep);

        setTimeout(() => {
            console.log('FORM', form);
        }, 2000);
    };

    const stepTemplates = {
        reason: {
            body: Reason.bind(null, { value: reason, onChange: ({ target }) => {
                if (target.value.length >= 1000) {
                    return;
                }

                setReason(target.value);
            }}),
            description: 'Let it all go. Hold nothing back. 1000 character limit',
            title: 'What would you like to apologize for?',

        },
        type: {
            body: Type.bind(null, { value: type, onChange: ({ target }) => {
                const group = target.closest('.type-group');
                const value = group.getAttribute('data-value');

                if (value === type) {
                    updateType();
                } else {
                    setType(value);
                }
            } }),
            description: "Are you apologzing for something that wasn't on you? Or maybe y'all should split blame? Or was this all your bad? Be honest.",
            title: 'What percentage of this is your fault?',
        },
        noApology: {
            body: NoApology.bind(null, { value: form.noApology, onChange: updateForm.bind(null, 'noApology')}),
            description: 'Designed to manipulate or deflect responsibility rather than genuinely express remorse. ',
            title: 'Fake Apologies',
        },
        generating: {
            body: Generating,
            description: 'This may take a minute',
            title: 'Generating',
        },
        yourFeeling: {
            body: Feelings.bind(null, { value: form.yourFeeling, onClick: updateForm.bind(null, 'yourFeeling')}),
            description: '',
            title: 'How Are You Feeling?',
        },
        // yourFault: {
        //     body: Scale.bind(null, { value: form.yourFault, onClick: updateForm.bind(null, 'yourFault')}),
        //     description: 'sfsf',
        //     title: 'How Much is you fault?',
        // },
        yourRemorse: {
            body: Scale.bind(null, { value: form.yourRemorse, onClick: updateForm.bind(null, 'yourRemorse')}),
            description: '1 is remorseless, 7 is so remoreseful. So remorseful.',
            title: 'Rate your REMORSE',
        },
        yourEmpthay: {
            body: Scale.bind(null, { value: form.yourEmpthay, onClick: updateForm.bind(null, 'yourEmpthay')}),
            description: "1 is you're in  empathy deficit, 7 is you have an empathy surplus.",
            title: 'Rate your EMPATHY',
        },
        theirFeelings: {
            body: Feelings.bind(null, { value: form.theirFeelings, onClick: updateForm.bind(null, 'theirFeelings')}),
            description: '',
            title: 'How Do You They Feel?',
        },
        theirRightFeel: {
            body: Feelings.bind(null, { value: form.theirRightFeel, onClick: updateForm.bind(null, 'theirRightFeel')}),
            description: 'sfsf',
            title: 'Do they have the right to feel that way?',
        },
        willingToChange: {
            body: Scale.bind(null, { value: form.willingToChange, onClick: updateForm.bind(null, 'willingToChange')}),
            description: 'sfsf',
            title: 'Are you willing to change?',
        },
        willChange: {
            body: Scale.bind(null, { value: form.willChange, onClick: updateForm.bind(null, 'willChange')}),
            description: 'sfsf',
            title: 'Will you change?',
        },
        willDo: {
            body: Scale.bind(null, { value: form.willDo, onClick: updateForm.bind(null, 'willDo')}),
            description: 'sfsf',
            title: 'What will you do?',
        },
        whenChange: {
            body: Scale.bind(null, { value: form.whenChange, onClick: updateForm.bind(null, 'whenChange')}),
            description: 'sfsf',
            title: 'When will you change?',
        },
        
    };

    const toTypeChoice = () => {
        if (getCurrentStep() !== 'reason') {
            return null;
        }
        const disabled = !reason.trim().length;

        const onClick = () => {
            updateSteps('type');
        };

        return (                        
            <button
                disabled={disabled}
                type="button"
                className="disabled:bg-gray-200 inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                onClick={onClick}
            >
                Next
            </button>
        );
    };

    const previous = () => {        
        if (getCurrentStep() === 'reason') {
            return null;
        }

        const onClick = () => {
            steps.pop();
            setSteps([...steps]);
        };

        return (                        
            <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                onClick={onClick}
            >
                Previous
            </button>
        );
    };

    const current = stepTemplates[getCurrentStep()];

    const progress = () => {
        const currentStep = getCurrentStep();

        const mapping = {
            reason: '10%',
            type: '25%',
            noApology: '95%',
            generating: '100%',
        };

        if (Object.hasOwn(mapping, currentStep)) {
            return mapping[currentStep];
        }

        const currentOrderIndex = ordered.indexOf(currentStep);
        const percentageOfOrdered = (currentOrderIndex + 1)/ordered.length;
        console.log('percentageOfOrdered', percentageOfOrdered);
        const additional = (percentageOfOrdered * 0.74) * 100 + 25;
        return `${additional}%`;
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:max-w-3xl sm:p-6">                                                
                        <div>
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                                <img src={ Diagonal } className="h-12 w-12 text-green-600" aria-hidden="true" />
                            </div>
                        </div>

                        <div>
                            <Dialog.Title as="h3" className="mt-3 text-center text-base font-semibold leading-6 text-gray-900">
                                { current.title }
                            </Dialog.Title>
                            <Dialog.Description as="h2" className="mt-2 text-center text-sm text-gray-500">
                                { current.description }
                            </Dialog.Description>
                            <div className="mt-4">
                                { current.body() }
                            </div>
                        </div>

                        <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                         { toTypeChoice() }
                         { previous() }                    
                        </div>

                        <div className="mt-6" aria-hidden="true">
                            <div className="overflow-hidden rounded-full bg-gray-200">
                                <div className="h-2 rounded-full animate-blinking-bg" style={{ width: progress() }} />
                            </div>                            
                        </div>
                    </Dialog.Panel>
                    </Transition.Child>
                </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}