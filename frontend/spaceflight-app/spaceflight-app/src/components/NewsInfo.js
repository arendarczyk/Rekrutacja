import React, {useEffect, useState} from "react";

const NewsInfo = ({match}) =>{

    const [news, setNews] = useState({});

    useEffect(()=>{
        getSearch();
       console.log(news.title)
    },[])

    const getSearch = async ()=>{      
        console.log(match.params.id)      
            const query = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${match.params.id}`)
            const queryJson = await query.json()
            setNews(queryJson)         
    }

    return(
        <div>
            <h1>{news.title}</h1>
            <p>{news.summary}</p>
        </div>
    )
}

export default NewsInfo;