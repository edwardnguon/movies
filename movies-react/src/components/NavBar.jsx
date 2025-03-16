import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movies</Link>
      </div>
      <div className="navbar-links">
        <Link to="/favorites" className="nav-link">Favorites</Link>
      </div>
    </nav>
  )
}

export default NavBar
