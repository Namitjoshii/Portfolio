import { NAV_LINKS } from '../../data/portfolio';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <a className="nav-logo" href="#hero">nj.</a>
      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
