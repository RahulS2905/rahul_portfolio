import { Code2, Database, Lightbulb, Users, Clock, Eye, Zap, TrendingUp } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Java", icon: Code2 },
    { name: "C++", icon: Code2 },
    { name: "SQL (MySQL, SQL Plus)", icon: Database },
    { name: "HTML, CSS, JavaScript", icon: Code2 },
    { name: "AI & Machine Learning", icon: Lightbulb },
    { name: "Project Management", icon: Lightbulb },
  ];

  const softSkills = [
    { name: "Communication", icon: Users },
    { name: "Leadership", icon: Zap },
    { name: "Observation", icon: Eye },
    { name: "Quick Learning", icon: Lightbulb },
    { name: "Time Management", icon: Clock },
  ];

  const SkillChip = ({ skill, index, color }: { skill: typeof technicalSkills[0], index: number, color: string }) => {
    const Icon = skill.icon;
    return (
      <div
        className={`group bg-card panel-border panel-shadow rounded p-4 cursor-pointer hover:-translate-y-1 transition-all`}
      >
        <div className="flex items-center gap-3">
          <Icon className={`w-6 h-6 ${color}`} />
          <span className="font-comic text-sm md:text-base">{skill.name}</span>
          <span className="ml-auto text-xs opacity-50 font-bangers">.exe</span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-muted/30 relative paper-texture">
      <div className="absolute inset-0 comic-dots opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-secondary text-secondary-foreground px-8 py-3 transform rotate-1 panel-border panel-shadow">
            <h2 className="text-4xl md:text-6xl font-bangers uppercase">
              Inventory System
            </h2>
          </div>
          <p className="text-xl font-bangers text-accent mt-4">// SKILLS LOADED</p>
        </div>

        {/* Technical Arsenal */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-bangers text-primary mb-8 flex items-center gap-3">
            <span className="text-accent text-4xl">{'>'}</span> Technical Arsenal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalSkills.map((skill, index) => (
              <SkillChip 
                key={skill.name} 
                skill={skill} 
                index={index}
                color="border-primary text-primary"
              />
            ))}
          </div>
        </div>

        {/* Soft Skill Enhancers */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bangers text-secondary mb-8 flex items-center gap-3">
            <span className="text-accent text-4xl">{'>'}</span> Soft Skill Enhancers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <SkillChip 
                key={skill.name} 
                skill={skill} 
                index={index}
                color="border-secondary text-secondary"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
