const Component = () => {
    return (
        <>
        <div className="bg-secondary px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <p className="text-base font-semibold leading-7 text-primary">iSorry.lol</p>
                    <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">Contact Us</h2>
                    <p className="mt-6 text-lg leading-8">
                    Leave us a message. We may respond. If not, sorry.
                    </p>
                </div>
            </div>
        </div>
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl flex justify-center px-6 lg:px-8">
                <div className="mx-auto w-full max-w-2xl lg:mx-0">
                    <iframe title='Contact Us Google Form' src="https://docs.google.com/forms/d/e/1FAIpQLSfOdqD3VZ9KK4B9lMrJq_mJfjuAlBCbvlLMPg6mdoRkLaDTFA/viewform?embedded=true" width="640" height="828" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
        </div>
        </>
    )
}

const Route = {
    element: <Component />,
    path: "/contact",
};
  
export default Route;