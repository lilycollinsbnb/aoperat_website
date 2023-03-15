import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import React, { useState, useEffect, useCallback } from "react";

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false)

  const { executeRecaptcha } = useGoogleReCaptcha();
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      return;
    }
    const token = await executeRecaptcha('submit');

    return token;
  }, [executeRecaptcha]);

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSuccess(false)
    const token = await handleReCaptchaVerify()

    const data = {
        name: name, 
        email: email, 
        subject: subject, 
        message: message,
        "g-recaptcha-response": token
    }

    const resp = await window.fetch(`https://formspree.io/f/${process.env.GATSBY_FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
      })
    setSuccess(resp.status >= 200 && resp.status < 300)
  }

  useEffect( () => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);
    
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
                onChange={e => {e.preventDefault(); setName(e.target.value)} }
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
                onChange={e => {e.preventDefault(); setEmail(e.target.value)} }
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
                onChange={e => {e.preventDefault(); setSubject(e.target.value)} }
                required={true}
              />
            </div>
          </div>

          <div className="field">
            <label className="label mrb-label-hidden" htmlFor={"message"}>
              Treść wiadomości
            </label>
            <div className="control">
              <textarea
                className="mrb-textarea textarea"
                name={"message"}
                id={"message"}
                placeholder={"Treść wiadomości"}
                onChange={e => {e.preventDefault(); setMessage(e.target.value)} }
                required={true}
              />
            </div>
          </div>

          <div className="field mt-6">
            <button
              className="button is-fullwidth mrb-button mrb-button-light"
              type="submit"
            >
              Wyślij
            </button>
            { success && 
              <p className="is-color-primary-green">Wiadomość została wysłana</p>
            }
          </div>
        </form>
    </div>
  );
}
