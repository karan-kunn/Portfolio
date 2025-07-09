'use client'

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">Portfolio</a>
      <i className='bx bx-menu menu-icon'></i>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header
