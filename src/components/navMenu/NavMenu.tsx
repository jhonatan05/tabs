import React, { useState } from 'react'
import './NavMenu.scss'
import NavButton from '../navButton/NavButton'
import { getNavData } from './optionNavMenu'

const NavMenu = () => {
  const [mailsData, setMailsData] = useState(0)

  const handleClick = (page: number) => {
    setMailsData(page)
  }

  return (
    <section className="navMenu">
      <NavButton handleclick={handleClick} />
      <span className="navMenu__text">
        Clicking each tab should hide the content of the other tab and show the content of clicked tab. By default,
        enable the first tab
      </span>
      {getNavData(mailsData).map((content2) => {
        const { content } = content2
        return <span className="navMenu__content">{content}</span>
      })}
      <span className="navMenu__text">Add some dummy content or just add a simple text showing the tab</span>
    </section>
  )
}

export default NavMenu
