import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "gatsby";

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [consentToContact, setConsentToContact] = useState(false)
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
          <div className="mt-6 checkbox-field">
            <input
                className="checkbox"
                type={"checkbox"}
                name={"consent-to-contact"}
                id={"consent-to-contact"}
                checked={consentToContact}
                onChange={e => {setConsentToContact(!consentToContact)} }
                required={true}
                
              />
            <label htmlFor="consent-to-contact">Na podstawie art. 10 ust. 2 ustawy o świadczeniu usług drogą elektroniczną wyrażam zgodę na przekazywanie przez AOperat Prosta Spółka Akcyjna, na udostępniony przeze mnie adres e-mail informacji handlowych.</label>
          </div>
          <div className="checkbox-field">
            <input
                className="checkbox"
                type={"checkbox"}
                name={"accepted-terms"}
                id={"accepted-terms"}
                checked={acceptedTerms}
                onChange={e => {setAcceptedTerms(!acceptedTerms)} }
                required={true}
                
              />
            <label htmlFor="accepted-terms">Oświadczam, że zapoznałem(am), się z treścią Regulaminu oraz Polityki Prywatności i akcęptuję zawarte w nich postanowienia.</label>
          </div>
          <div className="mrb-text-div mt-6">
            Przed wyrażeniem zgody prosimy o zapoznanie się z <Link to="/terms-and-conditions">Regulaminem</Link> i <Link to="/privacy-policy">Polityką Prywantości</Link>. Wyrażenie zgody na kontakt drogą mailową i zaakceptowanie postanowień Polityki Prywatności oraz Regulaminu jest dobrowolne ale niezbędne do tego abyśmy mogli się z Tobą skontaktować. Zgodę można w każdej chwili cofnąć kontaktując się z Administratorem Danych Osobwych wskazanym w <Link to="/privacy-policy">Polityce Prywantości</Link>. 
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
