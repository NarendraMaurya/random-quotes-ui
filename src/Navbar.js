import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login'
import Favorite from './favorite';


const navStyle={
    width:'100vw',
    height:'10vh',
    color:'white',
    display:'flex',
    alignItems:'center',
    background:'black',
    justifyContent:'space-around'
}

const rightDiv={
    display: 'flex',
    width: '275px',
    justifyContent: "space-between",
    alignItems:'center'
    
}

const Navbar = () => {
    const [id,setid]=useState('')
    const [name,setname]=useState('')
    const [img, setimg] = useState('')

    const responseGoogle= (response)=>{
        setid(response.profileObj.googleId)
        setname(response.profileObj.name)
        setimg(response.profileObj.imageUrl)
    }
    const responseGoogleFailure=(response)=>{
        console.log(response)
    }
    
    return (
        <div style={navStyle}>
            <h1>Random Quotes</h1>
            <div style={rightDiv}>
                <Favorite/>
            {id?<p style={{display:'flex',alignItems:'center'}}><img src={img} alt={img} height="40px" style={{borderRadius:'50%',marginRight:'20px'}}/>{name}</p>:<GoogleLogin
                        clientId='751059775317-ol15p09fmg8llr5sp30m1nhqi2qor9qa.apps.googleusercontent.com'
                        icon='true'
                        buttonText='Login'
                        onSuccess={responseGoogle}
                        onFailure={responseGoogleFailure}
            />}
            </div>
        </div>
    )
}

export default Navbar
