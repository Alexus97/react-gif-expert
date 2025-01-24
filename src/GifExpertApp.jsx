import { useState } from 'react';
import { AddCategory, GifGrid } from './components';



export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['One Punch'] );
    
    const onAddCategory = (newCategory) => {
        /*if( categories.includes(newCategory) ) {
            return;
        }  --> forma larga*/
        if( categories.includes(newCategory)) return;
        console.log(newCategory);
        setCategories( [newCategory, ...categories ] );
        // categories.push('valorant'); No recomendado porque muta los objetos.
        //setCategories( ['Valorant', ...categories ] );
        //setCategories( cat => [ ...cat, 'Valorant'] );


    }

  return (
    <>
        {/* { title } */}
        <h1>GifExpertApp</h1>

        {/* { input } */}
        <AddCategory
            // setCategories={ setCategories }
            onNewCategory = { (value) => onAddCategory(value)}
        />

        {/* { Listado de Gif} */}

        {/* <button onClick={ onAddCategory }>Agregar</button> */}
        
        
        {/* <ol> --> forma larga.
            {
                categories.map( category => (
                    <div key={ category }>
                        <h3>{ category }</h3>
                        <li >{ category }</li>
                    </div>
                ))
            }
        </ol> */}
            {/* { Gif Item} */}

        {
            categories.map( ( category ) => (
                <GifGrid
                    key={ category }
                    category={ category } />
            ))
        }
    </>
  )
}


