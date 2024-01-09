export default () => {
    return (
        <div className='px-8'>
            <div className='mb-8'>
                Thank you for your patience. Crafting a sincere and thoughtful apology takes time, as we want to ensure it reflects genuine remorse and a commitment to making amends. We appreciate your understanding, and we're working diligently to provide you with an apology that addresses the situation appropriately. Your patience is valued, and we aim to present to you a heartfelt message shortly.
            </div>
            <div className="">
                <div className='flex flex-col items-end'>
                    <span className='inline-block mb-2'>This may take up to a minute. </span>
                    <svg x="0px" y="0px"
                        viewBox="0 0 100 100" enableBackground="new 0 0 100 100" className='w-10 h-10'>
                        <circle fill="none" stroke="#000" strokeWidth="4" strokeMiterlimit="10" cx="50" cy="50" r="48"/>
                        <line fill="none" strokeLinecap="round" stroke="#000" strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
                        <animateTransform 
                            attributeName="transform" 
                            dur="2s"
                            type="rotate"
                            from="0 50 50"
                            to="360 50 50"
                            repeatCount="indefinite" />
                        </line>
                        <line fill="none" strokeLinecap="round" stroke="#000" strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
                        <animateTransform 
                            attributeName="transform" 
                            dur="15s"
                            type="rotate"
                            from="0 50 50"
                            to="360 50 50"
                            repeatCount="indefinite" />
                        </line>
                    </svg>
                </div>
            </div>
        </div>
    )
};