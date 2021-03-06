module.exports = {
  siteMetadata: {
    title: `Written Trove`,
    author: `Abe Suni M. Caymo`,
    description: `The treasure trove for internet's collection of easter eggs, tutorials, guides, and many more. A beautiful mess.`,
    siteUrl: `https://writtentrove.com/`,
    pinterestVerification: "2f2d089c41b8102651e1a4241ac84284",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1440,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WrittenTrove`,
        short_name: `Trove`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#15dfbc`,
        display: `minimal-ui`,
        icon: `content/assets/writtentrove-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        //only variables and mixins to avoid duplicating
        data: `
            @import "./src/styles/util/variables";
            @import "./src/styles/tools/functions";
            @import "./src/styles/tools/mixins";
            `,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-125033716-5",
      },
    },
  ],
};
