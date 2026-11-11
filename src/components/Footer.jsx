import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className="footer">
        <p>Copyright © {year} My Profile Website</p>
    </footer>
  )
}

export default Footer