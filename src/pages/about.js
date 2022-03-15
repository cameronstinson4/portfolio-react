import React, { Component } from "react"

import Layout from '../components/layout/layout'
import ImageArticle from '../components/image-article/image-article'

import profileImage from '../images/hehe.jpg'

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

        <h4>Software Engineer</h4>
        <p>Varied interest in all things engineering and systems design. B.S. in Computer Science and Engineering as well as a certified AWS Solutions Architect.</p>

        <p>Lover of hot sauce and national parks. Notoriously bad at writing bios.</p>

      </ImageArticle>
    </Layout>
  )
}
export default AboutPage
