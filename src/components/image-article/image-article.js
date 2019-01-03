import React, { Component } from "react"

import styles from './image-article.module.scss'


class ImageArticle extends Component {

  constructor(props) {
    super(props)
  }

  imgClass(imgSize) {

    switch (imgSize) {
      case 'small':
        return styles.smallImg;
      case ('medium'):
        return styles.mediumImg;
      case ('large'):
        return styles.largeImg;
      default:
        return styles.mediumImg;
    }
  }

  render = () => (
    <div className={styles.imageArticle}>

      <h3 className={styles.articleTag}>{`<${this.props.articleTitle}>`}</h3>

      <div className={styles.content}>
      <img
          className={this.imgClass(this.props.imgSize)}
          src={this.props.imgSrc}
          alt={this.props.imgAlt}></img>

        {this.props.children}
      </div>

      <h3 className={styles.articleTag}>{`</${this.props.articleTitle}>`}</h3>

    </div>
  )
}
export default ImageArticle