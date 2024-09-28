/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 const env = require("./config/environment");
 //for 0.9 priority
 const priorityPages = ["/marketing-launchpad/digital-marketing-course/"];

 module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
     `gatsby-plugin-react-helmet`,
     `gatsby-plugin-image`,
     `gatsby-plugin-sharp`,
     {
      resolve: "gatsby-plugin-robots-txt",
      options: {
       host: "https://www.kraftshala.com",
       sitemap: "https://www.kraftshala.com/sitemap/sitemap-0.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
         //  "UA-102655297-1", // Google Analytics / GA,
         //  "G-BGCZN1ZFJ7"
        ],
      },
    },

    {
      resolve: "gatsby-plugin-zopfli",
      options: {
        extensions: ["css", "html", "js", "svg"],
       },
     },
     {
      resolve:"gatsby-plugin-mdx",
      options:{
        extensions:[".mdx",".md"],
        mediaTypes: [`text/markdown`, `text/x-markdown`],
      }
    },
  ],
}