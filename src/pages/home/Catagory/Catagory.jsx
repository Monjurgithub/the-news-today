import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Newscard/NewsCard';


const Catagory = () => {
    // console.log(data);
    // const [clickButton, setClickButton] = useState([]);
    const { id } = useParams()
    const allNews = useLoaderData();
    // useEffect(()=>{
        // fetch(`http://localhost:5000/catagories`)
        // .then(res =>res.json())
        // .then(data => setClickButton(data))
        
        // .catch(error => console.log(error))
        // console.log(clickButton);
    //     console.log(data);
    //     setClickButton(data.name)
    // },[])
    return (
        <div>
          {/* <h4>{clickButton}</h4> */}
           
            {
                allNews.map(news => <NewsCard key={news._id}
                    news={news}></NewsCard>)
            }
        </div>
    );
};

export default Catagory;