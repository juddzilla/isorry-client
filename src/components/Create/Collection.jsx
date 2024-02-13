import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react';
import { PencilIcon } from '@heroicons/react/24/outline';

import {
    empathyOptions,
    getOrder,
    getPrompts,
    remorseOptions,
    targetAudienceOptions,
} from './Collection/prompts';

import { AuthContext } from '../../App';

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
    const { auth } = useContext(AuthContext);
    const [isAuthed, setIsAuthed] = useState(auth);
    const order = getOrder(isAuthed);
    const prompts = getPrompts();
    const initialMessages = [];  
    const [messages, setMessages] = useState(initialMessages);
    const [prompting, setPrompting] = useState(order[0]);
    const [progress, setProgress]  = useState([1, order.length+1]);
    
    const navigate = useNavigate();
    
    const cancelButtonRef = useRef(null);
    const chatbox = useRef(null);

    function submit() {
        const initialValue = { reason: '', type: 'Full', parameters: {}};

        if (!isAuthed) {
            initialValue.type = 'Full';
        }
        const data = messages.reduce((acc, cur) => {
            if (cur.type === 'user') {
                if (Object.hasOwn(acc, cur.property)) {
                    acc[cur.property] = cur.message;
                } else {
                    acc.parameters[cur.property] = cur.message;
                }
            }
            return acc;
        }, initialValue);

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
        setIsAuthed(auth);
      }, [auth]);

    useEffect(() => {
        if (!open) {
            setMessages(initialMessages);        
            setPrompting(order[0]);
            setProgress([1, order.length+1]);
        } else {
            addSystemMessage(order[0]);
        }
    }, [open]);

    useEffect(() => {
        if (prompting !== null) {            
            if (prompting === 'noApology') {
                const totalLength = order.indexOf('type');
                setProgress([totalLength+2,totalLength+2]);
            } else if (prompting === 'generating') {
                setProgress(null);
            } else {
                const currentIndex = order.indexOf(prompting);            
                setProgress([currentIndex+1,order.length+1]);
            }
        }
    }, [prompting]);

    useEffect(() => {                
        if (chatbox.current && messages.length) {              
            const generateAfter = ['noApology', order[order.length - 1]];
            const latest = messages[messages.length -1];
            
            if (latest.type === 'user') {
               let property = null;
                
                if (generateAfter.includes(latest.property)) {
                    property = 'generating';
                    submit();                    
                } else if (latest.property === 'type' && latest.message === 'Fauxpology') {                    
                    property = 'noApology';                    
                } else {
                    const currentIndex = order.indexOf(latest.property);
                    property = order[currentIndex + 1];
                }         
                addSystemMessage(property);
            } 
            
            setTimeout(() => {
                if (chatbox.current) {
                    chatbox.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                }    
            }, 100);
        }
    }, [messages])

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
        const containerClassList = ['flex', 'relative', 'text-sm' , 'last:text-base', 'drop-shadow-sm', 'last:drop-shadow-xl', 'mb-4'];
        const messageClassList = ['rounded-lg', 'bg-white', 'inline-block', 'py-2'];
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
                            { hasEmoji.includes(msg.property) ? (
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

    const initialPrompts = [
        {classList: 'mt-auto', type: 'system', message: "Let's get started with the iSorry.lol AI apology generator."},
    ];
    
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
                                <div className='z-10 w-full p-2 shadow-md bg-gray-100 px-16 flex items-center justify-between'>  
                                    <div>
                                        <div className='text-xs text-gray-500'>Crafting an apology with</div>
                                        <strong className='inline-block'>iSorry.lol</strong>
                                    </div>
                                    <div className='text-xs text-gray-400'>
                                        { progress && 
                                            <>
                                                {progress[0]} / {progress[1]}
                                            </>
                                        }
                                    </div>
                                
                                </div>
                                <div className='overflow-scroll h-full flex flex-col bg-gray-50'>
                                    <div className='px-4 pt-4 flex-1 flex flex-col justify-end'>
                                        <>
                                            { initialPrompts.map(Message) }
                                            { messages.map(Message) }
                                        </>
                                    </div>
                                    
                                    { prompting === null && 
                                        <div className='px-4'>
                                            <Loading />
                                        </div>
                                    }
                                                            
                                    <div className="bg-gray-100 p-4 pb-2">
                                        { template && template() }
                                    </div>
                                    <div className=''  ref={chatbox}/>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default Collection;