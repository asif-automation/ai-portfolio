import ProjectHero from "./components/ProjectHero";
import Overview from "./components/Overview";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Architecture from "./components/Architecture";
import TechStack from "./components/TechStack";
import WorkflowSteps from "./components/WorkflowSteps";
import KnowledgeBase from "./components/KnowledgeBase";
import EmailExamples from "./components/EmailExamples";
import Challenges from "./components/Challenges";
import ProjectCTA from "./components/ProjectCTA";

export default function CustomerSupportProject() {
  return (
    <main>
      <ProjectHero />
      <Overview />
      <Problem />
      <Solution />
      <Architecture />
      <TechStack />
      <WorkflowSteps />
      <KnowledgeBase />
      <EmailExamples />
      <Challenges />
      <ProjectCTA />
    </main>
  );
}