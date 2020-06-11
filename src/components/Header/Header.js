import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState, useRef } from "react";
import "./Header.scss";

import { defaultMenu } from "../../utils/menus";
import { rhythm } from "../../utils/typography";

import Logo from "../Logo/Logo";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Menu from "../Menu/Menu";

import logo from "../../../content/assets/writtentrove-logo.svg";

const Header = props => {
  const [menuToggled, setMenuToggled] = useState(false);

  const targetElToDisplay = useRef(null);
  const target = useRef(null);

  const linklist = defaultMenu;

  const menuClickHandler = e => {
    if (targetElToDisplay === null) {
      console.log("target not found");
      return;
    }
    let wrapperHeight = target.current.getBoundingClientRect().height;
    let targetheight = targetElToDisplay.current.clientHeight;
    if (targetheight > 0) {
      targetElToDisplay.current.style.height = 0;
      targetElToDisplay.current.style.visibility = "hidden";
    } else {
      targetElToDisplay.current.style.height = `${wrapperHeight}px`;
      targetElToDisplay.current.style.visibility = "initial";
    }

    setMenuToggled(prev => !prev);
  };
  return (
    <>
      <header className="Header" style={{ padding: rhythm(1 / 4) }}>
        <div className="Header__slot -heading">
          <div>
            <BurgerMenu handleClick={menuClickHandler} toggled={menuToggled} />
          </div>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <Logo src={logo} alt={`${props.siteTitle} logo`} />
          </Link>
        </div>
      </header>
      <div ref={targetElToDisplay} className="Header__slot -clickTarget">
        <div ref={target}>
          <Menu linklist={linklist} toggled={menuToggled} />
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
