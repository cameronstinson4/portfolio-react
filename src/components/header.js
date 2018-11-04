import React from 'react'
import { Link } from 'gatsby'

import styles from './theme.scss'
let test =  styles.appPrimaryColor //reslves to '#40b4c4'

let Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#40b4c4',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
