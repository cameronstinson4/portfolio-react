import React, { Component } from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import styles from './pages.module.scss'

class ProjectsPage extends Component {

  constructor(props) {
    super(props)
  }

  render = () => (
    <Layout largeHeader={false}>
      <h1>Projects</h1>
      <p>Under Construction</p>
    </Layout>
  )
}

export default ProjectsPage
