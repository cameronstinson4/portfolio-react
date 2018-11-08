import React from 'react'
import { Link } from 'gatsby'

import styles from './header.module.scss'

let Header = ({  }) => (
  <div
    className={styles.header}
  >
        <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className={styles.h1Link}
        >
          Cameron <br></br> Stinson
        </Link>
      </h1>

  </div>
)

export default Header
