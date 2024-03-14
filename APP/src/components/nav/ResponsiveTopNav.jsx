import React from 'react'

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// CSS 

import '../../css/nav/ResponsiveTopNav.css'

const ResponsiveTopNav = () => {
  return (
    <div className="responsive-top">
    <h1 className="responsive-top-tittle">Instagram</h1>

    <div className="responsive-top-icon">
      <ul>

        <li><a href="">< FontAwesomeIcon icon="heart" className="custom-icon" /></a></li>
        <li><a href="">< FontAwesomeIcon icon="heart" className="custom-icon" /></a></li>
      </ul>
    </div>
  </div>
  )
}

export default ResponsiveTopNav