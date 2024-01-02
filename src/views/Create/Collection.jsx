
import { Fragment, useEffect, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import Angel from '../../images/emoji/smiling-face-with-halo_1f607.png';
import Devil from '../../images/emoji/smiling-face-with-horns_1f608.png';
import Diagonal from '../../images/emoji/face-with-diagonal-mouth_1fae4.png';
import Pleading from '../../images/emoji/pleading-face_1f97a.png';

import Bool from './Collection/Bool';
import Feelings from './Collection/Feelings';
import Generating from './Collection/Generating';
import NoApology from './Collection/NoApology';
import Reason from './Collection/Reason';
import Scale from './Collection/Scale';
import Type from './Collection/Type';
import WillDo from './Collection/WillDo';
import WhenChange from './Collection/WhenChange';

export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
};

export default ({open, setApology, setOpen}) => {
    const initialStage = 'reason';
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
        if (nextStep === 'generating') {
            console.log('g form', form, reason, type, );
        }
    }

    function updateType() {
        if (type === 'None') {
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
        const newForm = {...form, [key]: newValue};
        console.log('newForm', newForm);
        setForm(newForm);

        const currentStep = getCurrentStep();
        let nextStep = '';
        if (['noApology', ordered[ordered.length - 1]].includes(currentStep)) {
            nextStep = 'generating';
        } else {
            const currentIndex = ordered.indexOf(currentStep);
            nextStep = ordered[currentIndex + 1];
        }
        updateSteps(nextStep);
    };

    const remorseOptions = [
        'Negligible',
        'Limited',
        'Partial',
        'Genuine',
        'Sincere',
        'Profound',
        'Overwhelming',
    ];

    const empathyOptions = [
        'Limited',
        'Partial',
        'Basic',
        'Moderate',
        'High',
        'Deep',
        'Exceptional'
    ];

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
            title: 'How would you like to frame your apology?',
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
        yourRemorse: {
            body: Scale.bind(null, { options: remorseOptions, value: form.yourRemorse, onClick: updateForm.bind(null, 'yourRemorse')}),
            description: '',
            title: 'Estimate your level of REMORSE',
        },
        yourEmpthay: {
            body: Scale.bind(null, { options: empathyOptions, value: form.yourEmpthay, onClick: updateForm.bind(null, 'yourEmpthay')}),
            description: '',
            title: 'Estimate your level of EMPATHY',
        },
        theirFeelings: {
            body: Feelings.bind(null, { value: form.theirFeelings, onClick: updateForm.bind(null, 'theirFeelings')}),
            description: 'The outside is a reflection of the inside',
            title: 'How Do You Think They Felt?',
        },
        theirRightFeel: {
            body: Bool.bind(null, { value: form.theirRightFeel, onClick: updateForm.bind(null, 'theirRightFeel')}),
            description: 'Did they properly navigate the seas of emtion?',
            title: 'Was their response proportionate to the event?',
        },
        willingToChange: {
            body: Bool.bind(null, { value: form.willingToChange, onClick: updateForm.bind(null, 'willingToChange')}),
            description: 'Facilitation of growth',
            title: 'Do You Want To Change?',
        },
        willChange: {
            body: Bool.bind(null, { value: form.willChange, onClick: updateForm.bind(null, 'willChange')}),
            description: 'Facilitation of reconciliation',
            title: 'Are You Willing To Change?',
        },
        willDo: {
            body: WillDo.bind(null, { value: form.willDo, onChange: updateForm.bind(null, 'willDo')}),
            description: 'To ensure this does not happen ever again',
            title: 'What Changes Will You Implement?',
        },
        whenChange: {
            body: WhenChange.bind(null, { value: form.whenChange, onChange: updateForm.bind(null, 'whenChange')}),
            description: 'Let them know a rough timeline on when they can expect a new and improved you',
            title: 'When Can They Expect To See Results?',
        },
        
    };

    const icon = () => {
        const mapping = {
            'None': Devil,
            'Half': Pleading,
            'Full': Angel,
        };

        const src = mapping[type] || Diagonal;
        return (
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                <img src={src} className="h-12 w-12 text-green-600" aria-hidden="true" />
            </div>
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
                className="w-full sm:w-fit mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 border border-primary/90 hover:border-primary text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:col-start-1 sm:mt-0"
                onClick={onClick}
            >
                Previous
            </button>
        );
    };

    
    const progress = () => {
        const currentStep = getCurrentStep();

        const mapping = {
            reason: '10%',
            type: '25%',
            noApology: '95%',
            generating: '100%',
        };

        let percentage = mapping[currentStep];

        if (!percentage) {
            const currentOrderIndex = ordered.indexOf(currentStep);
            const percentageOfOrdered = (currentOrderIndex + 1)/ordered.length;
            const additional = (percentageOfOrdered * 0.74) * 100 + 25;
            percentage = `${additional}%`;
        }

        return (
            <div className="overflow-hidden rounded-full bg-gray-200">
                <div className="h-2 rounded-full animate-blinking-bg" style={{ maxWidth: percentage }} />
            </div>   
        );        
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
                className="w-full sm:w-3/12 sm:absolute sm:right-0 disabled:bg-gray-200 inline-flex w-full justify-center rounded-md bg-primary/90 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:col-start-2"
                onClick={onClick}
            >
                Next
            </button>
        );
    };

    const current = stepTemplates[getCurrentStep()];

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
                            { icon() }
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

                        <div className="mt-5 sm:flex relative h-8">
                         { toTypeChoice() }
                         { previous() }                    
                        </div>

                        <div className="mt-6" aria-hidden="true">
                            { progress() }                         
                        </div>
                    </Dialog.Panel>
                    </Transition.Child>
                </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}