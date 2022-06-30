import { useForm, ValidationError } from "@formspree/react";
import * as React from "react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("myykjpje");

  if (state.succeeded) {
    return <h4 style={{color:"green"}}>Wiadomość została wysłana!</h4>;
  }

  return (
    <div>
      <h1>Napisz do nas</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor={"name"}>
            Imię i nazwisko
          </label>
          <div className="control">
            <input
              className="input"
              type={"text"}
              name={"name"}
              id={"name"}
              required={true}
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor={"email"}>
            Adres email
          </label>
          <div className="control">
            <input
              className="input"
              type={"email"}
              name={"email"}
              id={"email"}
              required={true}
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor={"subject"}>
            Temat
          </label>
          <div className="control">
            <input
              className="input"
              type={"text"}
              name={"subject"}
              id={"subject"}
              required={true}
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor={"message"}>
            Treść wiadomości
          </label>
          <div className="control">
            <input
              className="textarea"
              type={"textarea"}
              name={"message"}
              id={"message"}
              required={true}
            />
          </div>
        </div>

        <div className="field">
          <button
            disabled={state.submitting}
            className="button is-link"
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
