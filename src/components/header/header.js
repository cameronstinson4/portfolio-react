import React from 'react'
import { Link } from 'gatsby'

import styles from './header.module.scss'

let Header = ({ siteTitle }) => (
  <div
    className={styles.header}
  >
    <div
      className={styles.h1Padding}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className={styles.h1Link}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
