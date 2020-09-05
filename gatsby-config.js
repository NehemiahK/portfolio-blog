module.exports = {
  siteMetadata: {
    title: `Nehemiah's Personal Site`,
    description: `A personal site and blog made by Nehemiah Kivelevitz`,
    author: `Nehemiah Kivelevitz`,
    siteUrl: `https://nehemiah.dev`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: "Abyss", // Or install your favorite theme from GitHub
            },
          },
          {
            resolve: `gatsby-remark-social-cards`,
            options: {
              title: {
                // This is the frontmatter field the title should come from
                field: "title",
                // Currently only supports DejaVuSansCondensed
                // More fonts coming soon!
                font: "DejaVuSansCondensed",
                color: "black", // black|white
                size: 48, // 16|24|32|48|64
                style: "bold", // normal|bold|italic
                x: null, // Will default to xMargin
                y: null, // Will default to yMargin
              },
              meta: {
                // The parts array is what generates the bottom text
                // Pass an array with strings and objects
                // The following array will generate:
                // "- Author Name » September 13"
                // The objects are used to pull data from your markdown's
                // frontmatter. { field: "author" } pulls the author set
                // in the frontmatter. { field: "category" } would pull
                // the category set. Any field can be used as parts
                // Note: Only pass the "format" property on date fields
                parts: [
                  "- ",
                  { field: "author" },
                  " » ",
                  { field: "date", format: "mmmm dS" },
                ],
                // Currently only supports DejaVuSansCondensed
                // More fonts coming soon!
                font: "DejaVuSansCondensed",
                color: "black", // black|white
                size: 24, // 16|24|32|48|64
                style: "normal", // normal|bold|italic
                x: null, // Will default to xMargin
                y: null, // Will default to cardHeight - yMargin - size
              },
              background: "#FFFFFF", // Background color for the card
              xMargin: 24, // Edge margin used when x value is not set
              yMargin: 24, // Edge margin used when y value is not set
            },
          },
        ],
      },
    },
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nehemiah's Site`,
        short_name: `Nehemiah`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `content/assets/n.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
