import { Database, Bot, MapPin, Globe, Github } from "lucide-react";

const Projects = () => {
  const missions = [
    {
      number: "01",
      title: "COLLEGE PLACEMENT PORTAL",
      objective: "Streamline college placement process with a centralized platform.",
      details: "Developed a comprehensive placement management system to connect students with recruiters, manage placement drives, track applications, and facilitate campus recruitment activities efficiently.",
      stack: ["React", "Node.js", "Database Management"],
      icon: Database,
      color: "border-primary text-primary",
      githubUrl: "https://github.com/RahulS2905/vvce_placement_portal",
    },
    {
      number: "02",
      title: "AI TRAVEL COMPANION",
      objective: "Create an AI assistant for travel planning.",
      details: [
        "Personalized recommendations",
        "Real-time map integration",
        "Fun, no sign-in interface",
      ],
      icon: MapPin,
      color: "border-accent text-accent",
      githubUrl: "https://github.com/RahulS2905/aitravel",
    },
    {
      number: "03",
      title: "THIS PORTFOLIO (GAME MODE)",
      objective: "Showcase Rahul's skills in a cyberpunk-inspired, interactive way.",
      details: "Built using modern web technologies with futuristic design.",
      icon: Globe,
      color: "border-secondary text-secondary",
      githubUrl: "https://github.com/RahulS2905/rahul_portfolio",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background relative paper-texture">
      <div className="absolute inset-0 halftone-bg opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-8 py-3 transform -rotate-2 panel-border panel-shadow">
            <h2 className="text-4xl md:text-6xl font-bangers uppercase">
              Active Missions
            </h2>
          </div>
          <p className="text-xl font-bangers text-secondary mt-4">// COMPLETED DEPLOYMENTS</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <div
                key={mission.number}
                className={`group bg-card panel-border panel-shadow rounded-lg p-6`}
              >
                {/* Mission Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${mission.color} bg-current/10 p-3 rounded panel-border`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bangers opacity-60 mb-1">
                      MISSION #{mission.number}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bangers">
                      {mission.title}
                    </h3>
                  </div>
                </div>

                {/* Mission Details */}
                <div className="space-y-3 mb-4 font-comic">
                  <div>
                    <span className="text-primary font-bangers text-sm">🧾 Objective:</span>
                    <p className="text-foreground/80 mt-1">{mission.objective}</p>
                  </div>
                  <div>
                    <span className="text-secondary font-bangers text-sm">
                      {mission.stack ? "🧰 Stack:" : "💬 Details:"}
                    </span>
                    {Array.isArray(mission.details) ? (
                      <ul className="text-foreground/80 mt-1 space-y-1 list-disc list-inside">
                        {mission.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-foreground/80 mt-1">{mission.details}</p>
                    )}
                  </div>
                  {mission.stack && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {mission.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary text-primary-foreground panel-border font-bangers text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* GitHub Link */}
                {mission.githubUrl && (
                  <div className="mt-4">
                    <a
                      href={mission.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background panel-border hover:bg-foreground/90 transition-colors font-bangers"
                    >
                      <Github className="w-4 h-4" />
                      VIEW REPO
                    </a>
                  </div>
                )}

                {/* Completion Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs mb-2 font-bangers">
                    <span className="text-primary">Status</span>
                    <span className="text-accent">COMPLETED</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden panel-border">
                    <div 
                      className={`h-full ${mission.color.includes('primary') ? 'bg-primary' : 'bg-secondary'}`}
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
