import { ABOUT } from '../../data/portfolio';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label">ABOUT</p>
        <p className="about-text">
          {ABOUT.text.map((part, i) =>
            part.bold ? <strong key={i}>{part.text}</strong> : <span key={i}>{part.text}</span>
          )}
        </p>
        <div className="about-meta">
          {ABOUT.meta.map((item) => (
            <div className="meta-item" key={item.label}>
              <span className="meta-val">{item.val}</span>
              <span className="meta-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
