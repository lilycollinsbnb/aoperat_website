import React from 'react'
import PropTypes from 'prop-types'
import { TermsAndConditionsPageTemplate } from '../../templates/terms-and-conditions-page'

const TermsAndConditionsPagePreview = ({ entry, widgetFor }) => {
  return (
    <TermsAndConditionsPageTemplate
        title={entry.getIn(['data','title'])}
        content={widgetFor('body')}
    />
  )


}

TermsAndConditionsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TermsAndConditionsPagePreview
