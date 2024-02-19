import { Link } from 'react-router-dom';
const Component = () => {

    const assets = {
        AI: [{ name: 'ChatGPT', creator: 'OpenAI', link: 'https://openai.com/'},],
        Logo: [{ name: 'Tilde', creator: 'Akshar Pathal', link: 'https://thenounproject.com/browse/icons/term/tilde/'}],
        Home: [
            { name: 'Man Hugging Woman Near Trees', creator: 'Gus Moretta', link: 'https://unsplash.com/photos/man-hugging-woman-near-trees-BCyfpZE3aVE'},
            { name: 'Silhouette of Man and Woman Under Yellow Sky', creator: 'Eric Ward', link: 'https://unsplash.com/photos/silhouette-of-man-and-woman-under-yellow-sky-7KQe_8Meex8'}
        ],
        Anatomy: [{ name: 'Red And Yellow Bird Figurine', creator: 'Kenny Eliason', link: 'https://unsplash.com/photos/red-and-yellow-bird-figurine-MEbT27ZrtdE'}],
        Fauxpologies: [
            { name: 'Red and White Clown Figurine', creator: 'Marcos Ferreira', link: 'https://unsplash.com/photos/red-and-white-clown-figurine-cmqdrDtNE88'},
            { name: 'A Group of Wooden Letters', creator: 'Steve DiMatteo', link: 'https://unsplash.com/photos/a-group-of-wooden-letters-KkEj7OysI8o'},            
        ],
        'Best Practices': [
            { name: "Bird's Eye View of Seashore", creator: 'Michael Olsen', link: 'https://unsplash.com/photos/birds-eye-view-of-seashore-aHCZXg0DodM'},
            { name: 'Black Pug in Black and White', creator: 'Priscilla Du Preez', link: 'https://unsplash.com/photos/black-pug-in-black-and-white-Iy9wIDKL4YU'},
        ],
        Icons: [{ name: 'Heroicons', creator: 'Heroicons', link: 'https://heroicons.com/'},],
        'How It Works': [
            { name: 'A Close Up View of a Blue Blanket', creator: 'Klim Sergeev', link: 'https://unsplash.com/photos/wd5JNpAl3Ts/download?force=true&w=1920'}
        ] 
    };

    return (
        <>
        <div className="bg-brand px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <p className="text-base font-semibold leading-7 text-primary">iSorry.lol</p>
                    <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">Attributions</h2>
                    <p className="mt-6 text-lg leading-8">
                    Gratitude and Recognition: Extending Our Sincere Thanks to Those Whose Contributions Have Enriched Our Journey
                    </p>
                </div>
            </div>
        </div>
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl flex justify-center px-6 lg:px-8">
                <div className="mx-auto w-full max-w-2xl lg:mx-0">
                    {
                        Object.keys(assets).map(key => {
                            return (
                                <div key={key} className='mb-4'>
                                    <h2 className='text-xl font-bold leading-10 tracking-tight'>{key}</h2>
                                    <div>
                                        { assets[key].map(asset => {
                                            return (
                                                <div key={asset.name} className='flex'>
                                                    <Link to={asset.link} target='_blank' rel="noreferrer" className='text-primary font-semibold mr-2'>{asset.name}</Link>
                                                    <div>{asset.creator}</div>                                                    
                                                </div>
                                            )
                                        })}
                                        
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

const Route = {
    element: <Component />,
    path: "/attributions",
};
  
export default Route;