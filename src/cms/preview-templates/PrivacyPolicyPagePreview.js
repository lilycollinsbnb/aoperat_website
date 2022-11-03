import React from 'react'
import PropTypes from 'prop-types'
import { PrivacyPolicyPageTemplate } from '../../templates/privacy-policy-page'

const PrivacyPolicyPagePreview = ({ entry, widgetFor }) => {
  return (
    <PrivacyPolicyPageTemplate
        title={entry.getIn(['data','title'])}
        content={widgetFor('body')}
    />
  )


}

PrivacyPolicyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PrivacyPolicyPagePreview
