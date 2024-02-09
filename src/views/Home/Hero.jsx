import { Link } from 'react-router-dom';

import CreateTrigger from '../../components/Create/Trigger';

export default function Hero() {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden pt-14">
        <img
          src='https://images.unsplash.com/photo-1505189014261-0148f9aefa85?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div
          className="absolute -z-10 bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50" />
        
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <Link to='/best-practices' className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white/90 hover:ring-white/20">
                Turn Your Apology into Action{' '}
              <span className="font-semibold text-white">
                <span className="absolute inset-0" aria-hidden="true" />
                Make Amends with the Perfect Apology <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              For when you're really sorry, but not sorry really
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-50">
            Let Technology Help You Say Sorry: Use our AI-driven apology assistant to create an apology that truly expresses your remorse, blending empathy with the right tone for your situation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <CreateTrigger>
                Get Started
              </CreateTrigger>
              <Link to="/anatomy" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
