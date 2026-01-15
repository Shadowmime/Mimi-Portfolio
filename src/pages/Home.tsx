import './Home.css'
import { useTypewriter } from '../hooks/useTypewriter'
import photo from '../assets/dylangrad.jpg'
import resume from '../assets/resume.pdf'

export default function Home() {
  const role = useTypewriter([
    'software developer',
    'game developer',
    'data analyst',
  ])
  
    return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-intro">Hello, I’m</p>
        <h1 className="hero-name">Dylan Mak</h1>

        <h2 className="hero-role">
          And I’m a <span>{role}</span>
        </h2>

        <p className="hero-blurb">
          I enjoy building full-stack applications, games, and data-driven tools
          that solve real problems.
        </p>

        <div className="hero-links">
          <a href="https://www.linkedin.com/in/dylan-mak-a70074338/" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/Shadowmime" target="_blank">
            GitHub
          </a>
        </div>

        <a className="resume-btn" href={resume} download>
          Download Resume
        </a>
      </div>

      <div className="hero-right">
        <img src={photo} alt="Dylan Mak" />
      </div>
    </section>
  )
}
