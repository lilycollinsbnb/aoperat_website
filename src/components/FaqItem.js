import React from "react";

const FaqItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
}) => (
  <div className="mrb-faq-question" key={item.question}>
    <div>
      <button
        aria-expanded={ariaExpanded}
        aria-controls={`faq${index + 1}_desc`}
        data-qa="mrb-faq-question-button"
        className={`mrb-faq-question-button is-size-6 ${fontWeightBold}`}
        onClick={onClick}
      >
        {item.question}
      </button>
    </div>
    <div>
      <p
        id={`faq${index + 1}_desc`}
        data-qa="mrb-faq-desc"
        className={`mrb-faq-desc ${showDescription}`}
      >
        {item.answer}
      </p>
    </div>
  </div>
);

export default FaqItem;