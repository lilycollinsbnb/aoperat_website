import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import "./a_styles.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfDkLoiAAAAAABFPw6VdtrulRrdMCCetoTu5W11">
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/logo.svg`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/logo.svg`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/logo.svg`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/logo.svg`}
          color="#ff4400"
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/logo_with_text.png`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
    </GoogleReCaptchaProvider>
  );
};

export default TemplateWrapper;
