import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/GetNews.scss';
import FavList from './FavList';


const GetNews = () => {
     
    const [news, setNews] = useState([])
    const [error, setError] = useState(null)
    const [refresh, setRefresh] = useState(1)
    const [favourites, setFavourites] = useState([])

    useEffect(()=>{
        getSearch()
        
    },[refresh])

    const getSearch = async (e)=>{
        try{          
            const query = await fetch(`https://api.spaceflightnewsapi.net/v3/articles`)
            const queryJson = await query.json()
            setNews(Array.from(queryJson))
            setError(null)

            

        }catch(err){
            setError(err.message)
        }      
    }

    const addFavouriteNews = (news) =>{
        const newFavouriteList = [...favourites, news]
        setFavourites(newFavouriteList)
    }

    const deleteFavouriteNews = (news) =>{     
            let fav = favourites         
            fav.splice(favourites.indexOf(news), 1)
            setFavourites(fav)
    }

    return(
        <div>
            <button onClick={(e)=>{
                setRefresh(refresh+1)}}>Refresh!</button>    
            <div className='list-wrapper'>
                <ol>
                    {news.map((e)=><li key={e.id}><Link to={`/articles/${e.id}`}>{e.title}</Link><button className='btns' onClick={(event)=>{
                        if(event.target.style.background=='')
                        {
                            event.target.style.background='gold'
                            addFavouriteNews(e)
                        }else{
                            event.target.style.background=''
                            deleteFavouriteNews(e)
                        }
                         
                       
                        }}>☆</button></li>)}
                </ol>
            </div>
            <FavList fav={favourites} remove={deleteFavouriteNews} />
        </div>
    )
}

export default GetNews;