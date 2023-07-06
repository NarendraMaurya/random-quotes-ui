import React, { useEffect, useState } from 'react'
import Like from './image/Liked.png';
import unLiked from './image/unLiked.png';
import axios from 'axios';
import './ShowQuotes.css';

const URL = process.env.REACT_APP_API_URL;

const ShowQuotes = () => {
    const [content, setcontent] = useState('')
    const [author, setauthor] = useState('')
    const apicall = () => {
        setLike(false);
        axios.get(URL)
            .then(function (response) {
                setcontent(response.data.content)
                setauthor(response.data.author)
            })
    }

    useEffect(() => {
        apicall()
    }, [])

    const [isLike, setLike] = useState(false);
     const Liked = async (e)=> {
         e.preventDefault();
        if (isLike) setLike(false);
        else {
            setLike(true);
            try {
            console.log("api called")
                    await axios(
                    {
                        url: URL + '/saveQoute',
                        data:{
                            content,
                            author
                            },
                            method: "POST",
                    });
            } catch (error) {
                console.log(error);
            } 
            
        }
    }
        return (
            <div>
                <div className="quotes_container">
                    <p className='quote'>
                        {content}
                    </p>
                    <p title="Author Name" className='author'>
                        ~"{author}"
                    </p>
                </div>
                <div className='btn_container'>
                    <span title={isLike ? 'Remove from favorite' : 'Add to favorite'} onClick={Liked}><img src={isLike ? Like : unLiked} alt='favorite'></img></span>
                    <button title='Change Quote' onClick={apicall}>new quote</button>
                </div>
                {/* <MyQuotes/> */}
            </div>
        )
}

export default ShowQuotes;
