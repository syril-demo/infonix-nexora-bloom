import { useEffect, useState } from 'react';
import { Bot, Sparkles } from 'lucide-react';

const ScrollRobot = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      
      if (scrolled > 100 && !isVisible && !isExiting) {
        setIsVisible(true);
        setIsExiting(false);
        
        // Clear existing timeout
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
        
        // Start exit animation after 1.8 seconds, complete hide after 2 seconds
        const timeout = setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setIsVisible(false);
            setIsExiting(false);
          }, 500);
        }, 1800);
        
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
  }, [hideTimeout, isVisible, isExiting]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 pointer-events-none transition-all duration-500 ${
        isExiting 
          ? 'opacity-0 translate-x-20 translate-y-20' 
          : 'opacity-100 translate-x-0 translate-y-0'
      }`}
      style={{
        animation: isExiting ? 'none' : 'slideInFromRight 0.5s ease-out'
      }}
    >
      <div className="relative">
        {/* Speech Bubble */}
        <div className="absolute -top-12 right-0 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <div className="relative bg-gradient-to-br from-cyan-500/90 to-blue-600/90 backdrop-blur-md rounded-lg px-2 py-1 shadow-lg border border-cyan-400/50">
            <div className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-white animate-pulse" />
              <span className="text-xs font-medium text-white whitespace-nowrap">
                Keep scrolling! 
              </span>
            </div>
            {/* Bubble tail */}
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-gradient-to-br from-cyan-500/90 to-blue-600/90 rotate-45 border-r border-b border-cyan-400/50" />
          </div>
        </div>

        {/* Robot Body Container */}
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-2xl rounded-full animate-pulse scale-150" />
          
          {/* Robot */}
          <div className="relative scale-75">
            {/* Main Body */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-400 rounded-2xl p-2.5 shadow-2xl">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl" />
              
              {/* Antenna */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-1 h-4 bg-gradient-to-t from-cyan-400 to-cyan-300">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50">
                  <div className="absolute inset-0.5 bg-white rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                </div>
              </div>
              
              {/* Head/Screen */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-1.5 border border-cyan-400/50 mb-1.5">
                {/* Eyes */}
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="relative w-1.5 h-1.5">
                    <div className="absolute inset-0 bg-cyan-400 rounded-full animate-blink shadow-lg shadow-cyan-500/50" />
                    <div className="absolute inset-0.5 bg-cyan-300 rounded-full animate-blink" />
                  </div>
                  <Bot className="w-4 h-4 text-cyan-400" />
                  <div className="relative w-1.5 h-1.5" style={{ animationDelay: '0.1s' }}>
                    <div className="absolute inset-0 bg-cyan-400 rounded-full animate-blink shadow-lg shadow-cyan-500/50" />
                    <div className="absolute inset-0.5 bg-cyan-300 rounded-full animate-blink" />
                  </div>
                </div>
                
                {/* Smile */}
                <div className="w-4 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto animate-smile shadow-sm shadow-cyan-500/50" />
              </div>
              
              {/* Chest Panel */}
              <div className="flex justify-center gap-1 mb-1.5">
                <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse shadow-sm shadow-cyan-500/50" />
                <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse shadow-sm shadow-blue-500/50" style={{ animationDelay: '0.3s' }} />
                <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse shadow-sm shadow-cyan-500/50" style={{ animationDelay: '0.6s' }} />
              </div>
              
              {/* Power Core */}
              <div className="w-4 h-4 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-white/30 to-transparent" />
              </div>
            </div>

            {/* Arms */}
            <div className="absolute top-4 -left-2.5 w-1.5 h-5 bg-gradient-to-b from-cyan-400 to-cyan-500 rounded-full origin-top animate-wave shadow-lg shadow-cyan-500/30 border border-cyan-300" />
            <div className="absolute top-4 -right-2.5 w-1.5 h-5 bg-gradient-to-b from-cyan-400 to-cyan-500 rounded-full origin-top animate-wave-reverse shadow-lg shadow-cyan-500/30 border border-cyan-300" />
            
            {/* Legs */}
            <div className="absolute -bottom-2.5 left-2 w-1.5 h-3 bg-gradient-to-b from-gray-800 to-gray-900 border border-cyan-400 rounded-b-lg shadow-lg" />
            <div className="absolute -bottom-2.5 right-2 w-1.5 h-3 bg-gradient-to-b from-gray-800 to-gray-900 border border-cyan-400 rounded-b-lg shadow-lg" />
            
            {/* Base/Feet glow */}
            <div className="absolute -bottom-2.5 left-1.5 w-2 h-0.5 bg-cyan-400/50 blur-sm rounded-full" />
            <div className="absolute -bottom-2.5 right-1.5 w-2 h-0.5 bg-cyan-400/50 blur-sm rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollRobot;
