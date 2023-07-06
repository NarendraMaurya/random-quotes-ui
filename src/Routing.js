import React from 'react'
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Home from './Home'
import MyQuotes from './MyQuotes'

const Routing = () => {
  return ( <div>
          <BrowserRouter>
                <Routes>
                        <Route exact path='/' Component={Home}></Route>
                        <Route path='/player/:userid' Component={MyQuotes}></Route>
                </Routes>
        </BrowserRouter>
        </div> 
  )
}

export default Routing
