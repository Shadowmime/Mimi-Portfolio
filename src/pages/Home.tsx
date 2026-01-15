import { Link } from 'react-router-dom'
import './Home.css'
import { useTypewriter } from '../hooks/useTypewriter'

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
          <a href="https://linkedin.com/in/YOUR_LINK" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/YOUR_GITHUB" target="_blank">
            GitHub
          </a>
        </div>

        <a className="resume-btn" href="/resume.pdf">
          Download Resume
        </a>
      </div>

      <div className="hero-right">
        <img src="/me.jpg" alt="Dylan Mak" />
      </div>
    </section>
  )
}
