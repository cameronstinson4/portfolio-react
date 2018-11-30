import React, { Component } from "react"

import Layout from '../components/layout/layout'
import ImageArticle from '../components/image-article/image-article'

import idTechLogo from '../images/id-tech-logo.png'
import unosLogo from '../images/unos-logo.png'
import c1Logo from '../images/c1-logo.png'

import styles from './pages.module.scss'

class ExperiencePage extends Component {

  constructor(props) {
    super(props)
  }

  render = () => (
    <Layout largeHeader={false}>
      <h1>Experience</h1>

      <ImageArticle
        articleTitle={`capital-one`}
        imgSrc={c1Logo}
        imgAlt={'a'}
        smallImage={true}>
        <h5 className={styles.smallMargin}>Titles</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>
            Associate Software Engineer
          </li>
          <li className={styles.titleListItem}>
            Software Engineer in Training
          </li>
        </ul>

        <h5 className={styles.smallMargin}>Workplace</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>
            Capital One
          </li>
        </ul>

        <h5 className={styles.smallMargin}>Job Duties</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}> 

          </li>
        </ul>

      </ImageArticle>

      <ImageArticle
        articleTitle={`united-network-for-organ-sharing`}
        imgSrc={unosLogo}
        imgAlt={'a'}
        smallImage={true}>
        <h5 className={styles.smallMargin}>Titles</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>
            Software Engineering Contractor
          </li>
          <li className={styles.titleListItem}>
            Software Engineering Intern
          </li>
        </ul>

        <h5 className={styles.smallMargin}>Workplace</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>
            UNOS is a nonprofit organization which coordinates all U.S. organ transplant activities.
          </li>
        </ul>

        <h5 className={styles.smallMargin}>Job Duties</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>

          </li>
        </ul>
      </ImageArticle>

      <ImageArticle
        articleTitle={`id-tech-camps`}
        imgSrc={idTechLogo}
        imgAlt={'a'}
        smallImage={true}>

        <h5 className={styles.smallMargin}>Title</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>
            Instructor
          </li>
        </ul>

        <h5 className={styles.smallMargin}>Workplace</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>
            iDTech is an overnight summer technology camp for kids.
          </li>
        </ul>

        <h5 className={styles.smallMargin}>Job Duties</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>
            Teaching a class of eight children aged 13-17 programming in C++ and Java
          </li>

          <li className={styles.titleListItem}>
            Writing weekly diplomas for each child
          </li>

          <li className={styles.titleListItem}>
            Supervising children aged 8-17, 7am-11pm
          </li>

          <li className={styles.titleListItem}>
            Leading a weekly presentation for parents
          </li>
        </ul>

      </ImageArticle>
    </Layout>
  )
}

export default ExperiencePage
