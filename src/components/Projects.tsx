import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import dashboardImage from "@/assets/project-dashboard.jpg";
import weatherImage from "@/assets/project-weather.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my skills, projects, and contact information. Built with React and Tailwind CSS.",
      image: dashboardImage,
      liveUrl: "https://bosspetite.github.io/portfolio/",
      codeUrl: "https://github.com/bosspetite/portfolio",
      technologies: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my skills, projects, and contact information. Built with React and Tailwind CSS.",
      image: dashboardImage,
      liveUrl: "https://bosspetite.github.io/portfolio/",
      codeUrl: "https://github.com/bosspetite/portfolio",
      technologies: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my skills, projects, and contact information. Built with React and Tailwind CSS.",
      image: dashboardImage,
      liveUrl: "https://bosspetite.github.io/portfolio/",
      codeUrl: "https://github.com/bosspetite/portfolio",
      technologies: ["React", "TypeScript", "Tailwind CSS"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in front-end development and design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card-portfolio hover-lift group overflow-hidden animate-fade-in"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="btn-primary flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Live
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="btn-secondary flex-1"
                      onClick={() => window.open(project.codeUrl, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work?
            </p>
            <Button
              variant="outline"
              size="lg"
              className="btn-secondary"
              onClick={() => window.open("https://github.com/bosspetite", '_blank')}
            >
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;