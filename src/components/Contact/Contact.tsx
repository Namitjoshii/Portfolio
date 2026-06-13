import { CONTACT } from '../../data/portfolio';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <p className="section-label">CONTACT</p>
        <div className="contact-grid">
          {CONTACT.map((item) =>
            item.href ? (
              <a
                key={item.key}
                href={item.href}
                className="contact-item"
                target={item.target}
                rel={item.target === '_blank' ? 'noreferrer' : undefined}
              >
                <span className="contact-key">{item.key}</span>
                <span className="contact-val">{item.val}</span>
              </a>
            ) : (
              <div key={item.key} className="contact-item">
                <span className="contact-key">{item.key}</span>
                <span className="contact-val">{item.val}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
