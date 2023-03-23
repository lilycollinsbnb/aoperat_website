import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import React, { useState, useEffect, useCallback } from "react";

export default function TrainingParticipationForm ({title}) {
  const [email, setEmail] = useState("")
  const [acceptedTerms, setAcceptedTerms] = useState(false)
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
        name: title, 
        email: email, 
        subject: title, 
        message: `${email} wyraża zainteresowanie szkoleniem ${title}`,
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
          <div>
          Na podstawie art. 10 ust. 2 ustawy o świadczeniu usług drogą elektroniczną wyrażam zgodę na przekazywanie przez AOperat Prosta Spółka Akcyjna, na udostępniony przeze mnie adres e-mail informacji handlowych.
              <input
                className="checkbox"
                type={"checkbox"}
                name={"accepted-terms"}
                id={"accepted-terms"}
                style={{marginLeft:"6px"}}
                checked={acceptedTerms}
                onChange={e => {setAcceptedTerms(!acceptedTerms)} }
                required={true}
              />
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
