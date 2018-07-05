import dateFormat from 'dateformat'
import React from 'react'

const PrettyDate = ({ date }) => (
  <div>
    { dateFormat(date, 'mmm dd, yyyy') }
  </div>
)

export default PrettyDate
