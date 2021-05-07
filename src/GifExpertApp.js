import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function GifExpertApp () {

    //const categories = ['One Punch', 'Dragon Ball', 'Listorti']
    
    const [categories, setCategories] = useState(['One Punch'])
    
    // const handleAdd = () => {
    //     const newCategorie = 'Breaking Bad'
    //     setCategories(oldCategorie => [...oldCategorie, newCategorie])
    // }
    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setCategories}/>

            <hr></hr>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    
                    />
                    
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp