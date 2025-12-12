import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rahulsswamy@gmail.com",
      href: "mailto:rahulsswamy@gmail.com",
      color: "text-primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8660708469",
      href: "tel:+918660708469",
      color: "text-secondary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mysore, India",
      href: "#",
      color: "text-accent",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://surl.li/odfrlm",
      color: "text-primary",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background relative paper-texture">
      <div className="absolute inset-0 halftone-bg opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-secondary text-secondary-foreground px-8 py-3 transform rotate-2 panel-border panel-shadow">
            <h2 className="text-4xl md:text-6xl font-bangers uppercase">
              Contact
            </h2>
          </div>
          <p className="text-xl font-comic text-primary mt-4 font-bold">Want to connect? Send a signal!</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card panel-border panel-shadow rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group bg-muted/50 panel-border rounded-lg p-6 
                             hover:-translate-y-1 hover:shadow-[6px_6px_0px_hsl(var(--foreground))] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`${info.color} bg-current/10 p-3 rounded panel-border`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground mb-1 font-comic font-bold">
                          {info.label}
                        </div>
                        <div className={`${info.color} font-comic text-sm md:text-base break-words`}>
                          {info.value}
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="flex justify-center pt-6 border-t-4 border-foreground">
              <Button
                onClick={() => window.open("https://wa.me/918660708469", "_blank")}
                className="bg-primary text-primary-foreground panel-border panel-shadow 
                         hover:translate-y-1 hover:shadow-none transition-all font-bangers text-lg"
              >
                💬 Ping Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
