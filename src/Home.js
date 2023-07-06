import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'
import ShowQuotes from './ShowQuotes'
import Img from './image/bg-img.jpg'
const Home = () => {
    return (
        <div style={{backgroundImage:`url(${Img})`,backgroundSize:'cover',height:'100vh',width:'100vw'}}>
            <Navbar/>
            <ShowQuotes/>
            <Footer />
        </div>
    )
}

export default Home
