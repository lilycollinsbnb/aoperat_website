import React from 'react'
import CareerOfferList from '../../components/CareerOfferList';
import Layout from "../../components/Layout";

export default function CareerPage () {
    return (
      <Layout>
        <section>
          <div className="container is-max-desktop mrb-container">
            <span className="has-text-weight-semibold has-text-centered mrb-label">DOŁĄCZ DO NAS</span>
            <h1 className="has-text-weight-bold has-text-centered is-size-3-mobile is-size-2-tablet is-size-1-widescreen is-color-primary-green">
              Kariera
            </h1>
            <div className="pt-3">
              <CareerOfferList />
            </div>
          </div>
        </section>
      </Layout>
    )
}

