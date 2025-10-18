import { Presentation, Sparkles, Bug, Brain, MessageSquare, Hammer, Gamepad2, Music } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const Events = () => {
  const headerReveal = useScrollReveal();
  const techHeaderReveal = useScrollReveal();
  const nonTechHeaderReveal = useScrollReveal();
  const noteReveal = useScrollReveal();
  const technicalEvents = [
    {
      icon: Presentation,
      name: 'Paper Presentation',
      description: 'Showcase your research and innovative ideas through structured presentations.',
      rules: [
        'Maximum 3 members per team',
        '8 minutes presentation + 4 minutes Q&A',
        'PPT format required',
        'Original research work only'
      ],
      coordinator: 'Raja Vijai Kumar',
      contact: '+91 8778729511',
    },
    {
      icon: Sparkles,
      name: 'Prompt Fusion',
      description: 'Test your AI prompt engineering skills and create innovative solutions.',
      rules: [
        'Individual or team of 2 members',
        'AI tool proficiency required',
        'Time-bound challenges',
        'Creative problem-solving focus'
      ],
      coordinator: 'Raja Vijai Kumar',
      contact: '+91 8190853274',
    },
    {
      icon: Bug,
      name: 'Bug Buster',
      description: 'Debug code and fix errors under pressure in this intensive coding challenge.',
      rules: [
        'Individual participation only',
        'Multiple programming languages',
        'Timed debugging rounds',
        'Points based on speed and accuracy'
      ],
      coordinator: 'Raja Vijai Kumar',
      contact: '+91 8778729511',
    },
    {
      icon: Brain,
      name: 'Quiz Master',
      description: 'Test your technical knowledge across various computer science domains.',
      rules: [
        'Teams of 2-3 members',
        'Multiple rounds of elimination',
        'Covers programming, algorithms, and tech trends',
        'Rapid-fire and buzzer rounds'
      ],
      coordinator: 'Raja Vijai Kumar',
      contact: '+91 8190853274',
    },
  ];

  const nonTechnicalEvents = [
    {
      icon: MessageSquare,
      name: 'Dialo Box',
      description: 'Enact iconic dialogues from movies and literature with dramatic flair.',
      rules: [
        'Individual performance',
        '3-5 minutes duration',
        'Props and costumes allowed',
        'Original delivery encouraged'
      ],
      coordinator: 'Raja Vijai Kumar',
      contact: '+91 8190853274',
    },
    {
      icon: Hammer,
      name: 'Myth Smash',
      description: 'Debunk myths and test your knowledge of facts vs fiction.',
      rules: [
        'Team of 2 members',
        'Rapid-fire myth identification',
        'Explanation required for answers',
        'Multiple elimination rounds'
      ],
      coordinator: 'Raja Vijai Kumar',
      contact: '+91 8778729511',
    },
    {
      icon: Gamepad2,
      name: 'E-Sports',
      description: 'Competitive gaming tournament featuring popular multiplayer games.',
      rules: [
        'Team and solo categories',
        'Multiple game titles',
        'Knockout tournament format',
        'Own devices preferred'
      ],
      coordinator: 'Raja Vijai Kumar',
      contact: '+91 8190853274',
    },
    {
      icon: Music,
      name: 'Tune Hunt',
      description: 'Identify songs and test your music knowledge across genres and eras.',
      rules: [
        'Teams of 2-3 members',
        'Audio clip identification',
        'Multiple music genres covered',
        'Timed rounds with buzzer system'
      ],
      coordinator: 'Raja Vijai Kumar',
      contact: '+91 8778729511',
    },
  ];

  const EventCard = ({ event, category, delay = 0 }: { event: any; category: string; delay?: number }) => {
    const cardReveal = useScrollReveal();
    
    return (
      <div 
        ref={cardReveal.ref}
        className={`flip-card h-[400px] transition-all duration-700 ${
          cardReveal.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="flip-card-inner">
          {/* Front of Card */}
          <div className="flip-card-front event-card">
            <div className={`w-16 h-16 ${category === 'technical' ? 'bg-gradient-primary' : 'bg-gradient-accent'} rounded-lg flex items-center justify-center mb-4 shadow-elegant`}>
              <event.icon size={32} className="text-white" />
            </div>
            
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              {event.name}
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed text-center">
              {event.description}
            </p>

            <div className="mt-auto pt-4 border-t border-border">
              <p className="text-sm text-primary font-medium">
                Hover to see details →
              </p>
            </div>
          </div>

          {/* Back of Card */}
          <div className="flip-card-back event-card">
            <div className="space-y-4 h-full flex flex-col">
              <h3 className="text-xl font-heading font-semibold text-foreground">
                {event.name}
              </h3>
              
              <div className="space-y-2 flex-1 overflow-y-auto">
                <h4 className="text-sm font-semibold text-foreground">Rules:</h4>
                <ul className="space-y-1.5">
                  {event.rules.map((rule: string, idx: number) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-0.5">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-sm space-y-1 pt-3 border-t border-border mt-auto">
                <div className="font-medium text-foreground">
                  Coordinator: {event.coordinator}
                </div>
                <div className="text-muted-foreground">
                  Contact: {event.contact}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="events" className="section-padding min-h-screen">
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
            Events & <span className="bg-gradient-accent bg-clip-text text-transparent">Competitions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Participate in diverse technical and non-technical events designed to challenge 
            your skills, creativity, and knowledge across multiple domains.
          </p>
        </div>

        {/* Technical Events */}
        <div className="mb-16">
          <div 
            ref={techHeaderReveal.ref}
            className={`flex items-center justify-center mb-8 transition-all duration-1000 ${
              techHeaderReveal.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-full font-heading font-semibold text-lg shadow-elegant">
              Technical Events
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalEvents.map((event, index) => (
              <EventCard 
                key={index} 
                event={event} 
                category="technical"
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Non-Technical Events */}
        <div>
          <div 
            ref={nonTechHeaderReveal.ref}
            className={`flex items-center justify-center mb-8 transition-all duration-1000 ${
              nonTechHeaderReveal.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-gradient-accent text-accent-foreground px-6 py-3 rounded-full font-heading font-semibold text-lg shadow-glow">
              Non-Technical Events
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nonTechnicalEvents.map((event, index) => (
              <EventCard 
                key={index} 
                event={event} 
                category="non-technical"
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Note */}
        <div 
          ref={noteReveal.ref}
          className={`text-center mt-12 p-6 bg-muted/50 rounded-lg transition-all duration-1000 ${
            noteReveal.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-muted-foreground">
            <span className="font-semibold">Note:</span> Detailed event rules and guidelines will be shared with registered participants. 
            For specific queries, please contact the respective event coordinators.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;