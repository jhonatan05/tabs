import React from 'react'

interface NavButtonProps {
  handleclick: (page: number) => void
}

const NavButton = ({ handleclick }: NavButtonProps) => {
  return (
    <nav>
      <button onClick={() => handleclick(0)}>First tab</button>
      <button onClick={() => handleclick(1)}>Second tab</button>
      <button onClick={() => handleclick(2)}>Third tab</button>
      <button onClick={() => handleclick(3)}>Fourd tab</button>
    </nav>
  )
}

export default NavButton
