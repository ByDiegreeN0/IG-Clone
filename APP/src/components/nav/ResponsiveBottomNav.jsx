import React from 'react'

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../css/nav/ResponsiveBottomNav.css'

const ResponsiveBottomNav = () => {
  return (
    <div className="responsive-nav">
          <ul className=" responsive-nav-ul">

            <li className="aside-nav-li">
              <a className="aside-nav-link" href=""> < FontAwesomeIcon icon="house" className="custom-icon" /></a>
            </li>

            <li className="aside-nav-li">
              <a className="aside-nav-link" href=""> < FontAwesomeIcon icon="magnifying-glass" className="custom-icon" /></a>
            </li>

            <li className="aside-nav-li">
              <a className="aside-nav-link" href="">< FontAwesomeIcon icon="plus" className="custom-icon" /></a>
            </li>

            <li className="aside-nav-li">
              <a className="aside-nav-link" href="">< FontAwesomeIcon icon="video" className="custom-icon" /></a>
            </li>


            <li className="aside-nav-li">
              <a className="aside-nav-link" href="">< FontAwesomeIcon icon="user" className="custom-icon" /></a>
            </li>

          </ul>
        </div>
  )
}

export default ResponsiveBottomNav