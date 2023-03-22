import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import CareerOfferPreview from './preview-templates/CareerOfferPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import TermsAndConditionsPagePreview from './preview-templates/TermsAndConditionsPagePreview'
import PrivacyPolicyPagePreview from './preview-templates/PrivacyPolicyPagePreview'
import TrainingOfferPostPreview from './preview-templates/TrainingOfferPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('career', CareerOfferPreview)
CMS.registerPreviewTemplate('product', ProductPagePreview)
CMS.registerPreviewTemplate('terms-and-conditions', TermsAndConditionsPagePreview)
CMS.registerPreviewTemplate('privacy-policy', PrivacyPolicyPagePreview)
CMS.registerPreviewTemplate('training', TrainingOfferPostPreview)