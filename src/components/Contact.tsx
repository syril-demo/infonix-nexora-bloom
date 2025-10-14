import { Mail, Phone, Instagram, MapPin, ExternalLink, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const Contact = () => {
  const headerReveal = useScrollReveal();
  const infoReveal = useScrollReveal();
  const mapReveal = useScrollReveal();
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'infonix.2k24symposium@gmail.com',
      action: () => window.open('mailto:infonix.2k24symposium@gmail.com'),
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@Infonix_2K24',
      action: () => window.open('https://instagram.com/Infonix_2K24', '_blank'),
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8778729511',
      action: () => window.open('tel:+918778729511'),
    },
    {
      icon: Phone,
      label: 'Alternate Phone',
      value: '+91 8190853274',
      action: () => window.open('tel:+918190853274'),
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerReveal.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerReveal.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Get in Touch <span className="bg-gradient-accent bg-clip-text text-transparent">With Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about the symposium? Need assistance with registration? 
            Our team is here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div 
            ref={infoReveal.ref}
            className={`transition-all duration-1000 delay-200 ${
              infoReveal.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-border hover:shadow-card transition-all duration-300 cursor-pointer"
                  onClick={contact.action}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-elegant">
                    <contact.icon size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{contact.label}</p>
                    <p className="text-muted-foreground">{contact.value}</p>
                  </div>
                  <ExternalLink size={16} className="text-muted-foreground ml-auto" />
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
              <h4 className="text-lg font-heading font-semibold text-foreground mb-4 flex items-center">
                <MessageCircle size={20} className="mr-2 text-accent" />
                Need Immediate Help?
              </h4>
              <p className="text-muted-foreground mb-4 text-sm">
                For urgent queries or assistance, reach out to us directly via call or email. 
                Our team is available to help you with registration and event-related questions.
              </p>
              <div className="flex space-x-4">
                <Button 
                  variant="accent"
                  className="flex-1"
                  onClick={() => window.open('tel:+918778729511')}
                >
                  <Phone size={16} className="mr-2" />
                  Call Now
                </Button>
                <Button 
                  variant="primary"
                  className="flex-1"
                  onClick={() => window.open('mailto:infonix.2k24symposium@gmail.com')}
                >
                  <Mail size={16} className="mr-2" />
                  Send Email
                </Button>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div 
            ref={mapReveal.ref}
            className={`transition-all duration-1000 delay-400 ${
              mapReveal.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-8">
              Visit Our Campus
            </h3>
            
            <div className="bg-card rounded-lg overflow-hidden shadow-card">
              {/* Map Placeholder */}
              <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.3437572838716!2d79.51008997537578!3d11.95068488827871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5356d91e42871f%3A0xc43a95c77c96be61!2sUniversity%20College%20of%20Engineering%20Villupuram!5e0!3m2!1sen!2sin!4v1759076184049!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="University College of Engineering Villupuram Location"
                ></iframe>
              </div>
              
              {/* Location Info */}
              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">
                      University College of Engineering Villupuram
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Kakuppam, Villupuram - 605103<br />
                      Tamil Nadu, India<br />
                      (Anna University Campus)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
