import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  './favorite.css'

const URL = process.env.REACT_APP_API_URL;

const fav = {
    backgroundColor:'#ffffff',
    color: 'black',
    display:'block'
}
const dropdownContent = {
    position: 'absolute',
    display: 'none',
    backgroundColor: '#f9f9f9',
    zIndex: 1,
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
}
const dropbtnClick = {
    backgroundColor: '#ffffff',
    color:'black'
}
const dropbtn = {
    color: 'white',
    backgroundColor:'black'
}

const Favorite = () => {

    const [isClick, setClick] = useState(false);
    const [Quotes, setQuotes] = useState([]);

    const apicall = async () => {
        const response = await axios.get(URL + '/favorite')
        setQuotes(response.data);
    }

    useEffect(() => {
        apicall() 
        
       
    }, [])
    
    function showFav() {
        if (isClick) setClick(false);
        else {
            setClick(true);
            apicall();
        };
    }

    
  return (
    <div className="dropdown" >
    <button className="dropbtn" onClick={showFav} style={isClick?dropbtnClick:dropbtn} >Favorites</button>
    <div className='dropdown-content' style={isClick?fav:dropdownContent}>
              {Quotes.map((quote) => {
                  return <a href=".">{quote.content}</a>
            })}
    </div>
  </div>
  )
}

export default Favorite;

