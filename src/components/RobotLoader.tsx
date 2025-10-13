import { useEffect, useState } from 'react';

const RobotLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 animate-fade-out" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
      {/* Robot Container */}
      <div className="robot-container animate-bounce-slow">
        {/* Robot Head */}
        <div className="relative">
          {/* Antenna */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-1 h-6 bg-primary/50">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full glow-pulse-primary animate-ping" />
          </div>
          
          {/* Head */}
          <div className="w-20 h-16 bg-secondary border-2 border-primary rounded-xl relative overflow-hidden">
            {/* Eyes */}
            <div className="flex gap-4 items-center justify-center mt-4">
              <div className="w-3 h-3 bg-primary rounded-full animate-blink" />
              <div className="w-3 h-3 bg-primary rounded-full animate-blink" style={{ animationDelay: '0.1s' }} />
            </div>
            
            {/* Mouth - Animated */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent rounded-full animate-smile" />
            
            {/* Scan line effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-scan" />
          </div>
        </div>
        
        {/* Robot Body */}
        <div className="w-24 h-20 bg-secondary border-2 border-primary/70 rounded-lg mt-2 relative">
          {/* Chest Panel */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-8 border border-accent/50 rounded flex items-center justify-center">
            <div className="w-8 h-4 bg-gradient-to-r from-primary to-accent opacity-50 rounded animate-pulse" />
          </div>
          
          {/* Loading Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
        
        {/* Robot Arms */}
        <div className="absolute top-20 -left-6 w-5 h-12 bg-secondary border-2 border-primary/70 rounded-lg animate-wave" />
        <div className="absolute top-20 -right-6 w-5 h-12 bg-secondary border-2 border-primary/70 rounded-lg animate-wave-reverse" />
        
        {/* Robot Legs */}
        <div className="flex gap-2 mt-1 justify-center">
          <div className="w-6 h-10 bg-secondary border-2 border-primary/70 rounded-lg" />
          <div className="w-6 h-10 bg-secondary border-2 border-primary/70 rounded-lg" />
        </div>
      </div>
      
      {/* Loading Text */}
      <div className="absolute bottom-1/4 text-primary text-sm font-heading tracking-wider animate-pulse">
        INITIALIZING INFONIX 2.0...
      </div>
    </div>
  );
};

export default RobotLoader;
