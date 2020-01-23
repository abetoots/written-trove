import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "../styles/styles.scss";

import { rhythm } from "../utils/typography";
import Header from "./Header/Header";

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  console.log(rootPath);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main style={{ padding: `${rhythm(1 / 2)} ${rhythm(1)}` }}>
        {children}
      </main>
      <footer
        style={{
          color: "white",
          backgroundColor: "black",
          padding: `${rhythm(1 / 2)}`,
        }}
      >
        © writtentrove.com {new Date().getFullYear()}
      </footer>
    </>
  );
};

export default Layout;
