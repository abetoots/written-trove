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

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main style={props.mainStyle}>{children}</main>
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
