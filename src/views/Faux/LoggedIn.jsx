import { useContext, useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../App';

export default function LoggedIn() {
    const { auth } = useContext(AuthContext);
    const [isAuthed, setIsAuthed] = useState(auth);

    useEffect(() => {
        setIsAuthed(auth);
      }, [auth]);

    if (isAuthed) {
        return null;
    }
    
    return (
        <div className="bg-primary mb-4">
            <div className="mx-auto max-w-3xl text-base leading-7 py-4  text-center text-white">
                Only <Link to='/login' className='underline'>registered</Link> user can utilize iSorry.lol to help you compose a Fauxpology. <Link to='/login' className='underline'>Login</Link> here and unlock all features.
            </div>
        </div>
    )
}