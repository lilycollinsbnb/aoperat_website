import React from 'react'
import Layout from "../../components/Layout";

export default function FaqPage() {
    return (<Layout>
        <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">FAQ</h2>
                
                <div style={{marginBottom:"10px"}}>
                  <h2 className="is-size-5 has-text-weight-bold is-bold-light">1. Ile operat kosztuje</h2>
                  <p>Cena operatu jest ustalana indywidualnie z rzeczoznawca.</p>
                </div>

                <div style={{marginBottom:"10px"}}>
                  <h2 className="is-size-5 has-text-weight-bold is-bold-light">2. Na czyje konto mam dokonać platności</h2>
                  <p>Proszę dokonać platności na kotno rzeczoznawcy</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      </Layout>
    )
}
  