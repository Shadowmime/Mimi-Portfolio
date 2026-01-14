import Hero from "../components/Hero";
import WhatIDo from "../components/WhatIDo";
import FeaturedProjects from "../components/FeaturedProjects";
import TechStack from "../components/TechStack";
import CTA from "../components/CTA";
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <FeaturedProjects />
      <Link to="/projects">View my projects →</Link>
      <TechStack />
      <CTA />
    </>
  );
}
