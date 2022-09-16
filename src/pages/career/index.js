import React from 'react'
import CareerOfferList from '../../components/CareerOfferList';
import Layout from "../../components/Layout";

export default function CareerPage () {
    return (<Layout>
        <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
                <div className="section">
                    <h2 className="title is-size-3 has-text-weight-bold is-bold-light">Kariera</h2>
                    <div className="column is-10 is-offset-1">
                        <CareerOfferList />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      </Layout>
    )
}

