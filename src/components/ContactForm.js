import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import React, { useState, useEffect, useCallback } from "react";

export default function ContactForm() {
  const [token, setToken] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false)

  const { executeRecaptcha } = useGoogleReCaptcha();
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    const newToken = await executeRecaptcha('submit');
    setToken(newToken)
  }, [executeRecaptcha]);

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSuccess(false)
    await handleReCaptchaVerify()
    const data = {
        name: name, 
        email: email, 
        subject: subject, 
        message: message,
        "g-recaptcha-response": token
    }
    const resp = await window.fetch("https://formspree.io/f/xleogrvq", {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
      })
    setSuccess(resp.status >= 200 && resp.status < 300)
  }

  useEffect(() => {
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
                onChange={e => setName(e.target.value) }
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
                onChange={e => setEmail(e.target.value) }
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
                onChange={e => setSubject(e.target.value) }
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
                onChange={e => setMessage(e.target.value) }
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
