import CTA from './Home/CTA';
import FAQ from './Home/FAQ';
import Features from './Home/Features';
import Hero from './Home/Hero';
import LoggedIn from './Faux/LoggedIn';

const Component = () => {
    return (
        <div>
            <Hero />
            <LoggedIn />
            <Features />
            <CTA />
            <FAQ />
        </div>
    )
}

const Route = {
    element: <Component />,
    path: "/",
};
  
export default Route;