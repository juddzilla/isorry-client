import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/20/solid';
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
    const [messages, setMessages] = useState([]);
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
            setMessages([]);
        } else {
            const initialMessages = [
                {type: 'system', messages: `Welcome`, property: null},                
            ];  

            if (!isAuthed) {
                initialMessages.push({type: 'system', messages: "Log in now to ensure you can retrieve all your apologies at any time, as well as other features. If you choose not to log in, you'll only get a one-time access to the apology after finishing.", property: null})
            }

            initialMessages.push(
                prompts[order[0]],
                {type: 'system', messages: "After this step, expect to respond to a selection of multiple-choice questions, enabling us to construct your apology.", property: null},               
            );
            setPrompting(order[0]);
            setProgress([1, order.length+1]);            

            const newMessages = [];
            initialMessages.forEach((m,i) => {
                const delay = 1500;
                setTimeout(() => {                    
                    newMessages.push(m);
                    setMessages([...newMessages]);
                }, delay*i);
            })
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
                    property = isAuthed ? 'generating' : 'postGeneratingNotAuthed';                    
                    submit();
                } else if (latest.property === 'type' && latest.messages[0] === 'Fauxpology') {                    
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
        setMessages([...messages, {type: 'user', property, messages: [message]}]);       
    };
    
    function addSystemMessage(property) {
        let prompt = prompts[property];

        setMessages([...messages, prompt]);
        setPrompting(prompt.property);
    }

    function goToMessage(index) {
        if (prompting === 'generating') {
            return;
        }
        const newMessages = messages.slice(0, index);      
        setMessages(newMessages);
        setPrompting(newMessages[newMessages.length -1].property);
    }

    const MessageBlock = (message, i) => {        
        let display = message.messages;
        let containerClassList = 'flex relative mb-4';
        let iconClassList = 'h-6 w-6';
        let messagesClassList = 'flex-1 pl-1.5';
        let messageClassList = 'b-2 px-0.5 whitespace-pre-line';

        const style = {};

        const hasEmoji = ['yourFeeling', 'theirFeelings'];
        const hasBool = ['wantToChange', 'willingToChange'];

        const target = message.type === 'system' ? 'Apology Assistant' : 'You';

        
        const icon = () => {
            if (message.type === 'system') {
                return (<img
                    className={`${iconClassList} w-auto mr-2`}
                    src={Logo}
                    alt="iSorry.lol"                                        
                />);
            }
            return (<UserCircleIcon className={iconClassList} />)
        }

        if (message.type === 'user') {
            containerClassList += ' flex-row-reverse';
            messageClassList += ' flex justify-end text-right';
            messagesClassList += ' flex flex-col items-end pr-2 pl-10';

            if (hasBool.includes(message.property)) {
                display = display === true ? 'Yes' : 'No';                                    
            }
        } else {
            messagesClassList += ' pr-10';
            messageClassList += ' reveal';
            const initialDelay = '100ms';
            const max = 600;
            const count = display.length;
            
            const vailTime = Math.min(count * 10, max);
            const unvailDelay = Math.min(count*10+100, max+100);

            style.animation =  `vail ${vailTime}ms ${initialDelay} both, unvailed ${vailTime}ms ${unvailDelay}ms both`;
        }
        return (
            <div className={containerClassList} key={`${message.type}-${i}`}>
                <div className='w-8'>
                    {icon()}
                    { (message.type === 'user' && prompting !== 'generating') &&
                        <div className='flex items-center h-6 mt-0.5 justify-center w-6 cursor-pointer' onClick={goToMessage.bind(null, i)}>
                            <PencilIcon className='h-4 w-auto text-gray-300 hover:text-gray-500' />
                        </div>
                    }
                </div>
                <div className={messagesClassList}>
                    <h3 className='font-bold mb-1'>{target}</h3>
                    { (message.type === 'user' && hasEmoji.includes(message.property)) ? (
                        <span>
                            { Emoji(display) }
                        </span>
                    ) : (
                        <span
                            className={`${messageClassList}`}                            
                            dangerouslySetInnerHTML={{ __html: display }}
                            style={style}
                        />                
                    )}                  
                </div>
            </div>
        )
    };

    const Loading = () => MessageBlock({type: 'system', messages: ['...']}, 0, []);

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
                            <Dialog.Panel className="flex flex-col justify-end bg-gray-100 h-3/5 relative transform overflow-hidden rounded-sm bg-white text-left drop-shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:max-w-prose shadow-3xl">                                                
                                <div className='z-10 w-full p-2 border-b-1 border-x-0 border-t-0 border-gray-200  shadow-sm border flex items-center justify-center relative'>  
                                    <strong className='inline-block mr-4'>iSorry.lol</strong>
                                    <div className='text-xs text-gray-400 absolute right-0 pr-6'>
                                        { progress && 
                                            <>
                                                {progress[0]} / {progress[1]}
                                            </>
                                        }
                                    </div>
                                
                                </div>
                                <div className='overflow-scroll h-full flex flex-col'>
                                    <div className='px-4 pt-4 flex-1 flex flex-col justify-end'>
                                        { messages.map(MessageBlock) }
                                    </div>
                                    
                                    { prompting === null && 
                                        <div className='px-4'>
                                            <Loading />
                                        </div>
                                    }
                                                            
                                    <div className="px-14 pt-4 pb-4">
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