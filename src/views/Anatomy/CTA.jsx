import { Link } from 'react-router-dom';
export default function CTA() {
    return (
      <div className="bg-secondary">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">          
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to "Apologize"
              <br />
              Just get it over with
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/apologize"
                className="rounded-md bg-tertiary/80 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contrition Go Away
              </Link>
              <Link to="/apologize" className="text-sm font-semibold leading-6 ">
                What's the Non-Apology Apology? <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  