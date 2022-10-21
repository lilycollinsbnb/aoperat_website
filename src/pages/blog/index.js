import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section>
          <div className="container is-fullhd mrb-container">
            <span className="has-text-weight-semibold has-text-centered mrb-label">BĄDŹ Z NAMI NA BIEŻĄCO</span>
            <h1 className="has-text-weight-bold has-text-centered is-size-3-mobile is-size-2-tablet is-size-1-widescreen is-color-primary-green">
              Aktualności
            </h1>
            <div className="pt-3">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
