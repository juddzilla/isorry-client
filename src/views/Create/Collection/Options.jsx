import { RadioGroup } from '@headlessui/react';

export const pill = 'drop-shadow-xl hover:shadow-md min-w-16 min-h-10 flex justify-center cursor-pointer relative px-4 hover:font-bold rounded-full mb-4 items-center bg-white/60 hover:bg-white mr-4';

const Options = ({ data, onClick }) => {   
    return (
        <RadioGroup>
            <RadioGroup.Label className="sr-only">Choose a memory option</RadioGroup.Label>
            <div className="flex justify-center flex-wrap ">
                { data.map(opt => {                        
                    return (
                        <RadioGroup.Option
                            key={opt}
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