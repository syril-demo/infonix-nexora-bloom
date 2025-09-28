import { useEffect, useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(225, 85, 25, 0.1), rgba(225, 85, 25, 0.05)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        {/* Logo Section */}
        <div className="flex justify-center items-center space-x-6 mb-8 fade-in">
          <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-elegant">
            <span className="text-primary-foreground font-heading font-bold text-2xl">UCE</span>
          </div>
          <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center shadow-glow">
            <span className="text-accent-foreground font-heading font-bold text-2xl">I2</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="hero-title mb-6 slide-up">
          Infonix 2.0
        </h1>
        
        <p className="hero-subtitle mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
          National Level Technical Symposium 2K25<br />
          University College of Engineering Villupuram (Anna University)
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center space-x-4 mb-12 fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="countdown-digit">{timeLeft.days}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="text-center">
            <div className="countdown-digit">{timeLeft.hours}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="text-center">
            <div className="countdown-digit">{timeLeft.minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="text-center">
            <div className="countdown-digit">{timeLeft.seconds}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>

        {/* Registration Deadline */}
        <div className="flex justify-center items-center space-x-2 mb-8 text-muted-foreground fade-in" style={{ animationDelay: '0.6s' }}>
          <Calendar size={20} />
          <span className="font-medium">Online Registration Ends: October 25, 2025</span>
        </div>

        <div className="fade-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            variant="accent"
            size="lg"
            className="text-lg px-12 py-6 glow-pulse"
            onClick={() => window.open('https://forms.google.com/your-registration-form', '_blank')}
          >
            Register Now
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