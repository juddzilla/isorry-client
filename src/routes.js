import { createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import Anatomy from './views/Anatomy.jsx';
import Attributions from './views/Attributions.jsx';
import BestPractices from './views/Best.jsx';
import Contact from './views/Contact.jsx';
import Detail from './views/Detail.jsx';
import Fauxpologies from './views/Faux.jsx';
import Home from './views/Home.jsx';
import How from './views/How.jsx';
import List from './views/List.jsx';
import Login from './views/Login.jsx';
import Privacy from './views/Privacy.jsx';
import Terms from './views/Terms.jsx';

const routes = {
  element: <App />,
  children: [
    Anatomy,
    Attributions,
    BestPractices,
    Contact,
    Detail,
    Fauxpologies,
    Home,
    How,
    List,
    Login,
    Privacy,
    Terms,
  ],
};

export default createBrowserRouter([routes]);