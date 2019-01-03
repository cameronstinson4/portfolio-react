import React, { Component } from "react"

import Layout from '../components/layout/layout'
import ImageArticle from '../components/image-article/image-article'

import styles from './pages.module.scss'

import text from '../text-content'
import metroGraphImage from '../images/msp.png'
import vegasMoon from '../images/vegas-moon.jpeg'

class CoolPage extends Component {

  constructor(props) {
    super(props)
  }

  render = () => (

    <Layout largeHeader={false}>

      <ImageArticle
        articleTitle={'cool-domain'}
        imgSrc={vegasMoon}
        imgAlt={'vegas moon'}
        imgSize={`large`}>

        <h1>Cool Page</h1>
        <p>A page I throw cool stuff on occasion.
        Check out my other domain for the latest and greatest of cool.</p>
        <a className={styles.link} href={text.coolDomainLink}>{text.coolDomainLink}</a>

      </ImageArticle>

      <ImageArticle
        articleTitle={text.metroGraphTitle}
        imgSrc={metroGraphImage}
        imgAlt={text.metroGraphTitle}
        imgSize={`large`}>
        <h5>Summary</h5>

        <p>Graphs are fun and so are trains, so I scraped data from the Washington Metro Area Transit Authority's
          public API and created a graph structure of the Washington Metro using vis.js</p>

        <p>Node edges are relative to the actual distance between stations,
          and transfer stations are indicated in black.</p>

        <h5> Djikstra's Algorithm Implementation </h5>

        <p>In the interactive version you can insert two station codes,
          and find the shortest distance between two nodes.
          This uses an implementation of Djikstra's algorithm in Javascript.
          The bolded black route is the shortest path between the two nodes,
          and all of the pink stations are the nodes visited in the algorithm.</p>

        <a className={styles.link} href={text.metroGraphLink}>interactive version can be found here</a>
      </ImageArticle>
    </Layout>
  )
}

export default CoolPage
