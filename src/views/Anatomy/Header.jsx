import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import Trigger from '../../components/Create/Trigger';

export default function Header() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">

          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Link to="/best-practices" className="inline-flex space-x-6">
                <span className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary">
                  Learning
                </span>
              </Link>
              <Link to="/how-it-works" className="inline-flex space-x-6 sm:ml-4">
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                  <span>Let Us Help</span>
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Link>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            The Heart of Contrition: Exploring Apologies Inside Out
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore the core of true remorse, where heartfelt apologies originate and how they can mend the bonds strained by mistakes.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Trigger>
              Let's Do It
            </Trigger>
            <Link to="/fauxpologies" className="text-sm font-semibold leading-6 text-gray-900">
              What are fauxpologies? <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-xl flex-none ">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="https://images.unsplash.com/photo-1618939304347-e91b1f33d2ab?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Heart"
                width={200}
                height={400}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
