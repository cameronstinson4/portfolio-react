import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

const ExperiencePage = () => (
  <Layout largeHeader={false}>
    <h1>Hi from the second ExperiencePage</h1>
    <p>Welcome to ExperiencePage 2</p>
    <Link to="/">Go back to the homeExperiencePage</Link>
  </Layout>
)

export default ExperiencePage
