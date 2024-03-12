import React from 'react'

import LoginForm from './components/forms/loginForm'
import RegisterForm from './components/forms/registerForm'
import Main from './components/main/main'

// FontAwesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {faHouse, faMagnifyingGlass, faCompass, faVideo, faHeart, faPlus, faComment, faShare, faBookmark, faBars, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faHouse, faMagnifyingGlass, faCompass, faVideo, faHeart, faPlus, faComment, faShare, faBookmark, faBars, faUser);


function App() {

  return (
    <>
        
        <Main/>
    </>
    
  )
}


export default App
