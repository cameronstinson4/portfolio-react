import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

const CoolPage = () => (
  <Layout largeHeader={false}>
    <h1>Hi from the second CoolPage</h1>
    <p>Welcome to CoolPage 2</p>
    <Link to="/">Go back to the homeCoolPage</Link>
  </Layout>
)

export default CoolPage
