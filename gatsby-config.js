module.exports = {
  siteMetadata: {
    title: 'Cameron Stinson',
    description: 'sometimes I code',
    siteUrl: `https://www.cameronstinson.com/`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'cameron-stinson-portfolio',
        short_name: 'csp',
        start_url: '/',
        background_color: '#40b4c4',
        theme_color: '#74dfc4',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-sass`
  ],
}
