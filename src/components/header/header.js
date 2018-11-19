import React from 'react'
import { Link } from 'gatsby'

import styles from './header.module.scss'

let Header = ({ big }) => (
  <div
    className={styles.header}
  >
        <h1>
        <Link
          to="/"
          className={ `${styles.h1Link} ${big ? styles.bigText : styles.smallText}` }
        >
          Cameron <br></br> Stinson
        </Link>
      </h1>

  </div>
)

export default Header
