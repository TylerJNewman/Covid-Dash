import React from "react";
import { Helmet } from "react-helmet";

const description = "Covid Dash is  a dashboard to view latest COVID data";

const TemplateWrapper = ({ children }) => {
  return (
    <React.Fragment>
      <Helmet>
        {/* Fallback properties */}
        <title>Evergreen</title>
        <meta name="description" content={description} />
        <meta property="og:title" content="COVID DASH" />
        {/* <meta property="og:url" content={absolutePath()} /> */}
        <meta property="og:description" content={description} />
        {/* <meta property="og:image" content={absolutePath("/og-image.png")} /> */}

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:description" content={description} />
        <meta name="twitter:creator" content="@Tylerjnewman" />
        {/* <meta
          property="twitter:image"
          content={absolutePath("/twitter-og.png")}
        /> */}
      </Helmet>
      {children}
    </React.Fragment>
  );
};

export default TemplateWrapper;
