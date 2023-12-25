import { createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import Anatomy from './views/Anatomy.jsx';
import Contact from './views/Contact.jsx';
import Create from './views/Create.jsx';
import Detail from './views/Detail.jsx';
import Home from './views/Home.jsx';
import List from './views/List.jsx';
import Login from './views/Login.jsx';
import Privacy from './views/Privacy.jsx';
import Terms from './views/Terms.jsx';

const routes = {
  element: <App />,
  children: [
    Anatomy,
    Contact,
    Create,
    Detail,
    Home,
    List,
    Login,
    Privacy,
    Terms,
  ],
};

export default createBrowserRouter([routes]);