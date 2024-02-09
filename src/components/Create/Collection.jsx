
import { Fragment, useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react';
import { PencilIcon } from '@heroicons/react/24/outline';

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

const Collection = ({open, setOpen}) => {  
    const initialMessages = [];  
    const [messages, setMessages] = useState(initialMessages);
    const [prompting, setPrompting] = useState('reason');
    
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

    const [progress, setProgress]  = useState([1, ordered.length+1]);

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

        async function getApology() {            
            const res = await Fetch.post('apologize/', data);            
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
                setOpen(false);
                navigate(`/apology/${res.uuid}`);
            }

            if (err) {
                console.warn(err);
            }
        })
        .catch(err => {
            console.log('POST CATCH', err);
        });
    }

    useEffect(() => {
        if (!open) {
            setMessages(initialMessages);
        } else {
            addSystemMessage('reason');
            setPrompting('reason');
        }
    }, [open]);

    useEffect(() => {
        if (prompting !== null) {            
            if (prompting === 'noApology') {
                const totalLength = ordered.indexOf('type');
                setProgress([totalLength+2,totalLength+2]);
            } else if (prompting === 'generating') {
                setProgress(null);
            } else {
                const currentIndex = ordered.indexOf(prompting);            
                setProgress([currentIndex+1,ordered.length+1]);
            }
        }
    }, [prompting]);

    useEffect(() => {        
        if (chatbox.current && messages.length) {              
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
        noApology: {type: 'system', message: 'Select the type you want us to generate'},
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

    const promptTemplates = {
        null: () => null,
        reason: () => (<Reason onChange={(value) => addUserMessage('reason', value)} />),
        type: () => (<Type onChange={addUserMessage.bind(null, 'type')} />),            
        targetAudience: () => (<Options data={targetAudienceOptions} id={'target'} onClick={addUserMessage.bind(null, 'targetAudience')} />),
        noApology: () => (<NoApology onChange={addUserMessage.bind(null, 'noApology')} />),        
        generating:  () => null,        
        yourFeeling: () => (<Feelings id={'user-feeling'} onClick={addUserMessage.bind(null, 'yourFeeling')} />),                    
        yourRemorse: () => (<Options data={remorseOptions} id={'remorse'} onClick={addUserMessage.bind(null, 'yourRemorse')} />),                    
        yourEmpathy: () => (<Options data={empathyOptions}  id={'empathy'} onClick={addUserMessage.bind(null, 'yourEmpathy')} />),                                
        theirFeelings: () => (<Feelings id={'target-feeling'} onClick={addUserMessage.bind(null, 'theirFeelings')} />),        
        wantToChange: () => (<Bool id={'want'} onClick={addUserMessage.bind(null, 'wantToChange')} />),        
        willingToChange: () => (<Bool id={'willing'} onClick={addUserMessage.bind(null, 'willingToChange')} />),        
        willDo:  () => (<WillDo onChange={addUserMessage.bind(null, 'willDo')} />),        
        whenChange:  () => (<WhenChange onChange={addUserMessage.bind(null, 'whenChange')} />),                
    };

    const addUserMessage = (property, message) => {       
        setPrompting(null);   
        setMessages([...messages, {type: 'user', property, message}]);       
    };
    
    function addSystemMessage(property) {
        const delay = 800;
        const delayedMessages = [...messages];
        let msgs = prompts[property];        

        if (!Array.isArray(msgs)) {
            msgs = [msgs];
        }
        
        msgs.forEach((m, index) => {
            const msg = {...m, property};
            setTimeout(() => {
                setMessages([...delayedMessages, msg]);
                delayedMessages.push(msg);                
                if (index === 0) {
                    setPrompting(msg.property);
                }
            }, (index + 1) * delay);
        });
    }

    function goToMessage(index) {
        if (prompting === 'generating') {
            return;
        }
        const newMessages = messages.slice(0, index);        
        setMessages(newMessages);
        setPrompting(newMessages[newMessages.length -1].property);
    }

    const Message = (msg, i, arr) => {
        if (msg.message === null) {
            return null;
        }
        const containerClassList = ['flex', 'relative'];
        const messageClassList = ['rounded-lg', 'bg-white', 'inline-block'];
        const hasEmoji = ['yourFeeling', 'theirFeelings'];
        const hasBool = ['wantToChange', 'willingToChange'];

        let display = msg.message;

        if (msg.type === 'user') {            
            if (hasBool.includes(msg.property)) {                
                display = msg.message === true ? 'Yes' : 'No';
            }
            if (!hasEmoji.includes(msg.property)) {
                messageClassList.push('py-2', 'px-6')
            }
            containerClassList.push('justify-end', 'items-center');
            messageClassList.push('ml-2', 'rounded-br-none', 'max-w-lg');
        }

        if (msg.type === 'system') {
            containerClassList.push('mr-6', 'items-end');
            messageClassList.push('mr-12', 'px-3', 'rounded-bl-none',);

            if (display === '...') {
                messageClassList.push('loading', 'min-w-7');
                display = '';
            }
        }

        if (i === 0 && display !== '') {
            containerClassList.push('mt-auto');
        }
        
        if (i < arr.length - 1) {            
            if (i === arr.length - 2) {                
                containerClassList.push('mb-8');
            } else {                
                containerClassList.push('mb-6');
            }
            messageClassList.push('shadow-sm', 'py-2', 'text-sm');
        } else {
            messageClassList.push('shadow-lg', 'py-3');
        }
        return (
            <div                
                className={containerClassList.join(' ')}
                key={`${msg.type}-${msg.property}-${i}`}
                >
                    { msg.type === 'system' &&
                        <>
                            <img
                                className="h-8 w-auto mr-2 mb-0.5"
                                src={Logo}
                                alt="iSorry.lol"                                        
                            />
                            <span className={messageClassList.join(' ')}>{display}</span>                                                        
                        </>
                    }
                    { msg.type === 'user' &&
                        <>
                            { prompting !== 'generating' &&
                                <div className='flex items-center ml-2 cursor-pointer' onClick={goToMessage.bind(null, i)}>
                                    <PencilIcon className='h-4 w-auto text-gray-300 hover:text-gray-500' />
                                </div>
                            }
                            {hasEmoji.includes(msg.property) ? (
                                <div className='mx-4'>{ Emoji(msg.message) }</div>
                            ) : (
                                <span className={messageClassList.join(' ')}>
                                    {display}               
                                </span>
                            )                            
                            }                            
                        </>
                    }
            </div>
        )
    };

    const Loading = () => Message({type: 'system', message: '...'}, 0, []);

    const template = promptTemplates[prompting];
    
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
                    <div className="fixed inset-0 bg-neutral-100 bg-opacity-75 transition-opacity" />
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
                            <Dialog.Panel className="flex flex-col justify-end bg-gray-100 h-3/5 relative transform overflow-hidden rounded-xl bg-white text-left drop-shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:max-w-prose shadow-3xl">                                                
                                <div className='z-10 w-full p-2 shadow-md bg-gray-100 px-16'>  
                                    <div className='text-sm text-gray-500'>Crafting an apology with</div>
                                    <strong className='inline-block ml-1'>iSorry.lol</strong>
                                </div>
                                <div className='overflow-scroll h-full flex flex-col bg-gray-50'>
                                    <div className='px-4 py-4 flex-1 flex flex-col justify-end'>
                                        <>
                                            { messages.map(Message) }
                                            { prompting === null && <Loading />}
                                        </>
                                    </div>
                        
                                    <div className="bg-gray-100 p-4 pb-2">
                                        { template && template() }
                                    </div>
                                    <div className=''  ref={chatbox}/>
                                </div>

                                {/* <div >
                                    { progress && 
                                        // `${progress[0]}/${progress[1]}` 
                                        PromptProgress()
                                    }
                                </div>                                                         */}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default Collection;