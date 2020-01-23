import Typography from "typography";
import Wordpress2016 from "typography-theme-wordpress-2016";

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  };
};
//no need, import google fonts/npm typefaces through gatsby-browser
delete Wordpress2016.googleFonts;
//lets override the font families, dont forget to add their typefaces in gatsby-browser
Wordpress2016.headerFontFamily = ["Montserrat", "Helvetica", "sans-serif"];
Wordpress2016.bodyFontFamily = ["Open Sans", "Helvetica", "sans-serif"];

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
