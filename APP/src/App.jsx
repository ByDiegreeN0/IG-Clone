import React from 'react'

import LoginForm from './components/forms/loginForm'
import RegisterForm from './components/forms/registerForm'
import Main from './components/main/main'


import ProfilePage from './components/main/profile/ProfilePage'


// FontAwesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faHouse, faMagnifyingGlass, faCompass, faVideo, faHeart, faPlus, faComment, faShare, faBookmark, faBars, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faHouse, faMagnifyingGlass, faCompass, faVideo, faHeart, faPlus, faComment, faShare, faBookmark, faBars, faUser, fab);


function App() {

  return (
    <>
        
        <ProfilePage/>
    </>
    
  )
}


export default App
