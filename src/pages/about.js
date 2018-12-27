import React, { Component } from "react"

import Layout from '../components/layout/layout'
import ImageArticle from '../components/image-article/image-article'

import profileImage from '../images/me.jpeg'

class AboutPage extends Component {

  constructor(props) {
    super(props)
  }

  render = () => (
    <Layout largeHeader={false}>

      <ImageArticle
        articleTitle={`about-me`}
        imgSrc={profileImage}
        imgAlt={`headshot`}
        imgSize={`large`}>
        <h5>Software Engineer with a varied and diverse background and education</h5>
      </ImageArticle>
    </Layout>
  )
}
export default AboutPage
