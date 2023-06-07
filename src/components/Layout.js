import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./all.sass";
import "./a_styles.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import { Link } from "gatsby";
import logoHor from "../img/logo-hor.svg";
import {CookieNotice} from "gatsby-cookie-notice";


const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  
  return (
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
        <meta property="og:description" content={description} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/logo_with_text.png`}
        />
      </Helmet>
      <Navbar />
      <section>
        <div className="container small-margin-container">
          <Link to="/" title="Logo">
            <img objectFit={"fill"} aspectratio={3 / 1} src={logoHor} alt="AOperat" className="mrb-logo" />
          </Link>
        </div>
      </section>
      <CookieNotice
        backgroundClasses="container cookie-consent-container is-background-primary-green"
        acceptButtonText="Akceptuję"
        declineButtonText="Odrzucam"
        buttonWrapperClasses= "mt-3"
        wrapperClasses="cookie-consent-buttons-wrapper cookie-notice"
        cookieListClasses="row cookie-list is-color-white"
        personalizeButtonClasses="mt-3 btn btn-lg btn-secondary mx-2"
        personalizeButtonText="Personalizuj"
        personalizeValidationText="Zapisz"
        cookies={[
                {name: 'necessary', editable: false, default: true, title: 'Niezbędne pliki cookie', text: 'Pliki niezbędne do poprawnego funkcjonowania strony.' },
                {name: 'gatsby-gdpr-google-analytics', editable: true, default: false, title: 'Google Analytics', text: 'Google Analytics to narzędzie statystyczne stworzone przez Google pozwalające na analizę ruchu sieciowego i sposobu korzystania z naszej strony.'},
                {name: 'gatsby-gdpr-linked-in', editable: true, default: false, title: 'LinkedIn', text: 'LinkedIn Insight Tag pozwala nam na skuteczniej dotrzeć do potencjalnych klientów.'},
                {name: 'gatsby-gdpr-facebook-pixel', editable: true, default: false, title: 'Facebook Pixel', text: 'Facebook Pixel pomaga nam w poprawianiu komfortu korzystania ze strony i udostępnia nam informacje w jaki sposób odwiedzający korzystają ze strony i jakie elementy przykuwają ich uwagę.'}
          ]}>
          <h3 className="is-color-white">Ta strona korzysta z plików cookies.</h3>
          <p className="is-color-white mt-3 mb-3">Ty wybierasz, z których plików cookie będziemy mogli korzystać. Korzystając z serwisu zgadzasz się na ich zapis i wykorzystanie plików cookie oraz akceptujesz politykę plików cookie. Więcej dowiesz się czytając rozdział Pliki cookies zawarty w Polityce Prywatności <Link to="/privacy-policy#cookie-section" className="mrb-button-link is-color-white">klikając tutaj</Link>. </p>
      </CookieNotice>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
