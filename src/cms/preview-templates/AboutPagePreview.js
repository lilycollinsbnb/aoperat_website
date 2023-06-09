import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();
  const transformedMembers = data.teamMembers.map(member => {
    return {
      name: member.name,
      caption1: member.caption1,
      caption2: member.caption2,
      image: getAsset(member.image)
    }
  })

  return (
    <AboutPageTemplate
      pageTitle={data.pageTitle}
      subheading={data.subheading}
      image={getAsset(data.image)}
      content={widgetFor('body')}
      teamMembers={transformedMembers}
    />
  )


}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
