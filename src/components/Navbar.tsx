import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Dylan Mak</Link>
      </div>

      <div className="nav-right">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/projects">
          Projects
        </NavLink>
      </div>
    </nav>
  )
}
