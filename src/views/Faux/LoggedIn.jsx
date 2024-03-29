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
                <Link to='/login' className='underline'>Login</Link> and utilize iSorry.lol to help you compose a <Link to='/fauxpology'  className='underline'>Fauxpology</Link>, and other features.
            </div>
        </div>
    )
}