import React from 'react'
import PropTypes from 'prop-types'
import { ProductPageTemplate } from '../../templates/product-page'



const ProductPagePreview = ({ entry, getAsset, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <ProductPageTemplate
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

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default ProductPagePreview
