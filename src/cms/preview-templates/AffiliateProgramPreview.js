import React from 'react'
import PropTypes from 'prop-types'
import { AffiliateProgramPageTemplate } from '../../templates/affiliate-program-page';

const AffiliateProgamPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();
  return (
    <AffiliateProgramPageTemplate
      title={data.title}
      subtitle={data.subtitle}
      content={widgetFor('body')}
    />
  )


}

AffiliateProgamPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default AffiliateProgamPagePreview
