import { Link } from 'react-router-dom';
import Trigger from '../../components/Create/Trigger';
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
              <Trigger>
                Contrition Go Away
              </Trigger>
              <Link to="/fauxpologies" className="text-sm font-semibold leading-6 ">
                What's the Non-Apology Apology? <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  