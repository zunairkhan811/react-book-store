import { Link } from 'react-router-dom';

const MyLinks = () => (
  <>
    <ul className="navigation-links">
      <li><Link to="/">Bookstore CMS</Link></li>
      <li><Link to="/">Books</Link></li>
      <li><Link to="/category">Categories</Link></li>
    </ul>
  </>
);

export default MyLinks;
