import React from "react";
import { Link } from "gatsby";
import logoHor from "../img/logo-hor.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container is-fullhd mrb-navbar-container">
          <div className="navbar-brand">
            {/* <Link to="/" className="navbar-item" title="Logo">
              <img src={logoHor} alt="AOperat" style={{ width: "100px" }} className="mrb-logo" />
            </Link> */}
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item is-size-6" to="/about">
                O Nas
              </Link>
              <Link className="navbar-item is-size-6" to="/product">
                O Produkcie
              </Link>
              <Link className="navbar-item is-size-6" to="/blog">
                Aktualności
              </Link>
              <Link className="navbar-item is-size-6" to="/contact">
                Kontakt
              </Link>
              <Link className="navbar-item is-size-6" to="/career">
                Kariera
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="button mrb-button mrb-button-light"
                href="https://panel2.aoperat.pl/start"
                target="_blank"
                rel="noopener noreferrer"
              >
               Przejdź do portalu
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
