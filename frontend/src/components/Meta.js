import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To Bookrownia',
  description: 'We sell the best BOOKS for affordabePrice & buy the SECONDHANDBOOKS from you',
  keywords: 'books, buy books magazines, cheap books',
}

export default Meta
