import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout.js'
import text from '../text-content'

const IndexPage = () => (
  <Layout>
    <h1> { text.intro } </h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
