import { HERO } from '../../data/portfolio';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <p className="hero-eyebrow">{HERO.eyebrow}</p>
        <h1 className="hero-name">{HERO.name}</h1>
        <p className="hero-tagline">
          Full-stack engineer. <span>I own the product</span> —<br />
          from first commit to <span>production.</span>
        </p>
        <div className="hero-links">
          {HERO.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`btn btn-${link.variant}`}
              target={link.target}
              rel={link.target === '_blank' ? 'noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
