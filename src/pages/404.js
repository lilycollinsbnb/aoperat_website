import * as React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <section>
      <div className="container is-max-desktop mrb-container">
        <h1 className="has-text-weight-bold has-text-centered is-size-3-mobile is-size-2-tablet is-size-1-widescreen is-color-primary-green">
          Błąd 404 - nie znaleziono
        </h1>
        <p className="has-text-centered" style={{fontSize:"16px", marginTop:"10px"}}>Podstrona nie istnieje lub została usunięta.</p>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
