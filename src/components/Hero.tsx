import { useEffect, useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import infonixLogo from '@/assets/infonix-logo.png';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-25T23:59:59').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-secondary/50 to-background"
    >
      {/* Grunge Texture Overlay */}
      <div className="absolute inset-0 texture-overlay" />
      
      {/* Glowing Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Distressed Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/50 rounded-full blur-[1px]" style={{ boxShadow: '0 0 30px hsl(18 95% 55% / 0.3)' }}></div>
        <div className="absolute top-60 right-80 w-20 h-20 border-2 border-accent/60 rounded-full blur-[1px]" style={{ boxShadow: '0 0 20px hsl(25 100% 60% / 0.4)' }}></div>
        <div className="absolute bottom-40 right-40 w-48 h-48 border-2 border-primary/40 rounded-full blur-[1px]" style={{ boxShadow: '0 0 40px hsl(18 95% 55% / 0.3)' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-accent/50 rounded-full blur-[1px]" style={{ boxShadow: '0 0 25px hsl(25 100% 60% / 0.4)' }}></div>
        <div className="absolute top-40 left-60 w-16 h-16 border-2 border-primary/60 rounded-full blur-[1px]" style={{ boxShadow: '0 0 20px hsl(18 95% 55% / 0.4)' }}></div>
        <div className="absolute top-96 left-96 w-36 h-36 border-2 border-accent/45 rounded-full blur-[1px]" style={{ boxShadow: '0 0 35px hsl(25 100% 60% / 0.3)' }}></div>
      </div>
      
      {/* Radial Spotlight Effect */}
      <div className="absolute inset-0" style={{ 
        background: 'radial-gradient(ellipse at center, transparent 0%, hsl(0 45% 12% / 0.6) 60%, hsl(0 45% 12%) 100%)'
      }}></div>
      
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        {/* Logo Section */}
        <div className="flex justify-center items-center mb-8 fade-in">
          <img 
            src={infonixLogo} 
            alt="Infonix 2K25 Logo" 
            className="w-56 h-56 lg:w-72 lg:h-72 object-contain brightness-110"
            style={{ 
              filter: 'drop-shadow(0 0 40px rgba(255, 120, 60, 0.8)) drop-shadow(0 0 20px rgba(255, 160, 100, 0.6))',
            }}
          />
        </div>

        {/* Title */}
        <h1 className="text-6xl lg:text-8xl font-heading font-bold tracking-tight mb-4 slide-up">
          <span className="text-primary glow-text drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">INFONIX</span>
          <br />
          <span className="text-accent text-4xl lg:text-6xl glow-text drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">2k25</span>
        </h1>
        
        <div className="w-full max-w-md mx-auto h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-6 fade-in shadow-glow" style={{ animationDelay: '0.2s' }}></div>
        
        <p className="text-xl lg:text-3xl text-primary glow-text mb-3 fade-in" style={{ animationDelay: '0.3s' }}>
          University College of Engineering Villupuram
        </p>
        
        <p className="text-lg lg:text-xl text-muted-foreground mb-6 fade-in" style={{ animationDelay: '0.35s' }}>
          Department of Information Technology
        </p>
        
        <p className="text-2xl lg:text-3xl text-primary mb-8 font-medium fade-in" style={{ animationDelay: '0.4s' }}>
          The Pulse of Innovation
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center space-x-6 mb-12 fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="text-center">
            <div className="cyberpunk-digit">{timeLeft.days}</div>
            <div className="cyberpunk-label">Days</div>
          </div>
          <div className="text-center">
            <div className="cyberpunk-digit">{timeLeft.hours}</div>
            <div className="cyberpunk-label">Hours</div>
          </div>
          <div className="text-center">
            <div className="cyberpunk-digit">{timeLeft.minutes}</div>
            <div className="cyberpunk-label">Minutes</div>
          </div>
          <div className="text-center">
            <div className="cyberpunk-digit">{timeLeft.seconds}</div>
            <div className="cyberpunk-label">Seconds</div>
          </div>
        </div>

        {/* Important Dates */}
        <div className="flex flex-col items-center space-y-3 mb-8">
          <div className="flex items-center space-x-2 text-muted-foreground fade-in" style={{ animationDelay: '0.6s' }}>
            <Calendar size={20} />
            <span className="font-medium">Online Registration Ends: October 25, 2025</span>
          </div>
          <div className="flex items-center space-x-2 text-primary glow-text text-lg fade-in" style={{ animationDelay: '0.65s' }}>
            <Calendar size={22} />
            <span className="font-semibold">Event Date: October 31, 2025</span>
          </div>
        </div>

        <div className="flex justify-center space-x-6 fade-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            variant="primary"
            size="lg"
            className="text-lg px-8 py-4 cyberpunk-button-primary"
            onClick={() => window.open('https://forms.google.com/your-registration-form', '_blank')}
          >
            REGISTER HERE
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4 cyberpunk-button-outline"
            onClick={() => {
              const eventsSection = document.getElementById('events');
              eventsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            EXPLORE EVENTS
          </Button>
        </div>

        {/* Quick Info */}
        <div className="flex justify-center items-center space-x-8 mt-12 text-sm text-muted-foreground fade-in" style={{ animationDelay: '1s' }}>
          <div className="flex items-center space-x-2">
            <Users size={16} />
            <span>Open to All Students</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={16} />
            <span>Technical & Non-Technical Events</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
