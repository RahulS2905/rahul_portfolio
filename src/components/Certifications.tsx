import { useState } from "react";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const certificates = [
    {
      id: 1,
      title: "Google Cloud Career Launchpad - Cloud Engineer Track",
      image: "/certificates/google-cloud.jpg",
      issuer: "Google Cloud Learning Services",
    },
    {
      id: 2,
      title: "Intro to Operating Systems 1: Virtualization",
      image: "/certificates/operating-systems.jpg",
      issuer: "Codio - Coursera",
    },
    {
      id: 3,
      title: "Programming in Python",
      image: "/certificates/programming-python.jpg",
      issuer: "Meta - Coursera",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bangers text-5xl md:text-6xl text-primary mb-4 panel-border inline-block px-6 py-2 bg-secondary/10">
            CERTIFICATIONS
          </h2>
          <p className="font-comic text-foreground/80 text-lg mt-4">
            Achievement Unlocked! View My Credentials
          </p>
        </div>

        <div className="text-center">
          <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="font-bangers text-xl panel-border bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Award className="mr-2" />
                VIEW CERTIFICATES
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="font-bangers text-3xl text-primary">MY CERTIFICATIONS</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="cursor-pointer panel-border bg-secondary/10 p-4 hover:bg-secondary/20 transition-colors"
                    onClick={() => setSelectedCert(cert.image)}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-auto border-2 border-foreground/20 mb-3"
                    />
                    <h3 className="font-bangers text-lg text-primary">{cert.title}</h3>
                    <p className="font-comic text-sm text-foreground/70">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Full Size Certificate Dialog */}
        <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
          <DialogContent className="max-w-7xl max-h-[95vh] overflow-auto">
            <DialogHeader>
              <DialogTitle className="font-bangers text-2xl text-primary">CERTIFICATE</DialogTitle>
            </DialogHeader>
            {selectedCert && (
              <div className="mt-4">
                <img
                  src={selectedCert}
                  alt="Certificate Full View"
                  className="w-full h-auto border-4 border-primary"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Certifications;
