import { IndianRupee, Calendar, UtensilsCrossed, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const Registration = () => {
  const headerReveal = useScrollReveal();
  const cardsReveal = useScrollReveal();
  const inclusionsReveal = useScrollReveal();
  const datesReveal = useScrollReveal();
  return (
    <section id="registration" className="section-padding bg-muted/30">
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
            Registration & <span className="bg-gradient-primary bg-clip-text text-transparent">Fees</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple and affordable registration process. Join us for an unforgettable 
            learning experience with complimentary refreshments.
          </p>
        </div>

        {/* Registration Cards */}
        <div 
          ref={cardsReveal.ref}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Online Registration */}
          <div className={`event-card text-center transition-all duration-700 ${
            cardsReveal.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-elegant">
              <Calendar size={28} className="text-primary-foreground" />
            </div>
            
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Online Registration
            </h3>
            
            <div className="flex items-center justify-center space-x-2 mb-4">
              <IndianRupee size={24} className="text-primary" />
              <span className="text-3xl font-heading font-bold text-primary">200</span>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Early bird pricing for advance registration. Secure your spot and avoid last-minute rush.
            </p>
            
            <Button 
              variant="primary"
              className="w-full"
              onClick={() => window.open('https://forms.google.com/your-registration-form', '_blank')}
            >
              <ExternalLink size={16} className="mr-2" />
              Register Online Now
            </Button>
          </div>

          {/* On-spot Registration */}
          <div className={`event-card text-center transition-all duration-700 delay-100 ${
            cardsReveal.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Clock size={28} className="text-accent-foreground" />
            </div>
            
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              On-spot Registration
            </h3>
            
            <div className="flex items-center justify-center space-x-2 mb-4">
              <IndianRupee size={24} className="text-accent" />
              <span className="text-3xl font-heading font-bold text-accent">250</span>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Register directly at the venue on event day. Subject to availability and venue capacity.
            </p>
            
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                On-spot registration available at the venue during event hours
              </p>
            </div>
          </div>
        </div>

        {/* Inclusions */}
        <div 
          ref={inclusionsReveal.ref}
          className={`bg-card rounded-lg p-8 shadow-card mb-12 transition-all duration-1000 delay-200 ${
            inclusionsReveal.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
              What's Included
            </h3>
            <p className="text-muted-foreground">Your registration fee covers all these benefits</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-elegant">
                <UtensilsCrossed size={24} className="text-primary-foreground" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">Lunch Provided</h4>
              <p className="text-sm text-muted-foreground">Complimentary lunch for all registered participants</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4 shadow-glow">
                <UtensilsCrossed size={24} className="text-accent-foreground" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">Snacks Included</h4>
              <p className="text-sm text-muted-foreground">Refreshing snacks and beverages throughout the day</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-elegant">
                <Calendar size={24} className="text-primary-foreground" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">Event Access</h4>
              <p className="text-sm text-muted-foreground">Full access to all technical and non-technical events</p>
            </div>
          </div>
        </div>

        {/* Important Dates */}
        <div 
          ref={datesReveal.ref}
          className={`text-center bg-primary/10 rounded-lg p-6 border border-primary/20 transition-all duration-1000 delay-300 ${
            datesReveal.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
            Important Dates
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-primary">Online Registration Deadline:</span>
              <br />
              <span className="text-muted-foreground">October 25, 2025</span>
            </div>
            <div>
              <span className="font-medium text-accent">Event Date:</span>
              <br />
              <span className="text-muted-foreground">To be announced soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;