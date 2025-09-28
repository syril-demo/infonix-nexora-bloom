import { useEffect, useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import infonixLogo from '@/assets/infonix-logo.jpg';

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Cyberpunk Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/30 rounded-full"></div>
        <div className="absolute top-60 right-80 w-20 h-20 border-2 border-accent/40 rounded-full"></div>
        <div className="absolute bottom-40 right-40 w-48 h-48 border-2 border-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-accent/30 rounded-full"></div>
        <div className="absolute top-40 left-60 w-16 h-16 border-2 border-primary/40 rounded-full"></div>
        <div className="absolute top-96 left-96 w-36 h-36 border-2 border-accent/25 rounded-full"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        {/* Logo Section */}
        <div className="flex justify-center items-center mb-8 fade-in">
          <img 
            src={infonixLogo} 
            alt="Infonix 2K25 Logo" 
            className="w-48 h-48 lg:w-64 lg:h-64 object-contain drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]"
          />
        </div>

        {/* Title */}
        <h1 className="text-6xl lg:text-8xl font-heading font-bold tracking-tight mb-4 slide-up">
          <span className="text-primary glow-text">INFONIX</span>
          <br />
          <span className="text-accent text-4xl lg:text-6xl">2k25</span>
        </h1>
        
        <div className="w-full max-w-md mx-auto h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-6 fade-in" style={{ animationDelay: '0.2s' }}></div>
        
        <p className="text-xl lg:text-2xl text-primary mb-4 font-medium fade-in" style={{ animationDelay: '0.3s' }}>
          The Pulse of Innovation
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.4s' }}>
          National Level Technical Symposium 2K25<br />
          University College of Engineering Villupuram.
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

        {/* Registration Deadline */}
        <div className="flex justify-center items-center space-x-2 mb-8 text-muted-foreground fade-in" style={{ animationDelay: '0.6s' }}>
          <Calendar size={20} />
          <span className="font-medium">Online Registration Ends: October 25, 2025</span>
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
