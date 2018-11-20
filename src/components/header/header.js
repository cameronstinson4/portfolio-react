import React from 'react'
import { Link } from 'gatsby'

import styles from './header.module.scss'

function isLarge(large) {
  if (large) {
    return <h1>
      <Link
        to="/"
        className={`${styles.h1Link} ${styles.largeText}`}
      >
        Cameron <br></br> Stinson
    </Link>
    </h1>
  }
  else {
    return <h1>
      <Link
        to="/"
        className={`${styles.h1Link}`}
      >
        Cameron Stinson
  </Link>
    </h1>
  }
}

let Header = ({ large }) => (
  <div
    className={styles.header}
  >
    <div className={styles.headerContainer}>
      {isLarge(large)}
    </div>
  </div>
)

export default Header
