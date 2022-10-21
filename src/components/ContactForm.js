import { useForm, ValidationError } from "@formspree/react";
import * as React from "react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("myykjpje");

  if (state.succeeded) {
    return <h4 style={{color:"green"}}>Wiadomość została wysłana!</h4>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field mt-3">
          <label className="label mrb-label-hidden" htmlFor={"name"}>
            Imię i nazwisko
          </label>
          <div className="control">
            <input
              className="input"
              type={"text"}
              name={"name"}
              id={"name"}
              placeholder={"Imię i nazwisko"}
              required={true}
            />
          </div>
        </div>

        <div className="field">
          <label className="label mrb-label-hidden" htmlFor={"email"}>
            Adres email
          </label>
          <div className="control">
            <input
              className="input"
              type={"email"}
              name={"email"}
              id={"email"}
              placeholder={"Adres email"}
              required={true}
            />
          </div>
        </div>

        <div className="field">
          <label className="label mrb-label-hidden" htmlFor={"subject"}>
            Temat
          </label>
          <div className="control">
            <input
              className="input"
              type={"text"}
              name={"subject"}
              id={"subject"}
              placeholder={"Temat"}
              required={true}
            />
          </div>
        </div>

        <div className="field">
          <label className="label mrb-label-hidden" htmlFor={"message"}>
            Treść wiadomości
          </label>
          <div className="control">
            <input
              className="textarea"
              type={"textarea"}
              name={"message"}
              id={"message"}
              placeholder={"Treść wiadomości"}
              required={true}
            />
          </div>
        </div>

        <div className="field mt-6">
          <button
            disabled={state.submitting}
            className="button is-fullwidth mrb-button mrb-button-light"
            type="submit"
          >
            Wyślij
          </button>
        </div>
        {state.succeeded && <p>Wiadomość została wysłana</p>}
        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
}
