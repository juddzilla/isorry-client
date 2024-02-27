import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import Trigger from '../components/Create/Trigger';
import Smirk from '../images/emoji/smirking-face_1f60f.png';
import LoggedIn from './Faux/LoggedIn';

const Component = () => {
    const toSpaceCase = (str) => {
        return str
          .replace(/[-_]/g, ' ')
          // insert a space between lower & upper: HttpRequest => Http Request
          .replace(/([a-z])([A-Z])/g, '$1 $2')
          // space before last upper in a sequence followed by lower: XMLHttp => XML Http
          .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
          // add space between numbers and letters: Col1 => Col 1
          .replace(/([a-zA-Z])([0-9])/g, '$1 $2').replace(/([0-9])([a-zA-Z])/g, '$1 $2')
          // uppercase the first character
          .replace(/^./, firstChar => firstChar.toUpperCase())
          // replace multiple whitespaces with one
          .replace(/\s+/g, ' ')
          .trim();
    };

    const content = {
        header: {
          title: "Light Touch, Heavy Hitters: The Efficiency Formula",
          shortDescription: "Discover the efficiency formula where a light touch on the right levers can produce heavy-hitting results"
        },
        userInput: {
          apologyContext: "Kick things off by spilling the beans on why you're in the apology zone. Whether it’s a slip, trip, or a full-on tumble in your interactions, the nitty-gritty details you provide will help us tailor an apology that’s as unique as your situation. Think of it as the secret sauce to your \"I’m sorry\" soufflé.",
          emotionalAndContextualInsights: {
            yourEmotionalState: "Are you feeling more \"Oops\" or \"Ouch\"? Gauging your emotional temperature helps us season your apology just right.",
            emotionalStateOfOthers: "Is the other party simmering with disappointment or boiling with anger? Identifying their emotional flavor helps us craft an apology that’s truly palate-pleasing.",
            empathyAndRemorse: "These questions are like taste-testing for your soul, ensuring your apology is seasoned with the right amount of empathy and a dash of genuine remorse.",
            nextSteps: "What’s your recipe for resolution? Sharing your action plan adds the garnish to your apology, showing you're all in to fix the faux pas."
          }
        },
        craftingYourApology: "With all the ingredients in hand, iSorry.lol whips up your apology with a blend of sincerity, empathy, and a dollop of humor. It's not just about saying \"I'm sorry\"—it's about baking a humble pie, garnished with pledges for a better tomorrow. iSorry.lol: Where every \"oops\" is an opportunity to grow, glow, and go on with a grin."
      };
      
    return (
        <div>
            <div className="relative isolate bg-gray-900 py-12 sm:py-32 overflow-clip">
                <img
                    src="https://unsplash.com/photos/wd5JNpAl3Ts/download?force=true&w=1920"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#fff] to-[#000] opacity-20"
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#fff] to-[#000] opacity-20"
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>        
                <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-between">
                    <div className="mx-auto max-w-2xl lg:mx-0 flex">
                        <div>
                            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl drop-shadow-md">{content.header.title}</h2>
                            <p className="mt-6 text-2xl leading-8 text-black text-bold">
                                {content.header.shortDescription}
                            </p>
                        </div>            
                    </div>          
                </div>
            </div>

            <LoggedIn />

            <div className="bg-white px-6 py-10 lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                    <p className="text-base font-semibold leading-7 text-primary">How iSorry.lol Works</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bare Minimum, Bold Outcomes: Simplify to Amplify</h1>
                    <p className="mt-6 text-xl leading-8">
                        Crafting an apology that’s genuinely impactful requires a pinch of insight and a spoonful of detail from you
                    </p>                    
                    <div className="mt-10 max-w-2xl">
                        <p><strong>Apology Context{'  '}</strong></p>
                        <p>{content.userInput.apologyContext}</p>
                    <ul className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <strong>Emotional And Contextual Insights</strong>
                        {Object.keys(content.userInput.emotionalAndContextualInsights).map(key => {
                            return (
                                <li className="flex gap-x-3" key={key}>
                                    <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">{toSpaceCase(key)}</strong> {content.userInput.emotionalAndContextualInsights[key]}
                                    </span>
                                </li>
                            )
                        })}                        
                    </ul>
                    
                    
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Crafting Your Apology</h2>

                    <p className="mt-6">
                        {content.craftingYourApology}
                    </p>
                    <figure className="mt-10 border-l border-primary pl-9">
                        <blockquote className="font-semibold text-gray-900">
                        <p>
                            “Always forgive your enemies; nothing annoys them so much”
                        </p>
                        </blockquote>
                        <figcaption className="mt-6 flex gap-x-4">
                        <img
                            className="h-6 w-6 flex-none rounded-full bg-gray-50"
                            src={Smirk}
                            alt="Smirking Emoji face"
                        />
                        <div className="text-sm leading-6">
                            <strong className="font-semibold text-gray-900">Oscar Wilde</strong> – Author
                        </div>
                        </figcaption>
                    </figure>
                    
                    </div>
                    
                    
                    </div>
                </div>
            
            <div className="bg-secondary">
                <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">          
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Economy of Effort, Wealth of Results: Streamlining Success
                        </h2>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Trigger>
                            Act Now
                        </Trigger>
                        <Link to="/fauxpologies" className="text-sm font-semibold leading-6 ">
                            What's a Fauxpology? <span aria-hidden="true">→</span>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Route = {
    element: <Component />,
    path: "/how-it-works",
};
  
export default Route;