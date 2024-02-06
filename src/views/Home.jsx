import CTA from './Home/CTA';
import FAQ from './Home/FAQ';
import Features from './Home/Features';
import Hero from './Home/Hero';

const Component = () => {
    return (
        <div>
            <Hero />
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