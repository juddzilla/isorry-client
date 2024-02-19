import { RadioGroup } from '@headlessui/react';

export const pill = 'border border-gray-300 hover:border-gray-400 drop-shadow-xl hover:shadow-md min-w-4 min-h-10 flex justify-center cursor-pointer text-md relative px-4 rounded-xl mb-4 items-center bg-white/90 hover:bg-white mr-4 last:mr-0';

const Options = ({ data, id, onClick }) => {   
    return (
        <RadioGroup className=''>
            <RadioGroup.Label className="sr-only">Choose a memory option</RadioGroup.Label>
            <div className="flex flex-wrap">
                { data.map(opt => {                        
                    return (
                        <RadioGroup.Option
                            key={`${id}-${opt}`}                            
                            onClick={ () => onClick(opt) }                                                                             
                            className={pill}
                        >                                
                            <RadioGroup.Label as="span" className='flex flex-col justify-center items-center'>                                
                                {opt}
                            </RadioGroup.Label>                                
                        </RadioGroup.Option>
                    )
                })}
            </div>
        </RadioGroup>        
    );
};

export default Options;