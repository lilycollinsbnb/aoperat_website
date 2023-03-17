import * as React from "react";

import Layout from "../../components/Layout";
import TrainingOfferList from "../../components/TrainingOfferList";


export default class TrainingIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section>
          <div className="container is-max-desktop mrb-container">
            <h1 className="has-text-weight-bold has-text-centered is-size-3-mobile is-size-2-tablet is-size-1-widescreen is-color-primary-green">
              Szkolenia
            </h1>
            <div className="pt-3">
              <TrainingOfferList />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
