import React, { Component } from "react"

import Layout from '../components/layout/layout'
import ImageArticle from '../components/image-article/image-article'

import idTechLogo from '../images/id-tech-logo.png'
import unosLogo from '../images/unos-logo.png'
import c1Logo from '../images/c1-logo.png'
import cnuLogo from '../images/cnu-logo.png'
import awsLogo from '../images/aws-logo.png'

import styles from './pages.module.scss'

class ExperiencePage extends Component {

  constructor(props) {
    super(props)
  }

  render = () => (
    <Layout largeHeader={false}>

      <ImageArticle
        articleTitle={`capital-one`}
        imgSrc={c1Logo}
        imgAlt={'capital one logo'}
        imgSize={`small`}>
        <h5 className={styles.smallMargin}>Titles</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>
            Senior Associate Software Engineer
          </li>
          <li className={styles.titleListItem}>
            Associate Software Engineer
          </li>
          <li className={styles.titleListItem}>
            Software Engineer in Training
          </li>
        </ul>

        <h5 className={styles.smallMargin}>Dates</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>
            2017-Current
          </li>
        </ul>

        <h5 className={styles.smallMargin}>Workplace</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>
            Capital One Finance is a Fortune 100 Company specializing in credit cards, auto financing, and banking.
          </li>
        </ul>

        <h5 className={styles.smallMargin}>Job Duties</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>
            <h5>Agile team member working with following technologies</h5>

            <p>Application monitoring, AWS Cloud infrastructure management,
              Angular, Node, Express, React, Python, Natural Language Processing,
              Machine Learning, Enterprise Architecture, Microservices, Streaming Data</p>
          </li>
        </ul>

      </ImageArticle>

      <ImageArticle
        articleTitle={`united-network-for-organ-sharing`}
        imgSrc={unosLogo}
        imgAlt={'united network for orgran sharing logo'}
        imgSize={`small`}>
        <h5 className={styles.smallMargin}>Titles</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>
            Software Engineering Contractor
          </li>
          <li className={styles.titleListItem}>
            Software Engineering Intern
          </li>
        </ul>

        <h5 className={styles.smallMargin}>Dates</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>
            2016-2017
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
            <h5>Agile team member working with following technologies</h5>

            <p>Kanban, C#, .Net, Web APIs, Visual Basic.Net, SQL</p>
          </li>
        </ul>
      </ImageArticle>

      <ImageArticle
        articleTitle={`id-tech-camps`}
        imgSrc={idTechLogo}
        imgAlt={'id tech logo'}
        imgSize={`small`}>

        <h5 className={styles.smallMargin}>Title</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>
            Instructor
          </li>
        </ul>

        <h5 className={styles.smallMargin}>Dates</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>
            2015
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

      <ImageArticle
        articleTitle={`education`}
        imgSrc={cnuLogo}
        imgAlt={'cnu'}
        imgSize={`small`}>

        <h5 className={styles.smallMargin}>Degrees</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>
            B.S. in Computer Science
          </li>
          <li className={styles.titleListItem}>
            B.S. in Computer Engineering
          </li>
        </ul>

        <h5 className={styles.smallMargin}>Dates</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>
            2012-2016
          </li>
        </ul>

        <h5 className={styles.smallMargin}>GPA</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>
            3.0
          </li>
        </ul>

      </ImageArticle>

      <ImageArticle
        articleTitle={`certifications`}
        imgSrc={awsLogo}
        imgAlt={'aws'}
        imgSize={`small`}>

        <h5 className={styles.smallMargin}>Cert</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>
            Solutions Architect Associate
          </li>
        </ul>

        <h5 className={styles.smallMargin}>Date</h5>
        <ul className={styles.titleList}>
          <li className={styles.titleListItem}>
            2018
          </li>
        </ul>

      </ImageArticle>
    </Layout>
  )
}

export default ExperiencePage
