import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const MyLinks = () => (
  <>
    <nav className="nav-container">
      <ul className="nav-links">
        <li><Link to="/" className="nav-logo">Bookstore CMS</Link></li>
        <li className="navli"><Link to="/" className="links" active="true">Books</Link></li>
        <li className="navli"><Link to="/category" className="links">Categories</Link></li>
      </ul>
      <div>
        <Link to="/" className="nav-icon"><FaUserCircle /></Link>
      </div>
    </nav>

  </>
);

export default MyLinks;
