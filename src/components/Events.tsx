import { Code, Presentation, Palette, Link, Gamepad2, MessageSquare, Users2 } from 'lucide-react';

const Events = () => {
  const technicalEvents = [
    {
      icon: Presentation,
      name: 'Paper Presentation',
      description: 'Platform to showcase research via structured talks. Present your innovative ideas and research findings.',
      details: 'Max 3 members per team • 8 min presentation + 4 min Q&A',
      contact: '+91 8778729511',
    },
    {
      icon: Code,
      name: 'Debugging Challenge',
      description: 'Test your coding skills in this intensive code debugging competition. Find and fix errors under pressure.',
      details: 'Individual participation • Time-based challenge',
      contact: '+91 8190853274',
    },
    {
      icon: Palette,
      name: 'Poster Presentation',
      description: 'Visual display of innovative ideas and concepts. Create compelling visual narratives of your projects.',
      details: 'Max 2 members per team • A1 size poster format',
      contact: '+91 8778729511',
    },
  ];

  const nonTechnicalEvents = [
    {
      icon: Link,
      name: 'Connection',
      description: 'Word-association and networking challenge. Test your general knowledge and quick thinking abilities.',
      details: 'Team event • Multiple rounds of elimination',
      contact: '+91 8190853274',
    },
    {
      icon: Gamepad2,
      name: 'E-Sport Tournament',
      description: 'Competitive gaming event featuring popular multiplayer games. Show your gaming prowess.',
      details: 'Team & individual categories • Various game titles',
      contact: '+91 8778729511',
    },
    {
      icon: MessageSquare,
      name: 'Dialogue Sharing',
      description: 'Enact or deliver iconic dialogues from movies, literature, or create your own. Showcase your acting skills.',
      details: 'Individual performance • 3-5 minutes duration',
      contact: '+91 8190853274',
    },
    {
      icon: Users2,
      name: 'Debate Competition',
      description: 'Structured debating on contemporary topics. Test your argumentation and public speaking skills.',
      details: 'Max 2 members per team • Multiple rounds',
      contact: '+91 8778729511',
    },
  ];

  const EventCard = ({ event, category }: { event: any; category: string }) => (
    <div className="event-card h-full">
      <div className={`w-12 h-12 ${category === 'technical' ? 'bg-gradient-primary' : 'bg-gradient-accent'} rounded-lg flex items-center justify-center mb-4 shadow-elegant`}>
        <event.icon size={24} className="text-white" />
      </div>
      
      <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
        {event.name}
      </h3>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {event.description}
      </p>
      
      <div className="space-y-2 mb-4">
        <div className="text-sm font-medium text-foreground">
          {event.details}
        </div>
        <div className="text-sm text-muted-foreground">
          Contact: {event.contact}
        </div>
      </div>
    </div>
  );

  return (
    <section id="events" className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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
          <div className="flex items-center justify-center mb-8">
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
              />
            ))}
          </div>
        </div>

        {/* Non-Technical Events */}
        <div>
          <div className="flex items-center justify-center mb-8">
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
              />
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg">
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