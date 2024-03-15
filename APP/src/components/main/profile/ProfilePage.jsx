import React from 'react'



// Nav

import ResponsiveTopNav from '../../nav/ResponsiveTopNav'
import ResponsiveBottomNav from '../../nav/ResponsiveBottomNav'
import MainNav from '../../nav/MainNav'

// CSS
import '../../../css/main/ProfilePage.css'



const ProfilePage = () => {
  return (
    <section className="main-profile">

      <ResponsiveTopNav />
      <MainNav />
      <ResponsiveBottomNav />       

      <section className="profile">
        
      </section>

    
    </section>
  )
}

export default ProfilePage