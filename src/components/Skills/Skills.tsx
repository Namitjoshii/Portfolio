import { useEffect, useRef } from 'react';
import { SKILLS } from '../../data/portfolio';
import './Skills.css';

export default function Skills() {
  const rowsRef = useRef<HTMLDivElement[]>([]);

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
    rowsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">STACK</p>
        <div className="skills-grid">
          {SKILLS.map((row, i) => (
            <div
              key={row.category}
              className="skill-row fade-in"
              ref={(el) => { if (el) rowsRef.current[i] = el; }}
            >
              <span className="skill-category">{row.category}</span>
              <div className="skill-chips">
                {row.chips.map((chip) => (
                  <span className="skill-chip" key={chip}>{chip}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
