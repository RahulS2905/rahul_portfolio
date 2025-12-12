import { GraduationCap, Calendar, MapPin, Briefcase } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-muted/30 relative paper-texture">
      <div className="absolute inset-0 comic-dots opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent text-accent-foreground px-8 py-3 transform -rotate-1 panel-border panel-shadow">
            <h2 className="text-4xl md:text-6xl font-bangers uppercase">
              Training Institution
            </h2>
          </div>
          <p className="text-xl font-bangers text-primary mt-4">// VVCE ACADEMY</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card panel-border panel-shadow rounded-lg p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-primary text-primary-foreground panel-border p-4 rounded">
                <GraduationCap className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bangers text-primary mb-2">
                  Bachelor of Engineering
                </h3>
                <p className="text-xl font-comic text-foreground/80">
                  Vidyavardhaka College of Engineering
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3 text-foreground/80 font-comic">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground font-bold">Duration</div>
                  <div className="font-bangers text-lg">2023 – 2027</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-foreground/80 font-comic">
                <MapPin className="w-5 h-5 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground font-bold">Location</div>
                  <div className="font-bangers text-lg">Mysore, India</div>
                </div>
              </div>
            </div>

            <div className="border-t-4 border-foreground pt-6">
              <h4 className="text-xl font-bangers text-secondary mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Key Roles & Responsibilities
              </h4>
              <div className="space-y-3">
                <div className="bg-primary/10 panel-border rounded p-4">
                  <div className="font-bangers text-primary mb-1 text-lg">🏅 Placement Coordinator</div>
                  <p className="text-sm font-comic text-foreground/80">
                    Managing placement activities, recruiter communications, and student engagement
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-4 border-foreground">
              <div className="text-center">
                <p className="text-sm font-comic text-muted-foreground mb-2 font-bold">Focus Areas</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Tech", "Data Systems", "Communication", "Leadership"].map((focus) => (
                    <span
                      key={focus}
                      className="px-4 py-2 bg-accent text-accent-foreground panel-border font-bangers"
                    >
                      {focus}
                    </span>
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

export default Education;
