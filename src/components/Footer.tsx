const Footer = () => {
  return (
    <footer className="py-12 bg-muted/30 relative panel-border border-t-4">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="border-t-4 border-foreground space-y-2">
            <p className="text-foreground/60 font-comic text-sm">
              System shutting down…
            </p>
            <p className="text-primary font-bangers text-sm">
              Data saved successfully.
            </p>
            <p className="text-accent font-bangers text-sm">
              See you in the next mission 🚀
            </p>
          </div>

          <div className="pt-6 text-xs text-muted-foreground font-comic">
            © 2025 Rahul S. All systems operational.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
