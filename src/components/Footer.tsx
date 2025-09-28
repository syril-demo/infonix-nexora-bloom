import { Mail, Instagram, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-lg">I2</span>
              </div>
              <span className="font-heading font-bold text-xl">Infonix 2.0</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              National Level Technical Symposium 2K25 hosted by University College of 
              Engineering Villupuram, fostering innovation and excellence in technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Events
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:infonix.2k24symposium@gmail.com"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail size={16} />
                <span>infonix.2k24symposium@gmail.com</span>
              </a>
              <a 
                href="https://instagram.com/Infonix_2K24"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram size={16} />
                <span>@Infonix_2K24</span>
                <ExternalLink size={12} />
              </a>
              <a 
                href="tel:+918778729511"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone size={16} />
                <span>+91 8778729511</span>
              </a>
              <a 
                href="tel:+918190853274"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone size={16} />
                <span>+91 8190853274</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-sm">
              © 2025 Infonix 2k25 Symposium. All Rights Reserved.
            </p>
            <p className="text-primary-foreground/60 text-xs">
              University College of Engineering Villupuram (Anna University)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;