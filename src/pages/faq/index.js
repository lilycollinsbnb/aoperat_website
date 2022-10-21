import React from 'react';
import Layout from "../../components/Layout";
import FaqWrapper from "../../components/FaqWrapper";

const questionsAnswers = [
  {
    question: "Ile operat kosztuje",
    answer: "Cena operatu jest ustalana indywidualnie z rzeczoznawca.",
  },
  {
    question: "Na czyje konto mam dokonać platności",
    answer: "Proszę dokonać platności na konto rzeczoznawcy.",
  }
];

export default function FaqPage() {
    return (<Layout>
      <section>
        <div className="container is-fullhd mrb-container">
          <span className="has-text-weight-semibold mrb-label">ODPOWIEDZI NA TWOJE PYTANIA</span>
          <h1 className="has-text-weight-semibold is-size-4-mobile is-size-3-tablet is-size-2-widescreen is-color-primary-green is-max-width-1">
            Często zadawane pytania
          </h1>
          <FaqWrapper questionsAnswers={questionsAnswers} />
        </div>
      </section>
    </Layout>
    )
}
  