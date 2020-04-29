import React from "react";
import {
  Tab,
  ControlIcon,
  Button,
  Pane,
  Text,
  Heading,
  Pill,
  Spinner,
  Position,
} from "evergreen-ui";

const NavBar = () => {
  const bgColor = "#FFF";
  const typoColor = "#435a6f";
  const styles = {
    navbar: {
      display: "flex",
      alignItems: "center",
      height: 56,
      borderBottom: "1px solid #E4E7EB",
      paddingLeft: 16,
      paddingRight: 16,
    },
    logo: {
      color: typoColor,
    },
    link: {
      color: "#425a70",
      textTransform: "uppercase",
      lineHeight: "16px",
      fontSize: "12px",
      padding: "10px 12px",
      marginRight: 8,
      height: 36,
      display: "inline-flex",
      alignItems: "center",
      letterSpacing: ".4px",
      borderRadius: 3,
      boxSizing: "border-box",
    },
  };
  //  style={styles.logoContainer} className="p-left"
  return (
    <Pane
      display="flex"
      padding={16}
      background={bgColor}
      elevation={1}
      height={56}
    >
      <Pane alignItems="center" display="flex">
        <ControlIcon color="info" marginRight={16} />
        <Heading size={400} style={styles.logo}>
          COVID DASH
        </Heading>
      </Pane>
      <Pane flex={1} alignItems="center" display="flex" marginLeft={24}>
        <Tab style={styles.link}>
          <a href="#">link</a>
        </Tab>
        <Tab style={styles.link}>
          <a href="#">Longer Link</a>
        </Tab>
        <Tab style={styles.link}>
          <a href="#">Get Started</a>
        </Tab>
      </Pane>
      <Pane alignItems="center" display="flex">
        <Tab style={styles.link}>
          <a href="#">Todo</a>
        </Tab>
      </Pane>
      {/* <SearchBar /> */}
      {/*<NavOptions typoColor={typoColor} />*/}
    </Pane>
  );
};

export default NavBar;
