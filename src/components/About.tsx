const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative paper-texture">
      <div className="absolute inset-0 halftone-bg opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-8 py-3 transform rotate-1 panel-border panel-shadow mb-4">
            <h2 className="text-4xl md:text-6xl font-bangers uppercase">
              Player Profile
            </h2>
          </div>
          <p className="text-2xl font-bangers text-accent">RAHUL S</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card panel-border panel-shadow p-8 rounded-lg">
            <p className="text-xl text-accent font-comic font-bold mb-6 text-center">
              A futuristic mind built for data, design, and development.
            </p>

            <div className="space-y-4 text-foreground/90 leading-relaxed font-comic text-lg">
              <p>
                I'm Rahul, a tech enthusiast from Mysore, currently decoding my B.E. journey at VVCE (2023–2027). 
                I believe in learning through challenges, embracing failure as experience — my life mantra,
              </p>

              <div className="my-8 p-6 bg-secondary/20 border-4 border-secondary transform -rotate-1">
                <p className="text-foreground text-center text-2xl font-bangers">
                  "Kyu dare zindagi me? Kya hoga? Kuch na hoga toh tajurba hoga."
                </p>
              </div>

              <p>
                fuels my curiosity and keeps me fearless.
              </p>

              <p>
                I blend creativity, logic, and curiosity — the three systems that power my approach to tech. 
                From SQL databases to web systems, every project I build reflects purpose and experimentation.
              </p>
            </div>

            {/* Stats Display */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t-4 border-foreground">
              <div className="text-center">
                <div className="text-3xl font-bangers text-primary mb-2">2023-2027</div>
                <div className="text-sm font-comic text-muted-foreground">Training Period</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bangers text-accent mb-2">VVCE</div>
                <div className="text-sm font-comic text-muted-foreground">Academy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bangers text-secondary mb-2">Mysore, IN</div>
                <div className="text-sm font-comic text-muted-foreground">Location</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
