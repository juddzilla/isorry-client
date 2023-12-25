import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

import Heading from './Create/Heading';

const rangeClassList = `w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
[&::-webkit-slider-thumb]:w-2.5
[&::-webkit-slider-thumb]:h-2.5
[&::-webkit-slider-thumb]:-mt-0.5
[&::-webkit-slider-thumb]:appearance-none
[&::-webkit-slider-thumb]:bg-white
[&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
[&::-webkit-slider-thumb]:rounded-full
[&::-webkit-slider-thumb]:transition-all
[&::-webkit-slider-thumb]:duration-150
[&::-webkit-slider-thumb]:ease-in-out
[&::-webkit-slider-thumb]:dark:bg-slate-700

[&::-moz-range-thumb]:w-2.5
[&::-moz-range-thumb]:h-2.5
[&::-moz-range-thumb]:appearance-none
[&::-moz-range-thumb]:bg-white
[&::-moz-range-thumb]:border-4
[&::-moz-range-thumb]:border-blue-600
[&::-moz-range-thumb]:rounded-full
[&::-moz-range-thumb]:transition-all
[&::-moz-range-thumb]:duration-150
[&::-moz-range-thumb]:ease-in-out

[&::-webkit-slider-runnable-track]:w-full
[&::-webkit-slider-runnable-track]:h-2
[&::-webkit-slider-runnable-track]:bg-gray-100
[&::-webkit-slider-runnable-track]:rounded-full
[&::-webkit-slider-runnable-track]:dark:bg-gray-700

[&::-moz-range-track]:w-full
[&::-moz-range-track]:h-2
[&::-moz-range-track]:bg-gray-100
[&::-moz-range-track]:rounded-full`;

const Component = () => {
    return (
        <>
            <Heading />
            <div className="bg-gray-100 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="space-y-10 divide-y divide-gray-900/10">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                            <div className="px-4 sm:px-0">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Context</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    This information will be displayed publicly so be careful what you share.
                                </p>
                            </div>

                            <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                                <div className="px-4 py-6 sm:p-8">
                                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="col-span-full">
                                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                                What Had Happened Was
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    id="about"
                                                    name="about"
                                                    rows={3}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    defaultValue={''}
                                                />
                                            </div>
                                            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                                And For Context
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    id="about"
                                                    name="about"
                                                    rows={3}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    defaultValue={''}
                                                />
                                            </div>
                                            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
                            <div className="px-4 sm:px-0">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Your Feelings</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
                            </div>

                            <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                                <div className="px-4 py-6 sm:p-8">
                                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-8">
                                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                How Do You Feel About It?
                                            </label>
                                            <div className="mt-2">
                                                <input type="range" className={ rangeClassList } id="basic-range-slider-usage" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-8">
                                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Was It Your Fault?
                                            </label>
                                            <div className="mt-2">

                                                <input type="range" className={ rangeClassList } id="basic-range-slider-usage" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-8">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                Remorse
                                            </label>
                                            <div className="mt-2">
                                                <label for="basic-range-slider-usage" class="sr-only">Example range</label>
                                                <input type="range" className={ rangeClassList } id="basic-range-slider-usage" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-8">
                                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                                Empathy
                                            </label>
                                            <div className="mt-2">
                                                <label for="basic-range-slider-usage" class="sr-only">Example range</label>
                                                <input type="range" className={ rangeClassList } id="basic-range-slider-usage" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
                            <div className="px-4 sm:px-0">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Their Feelings</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    We'll always let you know about important changes, but you pick what else you want to hear about.
                                </p>
                            </div>

                            <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                                <div className="px-4 py-6 sm:p-8">
                                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-8">
                                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                How Did They Feel When It Happened?
                                            </label>
                                            <div className="mt-2">
                                                <input type="range" className={ rangeClassList } id="basic-range-slider-usage" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-8">
                                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                How Do They Feel Now?
                                            </label>
                                            <div className="mt-2">

                                                <input type="range" className={ rangeClassList } id="basic-range-slider-usage" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-8">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                Do They Have The Right To Feel That Way?
                                            </label>
                                            <div className="mt-2">
                                                <label for="basic-range-slider-usage" class="sr-only">Example range</label>
                                                <input type="range" className={ rangeClassList } id="basic-range-slider-usage" />
                                            </div>
                                        </div>                                        
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
                            <div className="px-4 sm:px-0">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Commitment To Change</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
                            </div>

                            <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                                <div className="px-4 py-6 sm:p-8">
                                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Are You Willing To Change?
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Will You Change?
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                What You Will Do
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                                When You Will Change
                                            </label>
                                            <div className="mt-2">
                                                <select
                                                    id="country"
                                                    name="country"
                                                    autoComplete="country-name"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                >
                                                    <option>United States</option>
                                                    <option>Canada</option>
                                                    <option>Mexico</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

const Route = {
    element: <Component />,
    path: "/create",
};

export default Route;