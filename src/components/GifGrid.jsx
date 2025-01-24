
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ( { category }) => {

    const { images, isLoading } = useFetchGifs( category );

    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs( category );
    //     setImages( newImages );
    // }

    // useEffect( () => {
    //     getImages();
    // }, [])


    // useEffect( () => { forma correcta.
    //     getGifs(category)
    //         .then( newImages => setImages(newImages) );
    // }, [])
    


    //getGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando</h2> )//un and logico: si isloading esta en tru ejecutara la 2parte de la condicion.
                // isLoading
                // ? ( <h2>Cargando...</h2> )
                // : null
            }

            <div className='card-grid'>
                {/* { 
                    images.map(image => (
                        <li key={ image.id }>{ image.title }</li>
                    ))
                 } */}

                {
                    images.map( ( image ) => (
                        //<li key={ id }>{ title }</li>
                        <GifItem 
                            key={ image.id }
                            { ...image }
                                    />
                    ))
                }

            </div>
        </>
    )
}


