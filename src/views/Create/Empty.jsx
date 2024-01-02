import { PlusIcon } from '@heroicons/react/20/solid';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

export default ({ setOpen }) => {
    return (
        <div className="text-center mt-8">
            <ChatBubbleOvalLeftEllipsisIcon className="mx-auto h-12 w-12 text-gray-400" aria-hidden="true" />             
            <h3 className="mt-2 text-sm font-semibold text-gray-900">Tell Us What Happened</h3>
            <p className="mt-1 text-sm text-gray-500">Provide some facts and some feelings and we'll give you a personalized written apology.</p>
            <div className="mt-6">
                <button
                type="button"
                onClick={() => setOpen(true) }
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                    Get Started
                </button>
            </div>
        </div>
    )
}