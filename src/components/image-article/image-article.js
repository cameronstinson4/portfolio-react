import React, { Component } from "react"

import styles from './image-article.module.scss'

class ImageArticle extends Component {

  constructor(props) {
    super(props)
  }

  render = () => (
    <div className={styles.imageArticle}>

      <h3 className={styles.articleTag}>{`<${this.props.articleTitle}>`}</h3>

      <div className={styles.content}>
        <img src={this.props.imgSrc} alt={this.props.imgAlt}></img>
        {this.props.children}
      </div>

      <h3 className={styles.articleTag}>{`</${this.props.articleTitle}>`}</h3>

    </div>
  )
}
export default ImageArticle
