import React from "react";
import { Link, graphql } from "gatsby";
import "./index.scss";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        mainStyle={{ padding: `${rhythm(1 / 2)} ${rhythm(1)}` }}
      >
        <SEO title="All posts" />
        <div className="Home">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            let image;
            if (node.frontmatter.featured && node.frontmatter.altText) {
              image = (
                <div>
                  <img
                    src={node.frontmatter.featured.childImageSharp.fluid.src}
                    alt={node.frontmatter.altText}
                  />
                </div>
              );
            }
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  {image}
                  <small>
                    <strong>{node.frontmatter.date}</strong>
                  </small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
            );
          })}
        </div>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            altText
            featured {
              childImageSharp {
                fluid(quality: 100, maxWidth: 500) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
