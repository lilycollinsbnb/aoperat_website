import React from 'react'
import PropTypes from 'prop-types'
import { CareerOfferTemplate } from '../../templates/career-offer'

const CareerOfferPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <CareerOfferTemplate
        title={data.title}
        typesOfContract={data.typesOfContract || [] }
        workingTime={data.workingTime || [] }
        responsibilities={data.responsibilities || [] }
        requirements={data.requirements || [] }
        whatWeOffer={data.whatWeOffer || []}
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
