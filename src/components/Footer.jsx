export default () => {
    const links = [
        { name: 'Attributions', href: '/attributions' },
        { name: 'Privacy', href: '/privacy' },
        { name: 'Terms', href: '/terms' },
        { name: 'Contact', href: '/contact' },
    ];
    return (
        <footer className='bg-gray-900 text-white'>
            <div className="px-6 py-8 lg:px-8">
                <div className="mx-auto ">
                    <div>
                        { links.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative inline-flex items-center gap-x-1.5 mr-2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >                            
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}