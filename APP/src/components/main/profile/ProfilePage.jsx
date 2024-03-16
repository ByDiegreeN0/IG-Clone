import React from 'react'

// ProfileComponents
import ProfilePost from './ProfilePost'

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

      <div className="profile-content">
        <section className="profile-top-container">

          <div className="profile-img">
            <img src="data:image/jpeg;base64,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" alt="" />
          </div>

          <div className="profile-data">

            <div className="profile-top">
              <h2 className='profile-username'>UserName</h2>
              <button className='profile-button'><a href="">Editar Perfil</a></button>
              <button className='profile-button'><a href="">Ver archivo</a></button>

            </div>

            <div className="profile-bottom">
              <div className="profile-bottom-content">
                <span># Publicaciones</span>
                <span className='profile-bottom-count'># Segudores</span>
                <span className='profile-bottom-count'># Seguidos</span>
              </div>
            </div>
          </div>




        </section>

        <ProfilePost />
      </div>

      

    </section>
  )
}

export default ProfilePage