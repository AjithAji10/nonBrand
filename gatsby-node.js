const path = require('path');
const cheerio = require('cheerio');

exports.createPages = async function ({page, actions, graphql }) {
 

  const glossaries = await graphql(`
  query MyQuery {
    allMdx(filter: {frontmatter: {type: {eq: "glossary"}}}) {
      edges {
        node {
          frontmatter{
            id
            title
            gPath
            date
            description
            thumbnail
            type
            link
          }
          body
        }
      }
    }
  }  
  `)

  const wpblog = await graphql(`
  query MyQuery1 {
  allWpPost(sort: {fields: [date]}) {
      edges {
        node {
          title
          excerpt
          slug
          toc
          date(formatString: "MM-DD-YYYY")
          author {
            node {
              name
            }
          }
        }
      }
    }
  }
  `)

  glossaries.data.allMdx.edges.forEach(edge => {
    const slug = edge.node.slug;
    const urlPath = edge.node.frontmatter.gPath;

    console.log("urlPath glossary: " + JSON.stringify(urlPath));
    actions.createPage({
      path: `marketing-glossary/${urlPath}/`,
      component: path.resolve(`./src/pages/marketing-glossary/index.jsx`),
      context: {
        pagePath: `marketing-glossary/${urlPath}/`
      },
    })
  })

  wpblog.data.allWpPost.edges.forEach(edge => {
    
    const slug = edge.node.slug;

    console.log(slug);
    actions.createPage({
      path: `blog/${slug}/`,
      component: path.resolve(`./src/pages/wp-blog/blog-post.jsx`),
      context: {
        slug: slug
      },
    })
  })


  
}


exports.onCreatePage = async({page, actions}) => {
  const { createPage } = actions;

  if(page.path.match(/^\/kraftshala-live/)) {
    actions.createPage({
      path:"/kraftshala-live/register",
      matchPath: "/kraftshala-live/register/:id",
      component: path.resolve("src/pages/kraftshala-live/register/index.js")
    })
  }

  if(page.path.match(/^\/kraftshala-live/)) {
    actions.createPage({
      path:"/kraftshala-live/join",
      matchPath: "/kraftshala-live/join/:id",
      component: path.resolve("src/pages/kraftshala-live/join/index.jsx")
    })
  }
  if(page.path.match(/^\/marketing-launchpad/)) {
    actions.createPage({
      path:"/marketing-launchpad/digital-marketing-course/screening-test",
      matchPath: "/marketing-launchpad/digital-marketing-course/screening-test/:test_id/:lead_id",
      component: path.resolve("src/pages/screening-test/index.jsx")
    })
  }
  if(page.path.match(/^\/marketing-launchpad/)) {
    actions.createPage({
      path:"/marketing-launchpad/screening-test",
      matchPath: "/marketing-launchpad/screening-test/:test_id/:lead_id",
      component: path.resolve("src/pages/screening-test/index.jsx")
    })
  }
}

// code to add Table of contents

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions;
  createFieldExtension({
    name: "content",
    extend: extendContentField,
  });

  const typeDefs = `
    type WpPost implements Node {
      toc: JSON
      content: String @content
    }
  `;
  createTypes(typeDefs);
};

exports.createResolvers = ({ createResolvers, schema }) =>
  createResolvers({
    WpPost: {
      toc: {
        resolve: createTableOfContents,
      },
    },
  });

  async function createTableOfContents(source, args, context, info) {
    const $ = cheerio.load(source.content)
    const titles = $('h2,h3,h4,h5')
    const getUniqueId = UniqueId()
  
    const headings = Array.from(titles).map(title => {
      const depth = parseInt($(title).prop('tagName').substr(1), 10)
      const id = createId($, title)
      return { url: `#${getUniqueId(id)}`, title: $(title).text(), depth }
    })
  
    const reduced = groupHeadings(0, [], headings)
    return { items: reduced }
  }

  function extendContentField(options, prevFieldConfig) {
    return {
      resolve(source) {
        const $ = cheerio.load(source.content || ''); // Ensure content is not null
        const titles = $('h2, h3, h4, h5');
        const getUniqueId = UniqueId();
  
        titles.each((_, title) => {
          const id = createId($, title);
          $(title).attr('id', getUniqueId(id));
        });
  
        return $.html(); // Return the modified HTML content
      },
    };
  }

  function createId($, title) {
    let id = $(title).attr('id')
  
    if (!id) {
      id = $(title)
        .text()
        .toLowerCase()
        .replace(/[^a-z_0-9]+/gi, '-')
        .replace(/-+/g, '-')
    }
  
    return id
  }

  function UniqueId() {
    const tempMap = {}
    return el => {
      if (tempMap[el]) {
        tempMap[el] = tempMap[el] + 1
        const result = `${el}-${tempMap[el]}`
        tempMap[result] = 1
        return result
      } else {
        tempMap[el] = 1
        return el
      }
    }
  }

  function groupHeadings(index, grouping, headings) {
    if (index < headings.length) {
      const nextHeading = headings[index]
  
      if (grouping.length) {
        const prevHeading = grouping.slice().pop()
  
        try {
          if (nextHeading.depth > prevHeading.depth) {
            prevHeading.items = prevHeading.items || []
            return groupHeadings(index, prevHeading.items, headings)
          } else if (nextHeading.depth == prevHeading.depth) {
            grouping.push({ ...nextHeading })
            return groupHeadings(++index, grouping, headings)
          } else {
            throw { index: index, heading: nextHeading }
          }
        } catch (higherHeading) {
          if (higherHeading.heading.depth == prevHeading.depth) {
            grouping.push({ ...higherHeading.heading })
            return groupHeadings(++higherHeading.index, grouping, headings)
          } else {
            throw higherHeading
          }
        }
      } else {
        grouping.push({ ...nextHeading })
        groupHeadings(++index, grouping, headings)
      }
    }
  
    return grouping
  }

  //end of table of contents code
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	actions.setWebpackConfig({
		module: {
			rules: [
				{
					test: /\.node$/,
					use: ["node-loader"],
				},
			],
		},
	});
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-pdf/, 
            use: loaders.null(),
          },
        ],
      },
    })
  }
};
