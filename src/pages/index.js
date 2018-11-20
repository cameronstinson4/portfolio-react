import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout.js'

import styles from './index.scss'
import headerStyles from '../components/header/header.module.scss'
import text from '../text-content'

const IndexPage = () => (
  <Layout largeHeader={true}>
    <div className={styles.content}>
      <h1 className={headerStyles.largeText}> {text.intro} </h1>
    </div>
  </Layout>
)

export default IndexPage
