import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import logo from "@/assets/salah-flow-logo.png";

const FooterSection = () => {
  return (
    <footer className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Final CTA */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Don't Miss Another Salah – Install SalahFlow Now
            </h2>
            <p className="text-lg md:text-xl text-secondary-foreground/90 max-w-2xl mx-auto">
              One click brings prayer times and reminders to your browser,
              helping you stay connected to your faith, no matter how busy life
              gets.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-primary-foreground text-lg px-8 py-6 rounded-xl shadow-lg"
            >
              Add to Chrome – Free!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Footer Links */}
          <div className="border-t border-secondary-foreground/20 pt-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Logo & Tagline */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="SalahFlow Logo" className="w-12 h-12" />
                  <h3 className="text-xl font-bold text-primary">SalahFlow</h3>
                </div>
                <p className="text-sm text-secondary-foreground/70">
                  Built for Muslims, by Muslims
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-3">
                <h4 className="font-semibold text-secondary-foreground">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      Chrome Web Store
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="space-y-3">
                <h4 className="font-semibold text-secondary-foreground">
                  Get in Touch
                </h4>
                <div className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                  <Mail className="w-4 h-4 text-primary" />
                  <a
                    href="mailto:support@salahflow.com"
                    className="hover:text-primary transition-colors"
                  >
                    deyan.sirakov2006@abv.bg
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-8 border-t border-secondary-foreground/20">
              <p className="text-sm text-secondary-foreground/60">
                © 2025 SalahFlow – Built for Muslims, by Muslims
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
