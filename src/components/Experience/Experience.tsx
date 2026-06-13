import { useEffect, useRef } from 'react';
import { EXPERIENCES } from '../../data/portfolio';
import './Experience.css';

export default function Experience() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience">
      <div className="container">
        <p className="section-label">EXPERIENCE</p>
        {EXPERIENCES.map((exp, i) => (
          <div
            key={i}
            className="exp-card fade-in"
            ref={(el) => { if (el) cardsRef.current[i] = el; }}
          >
            {/* Front (visible by default, hides on hover) */}
            <div className="exp-front">
              <div className="exp-front-left">
                <span className="exp-role">{exp.role}</span>
                <span className="exp-company">{exp.company}</span>
                <span className="exp-hint">hover to see what I built</span>
              </div>
              <span className="exp-period">{exp.period}</span>
            </div>

            {/* Spacer to maintain card height */}
            <div className="exp-spacer" aria-hidden="true">
              <span className="exp-role">{exp.role}</span>
              <span className="exp-company">{exp.company}</span>
            </div>

            {/* Back (visible on hover) */}
            <div className="exp-back">
              <p className="exp-back-role">{exp.role} · {exp.company.split(' · ')[0]}</p>
              <ul className="exp-bullets">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div className="stack-tags" style={{ marginTop: '14px' }}>
                {exp.stack.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
