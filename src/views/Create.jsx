
import { Fragment, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from './Create/Heading';
import Collection, { classNames } from './Create/Collection';
import Empty from './Create/Empty';
import Result from './Create/Result';

const Component = () => {
    const [open, setOpen] = useState(true);
    const [apology, setApology] = useState(null);

    return (
        <>        
            <Collection open={open} setOpen={setOpen} setApology={setApology} />
            <Heading />
            { !open && 
                apology ? (
                    <Result apology={apology} />
                ) : (
                    <Empty setOpen={setOpen} />
                )
            }
        </>

    )
}

const Route = {
    element: <Component />,
    path: "/apologize",
};

export default Route;