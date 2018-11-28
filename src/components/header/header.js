import React from 'react'
import { Link } from 'gatsby'

import styles from './header.module.scss'

function isLarge(large) {
  if (large) {
    return <h1>
      <Link
        to="/"
        className={`${styles.link} ${styles.largeText}`}
      >
        Cameron <br></br> Stinson
    </Link>
    </h1>
  }
  else {
    return
  }
}

let Header = ({ large }) => (
  <div
    className={styles.header}
  >
    <div className={styles.headerContainer}>

      <nav>

        <div className={`${styles.navFlexBox}`} >
          <div className={`${styles.navItem}`}>
            <Link to="/" className={`${styles.link}`}>user@cameronstinson.com:~$</Link>
          </div>
          <div className={`${styles.navFlexBox}`} >
            <div className={`${styles.navItem}`}>
              <Link to="/about/" className={`${styles.navLink}`}>about</Link>
            </div>

            <div className={`${styles.navItem}`}>
              <Link to="experience" className={`${styles.navLink}`}>experience</Link>
            </div>

            <div className={`${styles.navItem}`}>
              <Link to="projects" className={`${styles.navLink}`}>projects</Link>
            </div>

            <div className={`${styles.navItem}`}>
              <Link to="cool" className={`${styles.navLink}`}>cool</Link>
            </div>
          </div>
        </div>

      </nav>

      {isLarge(large)}
    </div>
  </div >
)

export default Header
