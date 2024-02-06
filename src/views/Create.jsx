
import { useState } from 'react';
import Heading from './Create/Heading';
import Empty from './Create/Empty';

const Component = () => {
    const [open, setOpen] = useState(false);

    return (
        <>        
            {/* <Collection open={open} setOpen={setOpen} /> */}
            <Heading open={open} setOpen={setOpen}/>
            <Empty />
        </>
    )
}

const Route = {
    element: <Component />,
    path: "/apologize",
};

export default Route;