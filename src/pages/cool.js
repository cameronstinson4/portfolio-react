import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import styles from './pages.module.scss'

const CoolPage = () => (
  <Layout largeHeader={false}>
    <h1>Cool</h1>
    <p>Under Construction</p>
    <Link className={styles.link} to="/">home</Link>
  </Layout>
)

export default CoolPage
