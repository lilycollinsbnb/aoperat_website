import React from "react";

import icon1 from "../img/icons/01_klienci_komornicy.svg";
import icon2 from "../img/icons/02_klienci_banki.svg";
import icon3 from "../img/icons/03_klienci_spadkobiercy.svg";
import icon4 from "../img/icons/04_klienci_deweloperzy.svg";
import icon5 from "../img/icons/05_klienci_spolki.svg";
import icon6 from "../img/icons/06_klienci_gddkia.svg";
import icon7 from "../img/icons/07_klienci_ubezpieczyciele.svg";
import icon8 from "../img/icons/08_klienci_sady.svg";
import icon9 from "../img/icons/09_klienci_gminy.svg";
import icon10 from "../img/icons/010_klienci_urzad_skarbowy.svg";
  
export default function ClientsSection(props) {

  return (
    <section>
      <div className="container is-fullhd mrb-container">
        <h2 className="has-text-weight-semibold has-text-centered is-size-4-mobile is-size-3-tablet is-size-2-widescreen is-color-primary-green">
          Nasi klienci
        </h2>
        <div className="columns is-multiline is-variable is-8 mrb-columns-wrapper">
          <div className="column is-flex is-full-mobile is-half-tablet is-one-third-desktop mt-5">
            <div className="pr-5">                 
              <img
                src={icon1}
                alt="Komornicy"
                style={{ minWidth: "50px", width: "50px", height: "50px" }}
              />
            </div>
            <div>
              <h3 className="has-text-weight-semibold is-size-4">Komornicy</h3>
              <p className="mt-1">Dla licytacji</p>
            </div>
          </div>
          <div className="column is-flex is-full-mobile is-half-tablet is-one-third-desktop mt-5">
            <div className="pr-5">                 
              <img
                src={icon2}
                alt="Komornicy"
                style={{ minWidth: "50px", width: "50px", height: "50px" }}
              />
            </div>
            <div>
              <h3 className="has-text-weight-semibold is-size-4">Banki</h3>
              <p className="mt-1">Na kredyt hipoteczny</p>
            </div>
          </div>
          <div className="column is-flex is-full-mobile is-half-tablet is-one-third-desktop mt-5">
            <div className="pr-5">                 
              <img
                src={icon3}
                alt="Komornicy"
                style={{ minWidth: "50px", width: "50px", height: "50px" }}
              />
            </div>
            <div>
              <h3 className="has-text-weight-semibold is-size-4">Spadkobiercy</h3>
              <p className="mt-1">Na określenie wysokości spadku</p>
            </div>
          </div>
          <div className="column is-flex is-full-mobile is-half-tablet is-one-third-desktop mt-5">
            <div className="pr-5">                 
              <img
                src={icon4}
                alt="Komornicy"
                style={{ minWidth: "50px", width: "50px", height: "50px" }}
              />
            </div>
            <div>
              <h3 className="has-text-weight-semibold is-size-4">Deweloperzy</h3>
              <p className="mt-1">Do uzyskania kredytowania</p>
            </div>
          </div>
          <div className="column is-flex is-full-mobile is-half-tablet is-one-third-desktop mt-5">
            <div className="pr-5">                 
              <img
                src={icon5}
                alt="Komornicy"
                style={{ minWidth: "50px", width: "50px", height: "50px" }}
              />
            </div>
            <div>
              <h3 className="has-text-weight-semibold is-size-4">Spółki</h3>
              <p className="mt-1">Na wniesienie nieruchomości aportem</p>
            </div>
          </div>
          <div className="column is-flex is-full-mobile is-half-tablet is-one-third-desktop mt-5">
            <div className="pr-5">                 
              <img
                src={icon6}
                alt="Komornicy"
                style={{ minWidth: "50px", width: "50px", height: "50px" }}
              />
            </div>
            <div>
              <h3 className="has-text-weight-semibold is-size-4">GDDKIA</h3>
              <p className="mt-1">Inwestycje liniowe pod drogi</p>
            </div>
          </div>
          <div className="column is-flex is-full-mobile is-half-tablet is-one-third-desktop mt-5">
            <div className="pr-5">                 
              <img
                src={icon7}
                alt="Komornicy"
                style={{ minWidth: "50px", width: "50px", height: "50px" }}
              />
            </div>
            <div>
              <h3 className="has-text-weight-semibold is-size-4">Ubezpieczyciele</h3>
              <p className="mt-1">Na polisę ubezpieczeniową</p>
            </div>
          </div>
          <div className="column is-flex is-full-mobile is-half-tablet is-one-third-desktop mt-5">
            <div className="pr-5">                 
              <img
                src={icon8}
                alt="Komornicy"
                style={{ minWidth: "50px", width: "50px", height: "50px" }}
              />
            </div>
            <div>
              <h3 className="has-text-weight-semibold is-size-4">Sądy</h3>
              <p className="mt-1">W postępowaniu sądowym</p>
            </div>
          </div>
          <div className="column is-flex is-full-mobile is-half-tablet is-one-third-desktop mt-5">
            <div className="pr-5">                 
              <img
                src={icon9}
                alt="Komornicy"
                style={{ minWidth: "50px", width: "50px", height: "50px" }}
              />
            </div>
            <div>
              <h3 className="has-text-weight-semibold is-size-4">Gminy</h3>
              <p className="mt-1">Na określenie opłat z dzierżawy wieczystej</p>
            </div>
          </div>
          <div className="column is-flex is-full-mobile is-half-tablet is-one-third-desktop mt-5">
            <div className="pr-5">                 
              <img
                src={icon10}
                alt="Komornicy"
                style={{ minWidth: "50px", width: "50px", height: "50px" }}
              />
            </div>
            <div>
              <h3 className="has-text-weight-semibold is-size-4">Urząd Skarbowy</h3>
              <p className="mt-1">Kontrola wysokości podatków</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}