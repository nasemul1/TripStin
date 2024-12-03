import React from 'react'

const Mailto = ({ email, subject = '', body = '', children }) => {

    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return (
    <a href={`mailto:${email}${params}`} className="text-gray-500 cursor-pointer hover:text-gray-400">{children}</a>
  )
}

export default Mailto