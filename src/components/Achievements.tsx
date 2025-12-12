import { Award, Trophy, Users, Target } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import hackkshetraImg from "@/assets/hackkshetra.jpeg";
import hackathonImg from "@/assets/hackathon.jpg";
import hackkshetraAchievement from "@/assets/hackkshetra-achievement.jpg";

const Achievements = () => {
  const [openHackkshetra, setOpenHackkshetra] = useState(false);
  const [openShristi, setOpenShristi] = useState(false);
  const [openVolunteer, setOpenVolunteer] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const badges = [
    {
      title: "Hackkshetra 2.0 - National Level Hackathon",
      description: "Runners-up at the 24-hour national-level hackathon, showcasing innovation and technical excellence.",
      icon: Trophy,
      color: "border-primary text-primary",
      hasDialog: true,
    },
    {
      title: "Perplexity Student Ambassador",
      description: "Representing Perplexity AI and fostering innovation in AI technology.",
      icon: Award,
      color: "border-primary text-primary",
    },
    {
      title: "Placement Coordinator @VVCE",
      description: "Managed placement activities, recruiter communications, and student engagement.",
      icon: Award,
      color: "border-secondary text-secondary",
    },
    {
      title: "Finance Head @PPGS VVCE",
      description: "Managed financial operations, budgeting, and resource allocation for college activities.",
      icon: Users,
      color: "border-accent text-accent",
    },
    {
      title: "Coordinator @VCode",
      description: "Leading initiatives and coordinating technical events and activities.",
      icon: Users,
      color: "border-primary text-primary",
    },
    {
      title: "Coordinator @Shristi Club",
      description: "Organizing cultural and creative events to foster innovation and collaboration.",
      icon: Users,
      color: "border-secondary text-secondary",
      hasDialog: true,
    },
    {
      title: "Best Volunteer Award @VVCE",
      description: "Recognized for outstanding volunteer contributions and community service in college during IV Semester 2024-25.",
      icon: Award,
      color: "border-accent text-accent",
      hasDialog: true,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-background relative paper-texture">
      <div className="absolute inset-0 halftone-bg opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent text-accent-foreground px-8 py-3 transform rotate-2 panel-border panel-shadow">
            <h2 className="text-4xl md:text-6xl font-bangers uppercase">
              Achievements & Roles
            </h2>
          </div>
          <p className="text-xl font-bangers text-primary mt-4">// BADGES EARNED</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            const content = (
              <div className="flex items-start gap-4">
                <div className={`${badge.color} bg-current/10 p-4 rounded-lg panel-border flex-shrink-0`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bangers mb-2 flex items-center gap-2">
                    {badge.title}
                    <span className="text-xs opacity-50 font-comic">.exe</span>
                  </h3>
                  <p className="text-foreground/80 text-sm leading-relaxed font-comic">
                    {badge.description}
                  </p>
                </div>
              </div>
            );

            if (badge.hasDialog) {
              const isHackkshetra = badge.title.includes("Hackkshetra");
              const isShristi = badge.title.includes("Shristi");
              const isVolunteer = badge.title.includes("Best Volunteer");
              
              const getOpenState = () => {
                if (isHackkshetra) return openHackkshetra;
                if (isShristi) return openShristi;
                return openVolunteer;
              };
              
              const getSetOpenState = () => {
                if (isHackkshetra) return setOpenHackkshetra;
                if (isShristi) return setOpenShristi;
                return setOpenVolunteer;
              };
              
              return (
                <Dialog 
                  key={badge.title} 
                  open={getOpenState()} 
                  onOpenChange={getSetOpenState()}
                >
                  <DialogTrigger asChild>
                    <div className={`group bg-card panel-border panel-shadow rounded-lg p-6 cursor-pointer hover:shadow-lg`}>
                      {content}
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-6 bg-card">
                    {isHackkshetra && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bangers text-center mb-4">🏆 Hackkshetra 2.0 Achievement</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div
                            className="cursor-pointer panel-border bg-secondary/10 p-4 hover:bg-secondary/20 transition-colors"
                            onClick={() => setSelectedImage(hackkshetraImg)}
                          >
                            <img 
                              src={hackkshetraImg} 
                              alt="Hackkshetra 2.0 Award Ceremony" 
                              className="w-full h-48 md:h-56 object-cover rounded-lg border-2 border-foreground/20"
                            />
                          </div>
                          <div
                            className="cursor-pointer panel-border bg-secondary/10 p-4 hover:bg-secondary/20 transition-colors"
                            onClick={() => setSelectedImage(hackathonImg)}
                          >
                            <img 
                              src={hackathonImg} 
                              alt="Hackkshetra 2.0 Team Photo with Trophy" 
                              className="w-full h-48 md:h-56 object-cover rounded-lg border-2 border-foreground/20"
                            />
                          </div>
                          <div
                            className="cursor-pointer panel-border bg-secondary/10 p-4 hover:bg-secondary/20 transition-colors"
                            onClick={() => setSelectedImage(hackkshetraAchievement)}
                          >
                            <img 
                              src={hackkshetraAchievement} 
                              alt="Hackkshetra 2.0 Achievement - 2nd Place Certificate and Trophy" 
                              className="w-full h-48 md:h-80 object-cover rounded-lg border-2 border-foreground/20"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {isShristi && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bangers text-center mb-4">🎭 Shristi Club Activities</h3>
                        <video 
                          controls 
                          className="w-full max-w-2xl mx-auto rounded-lg panel-border"
                          poster="/shristi/classroom-1.jpg"
                        >
                          <source src="/shristi/event-video.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                    {isVolunteer && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bangers text-center mb-4">🏅 Best Volunteer Award</h3>
                        <div
                          className="cursor-pointer panel-border bg-secondary/10 p-4 hover:bg-secondary/20 transition-colors max-w-2xl mx-auto"
                          onClick={() => setSelectedImage("/achievements/best-volunteer.jpg")}
                        >
                          <img 
                            src="/achievements/best-volunteer.jpg" 
                            alt="Best Volunteer Award Certificate - IV Semester 2024-25" 
                            className="w-full h-auto object-contain rounded-lg border-2 border-foreground/20"
                          />
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              );
            }

            return (
              <div
                key={badge.title}
                className={`group bg-card panel-border panel-shadow rounded-lg p-6`}
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Size Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl max-h-[95vh] overflow-auto">
          {selectedImage && (
            <div className="mt-4">
              <img
                src={selectedImage}
                alt="Full View"
                className="w-full h-auto border-4 border-primary"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Achievements;
