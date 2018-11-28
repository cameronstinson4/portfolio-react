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
        name: 'Cameron Stinson is Cool',
        short_name: 'CSP',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#40b4c4',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons',
          'roboto:300,400,500,700',
        ],
      },
    },
  ],
}
