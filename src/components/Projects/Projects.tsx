import { useEffect, useRef } from 'react';
import { PROJECTS } from '../../data/portfolio';
import '../Projects/Projects.css';

function PhoneMockup() {
  return (
    <div className="phone-mockup-wrap">
      <div className="phone-frame">
        <div className="phone-notch"></div>
        <div className="phone-screen">
          <span className="phone-app-name">mume</span>

          <div className="phone-now-playing">
            <p className="phone-track-label">NOW PLAYING</p>
            <p className="phone-track-name">Tum Se Hi</p>
            <p className="phone-track-artist">Mohit Chauhan</p>

            <div className="phone-progress">
              <div className="phone-progress-bar"></div>
            </div>
          </div>

          <div className="phone-controls">
            <div className="phone-ctrl">⏮</div>
            <div className="phone-ctrl play">▶</div>
            <div className="phone-ctrl">⏭</div>
          </div>

          <div className="phone-queue">
            <p className="phone-queue-label">UP NEXT</p>

            {['Tum Se Hi', 'Iktara', 'Phir Se Ud Chala'].map((track, i) => (
              <div
                className={`phone-queue-item${i === 0 ? ' active' : ''}`}
                key={track}
              >
                <div className="phone-queue-dot"></div>
                <span className="phone-queue-text">{track}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="phone-caption">live apk · jiosaavn api</p>
    </div>
  );
}

export default function Projects() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        }),
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-label">PROJECTS</p>
          <span className="section-count">
            {PROJECTS.filter((p) => !p.status).length} shipped ·{' '}
            {PROJECTS.filter((p) => p.status).length} in development
          </span>
        </div>

        <div className="projects-layout">
          <div className="projects-cards">
            {PROJECTS.map((proj, i) => (
              <div
                key={i}
                className="project-card fade-in"
                ref={(el) => {
                  if (el) cardsRef.current[i] = el;
                }}
              >
                <div className="project-header">
                  <div>
                    <p className="project-type">{proj.type}</p>
                    <span className="project-name">{proj.name}</span>
                  </div>

                  <div className="project-links">
                    {proj.status && (
                      <span className="project-status">{proj.status}</span>
                    )}

                    {proj.link && (
                      <a
                        href={proj.link.href}
                        className="project-link"
                        target={proj.link.target}
                        rel={
                          proj.link.target === '_blank'
                            ? 'noreferrer'
                            : undefined
                        }
                      >
                        {proj.link.label}
                      </a>
                    )}

                    {proj.demoLink && (
                      <a
                        href={proj.demoLink.href}
                        className="project-link"
                        target={proj.demoLink.target}
                        rel={
                          proj.demoLink.target === '_blank'
                            ? 'noreferrer'
                            : undefined
                        }
                      >
                        {proj.demoLink.label}
                      </a>
                    )}
                  </div>
                </div>

                <p className="project-desc">{proj.desc}</p>

                <div className="stack-tags">
                  {proj.stack.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}