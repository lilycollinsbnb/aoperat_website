import React from "react"
import Popup from 'reactjs-popup';
import { Link } from "gatsby";
import 'reactjs-popup/dist/index.css';

export default function FreeTrialPopup () {

    const handleSubmit = async (event) => {
        event.preventDefault()
    }

    return (
        <Popup 
            contentStyle={{minWidth: "300px", maxHeight: "600px", overflow: "auto", borderRadius: "15px", zIndex: "200000", padding: "0px"}} 
            overlayStyle={{zIndex: "20000"}}
            defaultOpen={true} 
            modal
            closeOnDocumentClick={false}
        >
      { close => (
        <div className="popup-content-div">
          <div className="logo-wrapper">
            <img className="popup-logo mt-3" src="../img/logo.svg" alt="" />
          </div>
          <button className="popup-close-button" type="button"  onClick={close} >
            &times;
          </button>
          <div className="popup-form-wrapper">
            <div className="center-content is-medium-large-font mt-5">
              Chesz uzyskać możliwość <b>darmowego</b> używania platformy AOperat przez <b>3 miesiące</b>? Zostaw swój adres mailowy.
            </div>
            <div className="center-content mt-3">
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
                        // onChange={e => {e.preventDefault(); setEmail(e.target.value)} }
                        required={true}
                      />
                    </div>
                </div>
                <div className="mt-5 checkbox-field">
                  <input
                      className="checkbox mr-3"
                      type={"checkbox"}
                      name={"consent-to-contact"}
                      id={"consent-to-contact"}
                      // checked={consentToContact}
                      // onChange={e => {setConsentToContact(!consentToContact)} }
                      required={true}
                      
                    />
                  <label htmlFor="consent-to-contact" className="center-content is-small-font-2">Na podstawie art. 10 ust. 2 ustawy o świadczeniu usług drogą elektroniczną wyrażam zgodę na przekazywanie przez AOperat Prosta Spółka Akcyjna, na udostępniony przeze mnie adres e-mail informacji handlowych.</label>
                </div>
                <button type="submit" style={{width: "100%"}} className="mt-5 has-text-weight-bold button mrb-button mrb-button-dark">ZAPISZ MNIE</button>
                
                <div className="mrb-text-div is-small-font mt-3 mb-3">
                  Przed wyrażeniem zgody prosimy o zapoznanie się z <Link to="/terms-and-conditions">Regulaminem</Link> i <Link to="/privacy-policy">Polityką Prywantości</Link>. Wyrażenie zgody na kontakt drogą mailową i zaakceptowanie postanowień Polityki Prywatności oraz Regulaminu jest dobrowolne ale niezbędne do tego abyśmy mogli się z Tobą skontaktować. Zgodę można w każdej chwili cofnąć kontaktując się z Administratorem Danych Osobwych wskazanym w <Link to="/privacy-policy">Polityce Prywantości</Link>. 
                </div>
               
              </form>
            </div>
          </div>
        </div>
      )}
      </Popup>
    )
}