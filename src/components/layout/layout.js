import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'
import Footer from '../footer/footer'

import text from '../../text-content'
import './layout.scss'

const Layout = ({ children, largeHeader }) => (
  <div>
    <Helmet
      title={ text.title }
      meta={[
        { name: 'description', content: text.description },
        { name: 'keywords', content: text.keywords },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Sidebar />
    <Header large={ largeHeader } />
    <div className={ "container" }>
      {children}
    </div>
    <Footer />
  </div>
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
