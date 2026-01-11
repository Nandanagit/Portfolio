import ProjectCard from "./ProjectCard";

const projects = [
   {
    name: "Blogging Application",
    link: "https://blog-app-bynandana.vercel.app/home",
    description: "A full-stack blog platform using Next.js, Node.js, and MongoDB with secure authentication, responsive UI, and automated email features."
  },
  {
    name: "Blogger AI Content Generator",
    description: "Automates SEO-optimized content and image generation using OpenAI and Mistral, with a NestJS backend handling authentication and publishing to Blogger."
  },
  {
    name: "Snavy: Automatic video creation",
    description: "An AI-powered platform that automatically generates product videos from website URLs, built with Next.js, NestJS, and tools like Remotion, Puppeteer, and ElevenLabs."
  },
  {
    name: "AI Salary Predictor",
    description: "Machine learning salary prediction using ML.NET"
  },
  {
    name: "Portfolio Website",
    description: "Built with Next.js and Tailwind CSS"
  }
];

export default function Projects() {
  return (
    <section className="max-w-2xl mx-auto mt-20 mb-12 px-4" id="projects">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Ongoing Projects</h2>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
