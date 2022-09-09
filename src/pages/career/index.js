import { Link } from 'gatsby';
import React from 'react'
import Layout from "../../components/Layout";

const liStyle = {
    fontSize: "20px"
}

function listItem (name, redirectTo) {

    return (
        <li style={liStyle}>
            <Link to={redirectTo}>
                {name}
            </Link>
        </li>
    )
}
  
const careers = [
    ["Rzeczoznawca", "/career/appraiser"],
    ["Sprzedawca", "/career/seller"],
    ["Prawnik", "/career/lawyer"]
]

export default function CareerPage () {
    return (<Layout>
        <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
                <div className="section">
                    <h2 className="title is-size-3 has-text-weight-bold is-bold-light">Kariera</h2>
                    <div className="column is-10 is-offset-1">
                        <ul style={{listStyleType: "disc"}}>
                            {careers.map(item => listItem(...item))}
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      </Layout>
    )
}

