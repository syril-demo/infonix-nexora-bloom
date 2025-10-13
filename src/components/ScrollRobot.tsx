import { useEffect, useState } from 'react';
import { Bot } from 'lucide-react';

const ScrollRobot = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      
      setScrollProgress(progress);
      
      if (scrolled > 100) {
        setIsVisible(true);
        
        // Clear existing timeout
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
        
        // Set new timeout to hide after 2 seconds
        const timeout = setTimeout(() => {
          setIsVisible(false);
        }, 2000);
        
        setHideTimeout(timeout);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [hideTimeout]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-8 z-50 pointer-events-none transition-all duration-500"
      style={{
        left: `${scrollProgress}%`,
        transform: 'translateX(-50%)',
      }}
    >
      <div className="relative animate-bounce-slow">
        {/* Robot Body */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
          
          {/* Main Body */}
          <div className="relative bg-secondary border-2 border-primary rounded-2xl p-4 shadow-lg">
            {/* Antenna */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-4 bg-primary">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full animate-pulse" />
            </div>
            
            {/* Head */}
            <div className="flex items-center justify-center gap-3 mb-2">
              {/* Eyes */}
              <div className="w-2 h-2 bg-primary rounded-full animate-blink" />
              <Bot className="w-8 h-8 text-primary" />
              <div className="w-2 h-2 bg-primary rounded-full animate-blink" style={{ animationDelay: '0.1s' }} />
            </div>
            
            {/* Mouth */}
            <div className="w-6 h-1 bg-accent rounded-full mx-auto animate-smile" />
            
            {/* Body Details */}
            <div className="mt-2 flex justify-center gap-1">
              <div className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
              <div className="w-1.5 h-1.5 bg-accent/50 rounded-full" />
              <div className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
            </div>
          </div>

          {/* Arms */}
          <div className="absolute top-4 -left-3 w-2 h-6 bg-primary/80 rounded-full origin-top animate-wave" />
          <div className="absolute top-4 -right-3 w-2 h-6 bg-primary/80 rounded-full origin-top animate-wave-reverse" />
          
          {/* Legs */}
          <div className="absolute -bottom-3 left-2 w-2 h-4 bg-secondary border border-primary rounded-b-lg" />
          <div className="absolute -bottom-3 right-2 w-2 h-4 bg-secondary border border-primary rounded-b-lg" />
        </div>
        
        {/* Progress indicator */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <div className="bg-secondary/90 backdrop-blur-sm border border-primary/30 rounded-full px-3 py-1">
            <span className="text-xs text-primary font-mono">{Math.round(scrollProgress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollRobot;
