import React from 'react'
import PropTypes from 'prop-types'
import {  TrainingsTemplate } from '../../templates/product-page'

const TrainingsPreview = ({ entry, getAsset, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <TrainingsTemplate
                pageTitle={data.pageTitle}
                subheading={data.subheading}
                image={getAsset(data.image)}
                contentSectionTitle={data.contentSectionTitle}
                content={widgetFor('body')} 
            />
        )
      } else {
        return <div>Loading...</div>
      }
}

 TrainingsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default TrainingsPreview