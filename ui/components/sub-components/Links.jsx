import React from 'react'

const Links = () => {
  return (
    <nav className="nav__case">
      <ul className="nav--links">
        <li className="link__case link--hovered"><a href="#" className="nav--link">home</a></li>
        <li className="link__case"><a href="#" className="nav--link">about us</a></li>
        <li className="link__case"><a href="#" className="nav--link">products</a></li>
        <li className="link__case"><a href="#" className="nav--link">faqs</a></li>
        <li className="link__case"><a href="#" className="nav--link">contact us</a></li>
      </ul>
    </nav>
  )
}

export default Links