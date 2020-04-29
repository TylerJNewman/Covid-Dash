import React from "react";

const styles = {
  /* width: 620px; */
  marginLeft: "auto",
  marginRight: "auto",
  width: 1024,
  paddingLeft: 24,
  paddingRight: 24,
  margin: "0 auto 160px",
  minHeight: "100vh",

  // & header {
  //   marginTop: 40,
  //   marginBottom: 40,
  // }

  // & h2 {
  //   marginBottom: 8,
  //   fontSize: 32,
  // }
};

const Container = ({ children }) => {
  return <div style={styles}>{children}</div>;
};

export default Container;
