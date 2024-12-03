import React from 'react'

const Callto = ({ phone, children }) => {
  return (
    <a href={`tel:${phone}`} className="text-gray-500 cursor-pointer hover:text-gray-400">{children}</a>
  )
}

export default Callto