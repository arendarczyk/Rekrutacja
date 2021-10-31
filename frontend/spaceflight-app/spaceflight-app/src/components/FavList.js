import React from 'react'

const FavList = ({fav, remove}) =>{
    
    console.log(fav.map(e=>e.id))

    return(
        <div>
            <div>
                Favourites     
            </div>
            <ol>
                {fav.map(e=><li key={e.id}>{e.title}</li>)}
            </ol>
        </div>
    )
}

export default FavList;