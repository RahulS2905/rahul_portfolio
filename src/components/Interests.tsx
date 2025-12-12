import { Cpu, Sparkles, Tv, Dumbbell, BookOpen, Youtube } from "lucide-react";

const Interests = () => {
  const sideQuests = [
    {
      title: "AI Tools & Prototypes",
      description: "Exploring cutting-edge AI and building functional prototypes",
      icon: Cpu,
      color: "border-primary text-primary",
    },
    {
      title: "AI Video Creator",
      description: "Creating AI-generated videos on YouTube @InfoVerseWithRahul",
      icon: Youtube,
      color: "border-accent text-accent",
      link: "http://www.youtube.com/@InfoVerseWithRahul",
    },
    {
      title: "Emerging Tech",
      description: "Learning about the latest technological innovations",
      icon: Sparkles,
      color: "border-secondary text-secondary",
    },
    {
      title: "Anime & Creativity",
      description: "Watching anime for creativity & vocabulary enhancement",
      icon: Tv,
      color: "border-primary text-primary",
    },
    {
      title: "Fitness & Sports",
      description: "Gym, fitness, cricket, and football for physical excellence",
      icon: Dumbbell,
      color: "border-secondary text-secondary",
    },
    {
      title: "Movies, Web Series & Books",
      description: "Watching engaging content and reading books for inspiration",
      icon: BookOpen,
      color: "border-accent text-accent",
    },
  ];

  return (
    <section id="interests" className="py-20 bg-muted/30 relative paper-texture">
      <div className="absolute inset-0 comic-dots opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-8 py-3 transform -rotate-1 panel-border panel-shadow">
            <h2 className="text-4xl md:text-6xl font-bangers uppercase">Side Quests</h2>
          </div>
          <p className="text-xl font-bangers text-secondary mt-4">// PERSONAL INTERESTS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sideQuests.map((quest, index) => {
            const Icon = quest.icon;
            const CardContent = (
              <>
                <div className={`inline-flex ${quest.color} bg-current/10 p-6 rounded-full mb-4 panel-border`}>
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-bangers mb-2">{quest.title}</h3>
                <p className="text-foreground/70 text-sm font-comic">{quest.description}</p>
              </>
            );

            return quest.link ? (
              <a
                key={quest.title}
                href={quest.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-card panel-border panel-shadow rounded-lg p-6 cursor-pointer text-center block hover:-translate-y-1 transition-all`}
              >
                {CardContent}
              </a>
            ) : (
              <div
                key={quest.title}
                className={`group bg-card panel-border panel-shadow rounded-lg p-6 cursor-pointer text-center`}
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Interests;
