import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 92 },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey into front-end development began with a fascination for creating beautiful, 
                interactive user experiences. What started as curiosity about how websites work evolved 
                into a passion for crafting pixel-perfect interfaces that users love to interact with.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in modern web technologies including HTML5, CSS3, JavaScript, and React. 
                My expertise extends to responsive design, performance optimization, and creating 
                accessible web applications. I believe in writing clean, maintainable code and 
                staying current with the latest industry trends and best practices.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, contributing to 
                open-source projects, or sharing knowledge with the developer community. I'm passionate 
                about creating web experiences that are not just functional, but delightful to use.
              </p>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-6">
                <div className="card-portfolio p-6 hover-lift">
                  <div className="flex items-center mb-4">
                    <Code2 className="text-primary mr-3" size={24} />
                    <h3 className="text-xl font-semibold">Clean Code</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Writing maintainable, scalable code that follows best practices and industry standards.
                  </p>
                </div>

                <div className="card-portfolio p-6 hover-lift">
                  <div className="flex items-center mb-4">
                    <Palette className="text-primary mr-3" size={24} />
                    <h3 className="text-xl font-semibold">Design Focus</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Creating visually appealing interfaces with attention to typography, color, and layout.
                  </p>
                </div>

                <div className="card-portfolio p-6 hover-lift">
                  <div className="flex items-center mb-4">
                    <Rocket className="text-primary mr-3" size={24} />
                    <h3 className="text-xl font-semibold">Performance</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Optimizing applications for speed, accessibility, and seamless user experiences.
                  </p>
                </div>
              </div>

              <div className="card-portfolio p-6">
                <h3 className="text-xl font-semibold mb-6">Skills & Technologies</h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;