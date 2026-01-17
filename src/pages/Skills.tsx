import "./Skills.css";
import type { ReactNode } from "react";

function SkillCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="skill-card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

type SkillGroupProps = {
  title?: string;
  items: string[];
};

export function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div className="skill-group">
      {title && <h3>{title}</h3>}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="page">
      <h1>Skills</h1>
      <p>
        Technologies and skills I've developed across software engineering,
        data analysis, and game development projects.
      </p>

      <div className="skills-grid">
        <SkillCard title="Software Development (Primary)">
          <SkillGroup
            title="Languages"
            items={[
              "JavaScript / TypeScript",
              "Python",
              "Java",
              "C#",
            ]}
          />
          <SkillGroup
            title="Frontend"
            items={[
              "React",
              "HTML",
              "CSS",
              "Angular",
            ]}
          />
          <SkillGroup
            title="Backend"
            items={[
              "Node.js",
              "REST APIs",
              "Authentication & data validation",
            ]}
          />
          <SkillGroup
            title="Databases"
            items={[
              "MongoDB",
              "SQL (PostgreSQL)",
            ]}
          />
        </SkillCard>

        <SkillCard title="Data & Analytics">
          <SkillGroup
            title="Analysis & Modelling"
            items={[
              "Exploratory data analysis (EDA)",
              "Regression modelling",
              "Statistical reasoning",
              "Data cleaning and transformation",
            ]}
          />
          <SkillGroup
            title="Tools"
            items={[
              "SQL (joins, aggregations)",
              "Python (pandas, numpy)",
              "R (business data analysis)",
              "Excel (pivot tables, formulas)",
            ]}
          />
        </SkillCard>

        <SkillCard title="Software Engineering Practices">
          <SkillGroup
            items={[
              "Git & GitHub",
              "Modular code design",
              "Component-based architecture",
              "Debugging & refactoring",
              "RESTful API design",
            ]}
          />
        </SkillCard>

        <SkillCard title="Game Development">
          <SkillGroup
            items={[
              "Godot (GDScript)",
              "State-based enemy AI",
              "Game system architecture",
              "Player & weapon systems",
              "Balancing & iteration",
            ]}
          />
        </SkillCard>

        <SkillCard title="Soft Skills">
          <SkillGroup
            items={[
              "Problem solving",
              "Clear technical communication",
              "Independent learning",
              "Project planning and scoping",
              "Feedback-driven iteration",
              "Teamwork and leadership",
            ]}
          />
        </SkillCard>
      </div>
    </div>
  );
}
