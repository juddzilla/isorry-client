
import { Fragment, useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

import Bool from './Collection/Bool';
import Feelings from './Collection/Feelings';
import NoApology from './Collection/NoApology';
import Reason from './Collection/Reason';
import Type from './Collection/Type';
import WillDo from './Collection/WillDo';
import WhenChange from './Collection/WhenChange';
import Emoji from './Collection/Emoji';
import Options from './Collection/Options';

import Logo from '../../images/noun-tilde-1125364.svg';

import Store from '../../store';
import Fetch from '../../fetch';

export default ({open, setOpen}) => {  
    const initialMessages = [];  
    const [messages, setMessages] = useState(initialMessages);
    const [prompting, setPrompting] = useState('reason')

    const navigate = useNavigate();
    
    const cancelButtonRef = useRef(null);
    const chatbox = useRef(null);

    const ordered = [
        'reason',
        'yourFeeling',
        'theirFeelings',
        'targetAudience',
        'type',
        'yourRemorse',
        'yourEmpathy',
        'wantToChange',
        'willingToChange',
        'willDo',
        'whenChange',
    ];

    function submit() {
        const data = messages.reduce((acc, cur) => {
            if (cur.type === 'user') {
                if (Object.hasOwn(acc, cur.property)) {
                    acc[cur.property] = cur.message;
                } else {
                    acc.parameters[cur.property] = cur.message;
                }
            }
            return acc;
        }, { reason: '', type: '', parameters: {}});

        console.log('DATA', data);
        return;

        async function getApology() {            
            const res = await Fetch.post('apologize/', data);
            console.log('res', res);
            return res;
        }

        getApology().then(response => {
            const [err, res] = response;            
            if (res.uuid) {
                Store.set({
                    createdAt: res.created_at,
                    message: res.message, 
                    model: res.model,
                    reason: res.reason, 
                    uuid: res.uuid
                });
                navigate(`/apology/${res.uuid}`);
            }
        })
        .catch(err => {
            console.log('POST CATCH', err);
        });
    }

    useEffect(() => {
        addSystemMessage('reason');
    }, []);

    useEffect(() => {        
        if (chatbox.current && messages) {                                
            const generateAfter = ['noApology', ordered[ordered.length - 1]];
            const latest = messages[messages.length -1];

           if (latest.type === 'user') {
                let property = null;
                
                if (generateAfter.includes(latest.property)) {
                    property = 'generating';
                    submit();
                } else if (latest.property === 'type' && latest.message === 'None') {                    
                    property = 'noApology';
                } else {
                    const currentIndex = ordered.indexOf(latest.property);
                    property = ordered[currentIndex + 1];
                }         
                addSystemMessage(property);
            }
            setTimeout(() => {
                chatbox.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            }, 100);
        }
    }, [messages])

    const prompts = {
        generating: [            
            { type: 'system', message: 'You will be directed to the apology when it has been generated.'},            
            { type: 'system', message: 'Crafting a sincere and thoughtful apology takes time, as we want to ensure it reflects genuine remorse and a commitment to making amends.'},
            { type: 'system', message: "We appreciate your understanding, and we're working diligently to provide you with an apology that addresses the situation appropriately."},
            { type: 'system', message: 'Your patience is valued, and we aim to present to you a heartfelt message shortly.'},           
            { type: 'system', message: '...'},
        ],
        reason: [
            {type: 'system', message: "Let's get started with iSorry.lol"},
            {type: 'system', message: 'Tell us what happened'},
            {type: 'system', message: 'The more context provided, the better apology we can write for you. Let it all go. Hold nothing back (1000 character limit).'},
        ],
        yourFeeling: {type: 'system', message: 'How does this make you feel?'},
        noApoloy: {type: 'system', message: 'noap'},
        theirFeelings: {type: 'system', message: 'How do you think they felt?'},
        targetAudience: {type: 'system', message: 'Who is this apology for?'},
        type: {type: 'system', message: 'What percentage of this is your fault?'},
        yourRemorse: {type: 'system', message: 'Estimate your level of REMORSE'},
        yourEmpathy: {type: 'system', message: 'Estimate your level of EMPATHY'},
        wantToChange: {type: 'system', message: 'Do You Want To Change?'},
        willingToChange: {type: 'system', message: 'Are You Willing To Change?'},
        willDo: {type: 'system', message: 'What Changes Will You Implement?'},
        whenChange: {type: 'system', message: 'When Can They Expect To See Results?'}
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

    const targetAudienceOptions = [
        'Family',
        'Friend',
        'Coworker',
        'Neighbor',
        'Child',
        'Pet',
        'Acquaintance',
        'Other',
    ];

    const stepTemplates = {
        null: () => null,
        reason: () => (<Reason onChange={(value) => updateForm('reason', value)} />),
        type: () => (<Type onChange={updateForm.bind(null, 'type')} />),            
        targetAudience: () => (<Options data={targetAudienceOptions} onClick={updateForm.bind(null, 'targetAudience')} />),
        noApology: () => (<NoApology onChange={updateForm.bind(null, 'noApology')} />),        
        generating:  () => null,        
        yourFeeling: () => (<Feelings onClick={updateForm.bind(null, 'yourFeeling')} />),                    
        yourRemorse: () => (<Options data={remorseOptions}  onClick={updateForm.bind(null, 'yourRemorse')} />),                    
        yourEmpathy: () => (<Options data={empathyOptions}  onClick={updateForm.bind(null, 'yourEmpathy')} />),                                
        theirFeelings: () => (<Feelings onClick={updateForm.bind(null, 'theirFeelings')} />),        
        wantToChange: () => (<Bool onClick={updateForm.bind(null, 'wantToChange')} />),        
        willingToChange: () => (<Bool onClick={updateForm.bind(null, 'willingToChange')} />),        
        willDo:  () => (<WillDo onChange={updateForm.bind(null, 'willDo')} />),        
        whenChange:  () => (<WhenChange onChange={updateForm.bind(null, 'whenChange')} />),                
    };

    const updateForm = (key, newValue) => {       
        setPrompting(null);   
        setMessages([...messages, {type: 'user', property: key, message: newValue}]);       
    };
    
    const progress = () => {
        const mapping = {
            reason: '10%',
            type: '25%',
            noApology: '95%',
            generating: '100%',
        };

        let percentage = mapping[prompting];

        if (!percentage) {
            const currentOrderIndex = ordered.indexOf(prompting);
            const percentageOfOrdered = (currentOrderIndex + 1)/ordered.length;
            const additional = (percentageOfOrdered * 0.74) * 100 + 25;
            percentage = `${additional}%`;
        }

        return (
            <div className="overflow-hidden bg-gray-200">
                <div className="h-2 bg-brand" style={{ maxWidth: percentage }} />
            </div>   
        );        
    };

    function addSystemMessage(property) {
        let msgs = prompts[property];

        if (!Array.isArray(msgs)) {
            msgs = [msgs];
        }
        insertSystemMessage(msgs.map(m => ({ ...m, property})));
    }

    function insertSystemMessage(msgs) {             
        const delay = 800;
        let newMessages = msgs;
        if (!Array.isArray(msgs)) {
            newMessages = [msgs];
        }

        const m = [...messages];
        newMessages.forEach((msg, index) => {
            setTimeout(() => {
                setMessages([...m, msg]);
                m.push(msg);
                if (index === 0) {
                    setPrompting(msg.property);
                }
            }, (index + 1) * delay);
        });
    }

    function goToMessage(index) {        
        const newMessages = messages.slice(0, index);        
        setMessages(newMessages);
        setPrompting(newMessages[newMessages.length -1].property);
    }

    const Message = (msg, i, arr) => {
        const containerClassList = ['flex', 'relative', 'items-center'];
        const messageClassList = ['rounded-full', 'inline-block', 'shadow-lg'];
        const hasEmoji = ['yourFeeling', 'theirFeelings'];
        const hasBool = ['wantToChange', 'willingToChange'];
        
        let display = msg.message;

        if (msg.type === 'user') {
            if (hasBool.includes(msg.property)) {
                display = msg.message === true ? 'Yes' : 'No';
            }
            if (!hasEmoji.includes(msg.property)) {
                messageClassList.push('bg-secondary', 'py-2', 'px-6')
            }
            containerClassList.push('justify-end');
            messageClassList.push('ml-12');
        }

        if (msg.type === 'system') {
            containerClassList.push('mr-6');
            messageClassList.push('bg-white', 'mr-12', 'py-2', 'px-6');

            if (display === '...') {
                messageClassList.push('loading', 'min-w-16');
                display = '';
            }
        }

        if (i === 0 && display !== '') {
            containerClassList.push('mt-auto');
        }
        if (i < arr.length - 1) {
            containerClassList.push('mb-4');
        }
        return (
            <div                
                className={containerClassList.join(' ')}
                key={msg.message}
                >
                    { msg.type === 'system' &&
                        <>
                            <img
                                className="h-8 w-auto mr-2"
                                src={Logo}
                                alt="iSorry.lol"                                        
                            />
                            <span className={messageClassList.join(' ')}>{display}</span>                                                        
                        </>
                    }
                    { msg.type === 'user' &&
                        <>
                            {hasEmoji.includes(msg.property) ? (
                                Emoji(msg.message)
                            ) : (
                                <span className={messageClassList.join(' ')}>
                                         {display}               
                                </span>
                            )                            
                            }
                            <div className='flex items-center ml-2 cursor-pointer' onClick={goToMessage.bind(null, i)}>
                                <PencilSquareIcon className='h-4 w-4 text-gray-400 hover:text-gray-900' />
                            </div>
                        </>
                    }
                    { msg.type === 'choice' &&
                        <div className='pt-2'>
                            { msg.component() }
                        </div>
                    }
            </div>
        )
    };

    const Loading = () => Message({type: 'system', message: '...'}, 0, []);

    const current = stepTemplates[prompting];
    console.log('curr', current);
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
                    <div className="flex h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">                     
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="flex flex-col justify-end border bg-gray-100 border-gray-400 h-3/5 relative transform overflow-hidden rounded-lg bg-white text-left drop-shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:max-w-prose shadow-3xl">                                                
                                <div className='z-10 w-full p-2 shadow-md flex justify-center'>  
                                    Crafting an apology with
                                    <strong className='inline-block ml-1'>iSorry.lol</strong>
                                </div>
                                <div className='overflow-scroll h-full flex flex-col bg-gray-100'>
                                    <div className='px-4 py-4 flex-1 flex flex-col justify-end'>
                                        <>
                                            { messages.map(Message) }
                                            { prompting === null && <Loading />}
                                        </>
                                    </div>

                                    

                                    <div className="bg-gray-100 pr-12 pl-14 p-4 pb-6">
                                        { current && current() }
                                    </div>
                                    <div className='h-1'  ref={chatbox}/>
                                </div>
                            
                                <div aria-hidden="true">
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