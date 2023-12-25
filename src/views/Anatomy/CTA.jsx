export default function CTA() {
    return (
      <div className="bg-indigo-100">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to "Apologize"
            <br />
            Just get it over with
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <a
              href="/create"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contrition Go Away
            </a>
            <a href="/create" className="text-sm font-semibold leading-6 text-gray-900">
              Absolution? Absolutely! <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
  