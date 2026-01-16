import StarBattleMini from "../components/StarBattleMini";
import './About.css'

export default function About() {
  return (
    <div className="about-page">
      {/* Logic / Puzzles */}
      <section className="about-section">
        <h2>Logic & Puzzles</h2>
        <p>
          I enjoy constraint-based problems that reward careful reasoning and
          validation.
        </p>
        
        <div className="star-battle-wrapper">
            <StarBattleMini />
        </div>
      </section>

      {/* Competitive Strategy */}
      <section className="about-section">
        <h2>Competitive Strategy</h2>
        <p>
          I compete in high-level Pokémon tournaments, where success depends on critical thinking, 
          probability and risk management, and analyzing the evolving meta.
        </p>

        <ul className="results-list">
          <li>9th — Sydney Regional 2022 (VGC)</li>
          <li>25th — Brisbane Regional 2025 (VGC)</li>
          <li>4th — May Cup OCE (Pokémon Unite)</li>
        </ul>
      </section>

      {/* Sports */}
      <section className="about-section">
        <h2>Performance and Consistency</h2>
        <p>
          Regular tennis and running training has taught me consistency,
          resilience, and performance under pressure.
        </p>
      </section>
    </div>
  );
}
