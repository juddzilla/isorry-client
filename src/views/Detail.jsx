import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Component = () => {
    const [apology, setApology] = useState(null);    
    let { uuid } = useParams();

    const API = document.querySelector("meta[name='api']").getAttribute("content");

    useEffect(() => {
        fetch(`${API}/apology/${uuid}`)
        .then(res => res.json())
        .then(res => {
            // console.log
            if (res.message) {                
                setApology(res.message);
            } else if (res.error) {
                console.log('RES ERR', res.error);
            }
        })
        .catch(err => {
            console.log('ERR', err);
        })
    }, [])

    
    return (
        <>
            <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-base font-semibold leading-7 text-indigo-600">AI Generated</p>
                    <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">iSorry.lol</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Engage with Genuine Amends: Tailored messages expressing regret and facilitating reconciliation on our unique apology platform.
                    </p>
                </div>
            </div>
            <div className='flex justify-center'>
                { apology && 
                <div className="mx-auto max-w-7xl px-6 lg:px-8 whitespace-pre-line">
                    <div className="mx-auto max-w-2xl lg:mx-0 pb-24">                    
                        <p className="mt-6 text-lg leading-8">
                            {apology}
                        </p>
                    </div>
                </div>
                }
            </div>
        </>
    )
}

const Route = {
    element: <Component />,
    path: "/apology/:uuid",
};
  
export default Route;