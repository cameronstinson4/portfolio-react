import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

const ProjectsPage = () => (
  <Layout largeHeader={false}>
    <h1>Hi from the second ProjectsPage</h1>
    <p>Welcome to ProjectsPage 2</p>
    <Link to="/">Go back to the homeProjectsPage</Link>
  </Layout>
)

export default ProjectsPage
