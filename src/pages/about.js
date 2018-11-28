import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

const AboutPage = () => (
  <Layout largeHeader={false}>
    <h1>Hi from the second Aboutpage</h1>
    <p>Welcome to Aboutpage 2</p>
    <Link to="/">Go back to the homeAboutpage</Link>
  </Layout>
)

export default AboutPage
