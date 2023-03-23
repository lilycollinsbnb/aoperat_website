import React from 'react'
import PropTypes from 'prop-types'
import { TrainingOfferTemplate } from '../../templates/training-offer'

const TrainingOfferPostPreview = ({ entry, getAsset, widgetFor }) => {
  const image = entry.getIn(['data', 'image'])

  return (
    <TrainingOfferTemplate
      content={widgetFor('body')}
      image={getAsset(image)}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

TrainingOfferPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default TrainingOfferPostPreview;
