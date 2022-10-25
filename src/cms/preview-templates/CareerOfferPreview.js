import React from 'react'
import PropTypes from 'prop-types'
import { CareerOfferTemplate } from '../../templates/career-offer'

const CareerOfferPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <CareerOfferTemplate
        title={data.title}
        typeOfContract={data.typeOfContract || [] }
        vacancy={data.vacancy || [] }
        responsibilities={data.responsibilities || null }
        requirements={data.requirements || null }
        whatWeOffer={data.whatWeOffer || null}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

CareerOfferPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CareerOfferPreview
