import { BookOpen, Award, Users, Zap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const About = () => {
  const headerReveal = useScrollReveal();
  const descReveal = useScrollReveal();
  const cardsReveal = useScrollReveal();
  const universityReveal = useScrollReveal();
  const features = [
    {
      icon: BookOpen,
      title: 'Knowledge Sharing',
      description: 'Platform to showcase research and innovative ideas through structured presentations.',
    },
    {
      icon: Award,
      title: 'Excellence Recognition',
      description: 'Recognizing and celebrating outstanding technical and creative achievements.',
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Connect with fellow students, researchers, and industry professionals.',
    },
    {
      icon: Zap,
      title: 'Innovation Hub',
      description: 'Fostering innovation through competitive technical challenges and events.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
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
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Infonix 2.0</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Infonix 2.0 is the premier National Level Technical Symposium hosted by the 
            University College of Engineering Villupuram (Anna University). This prestigious 
            event brings together brilliant minds from across the nation to showcase innovation, 
            share knowledge, and compete in diverse technical and non-technical challenges.
          </p>
        </div>

        {/* Main Description */}
        <div 
          ref={descReveal.ref}
          className={`bg-card rounded-lg p-8 lg:p-12 shadow-card mb-16 transition-all duration-1000 delay-200 ${
            descReveal.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Empowering Innovation & Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our symposium serves as a dynamic platform where students can demonstrate 
                their technical prowess, creative thinking, and problem-solving abilities. 
                From cutting-edge paper presentations to exciting debugging challenges, 
                Infonix 2.0 offers diverse opportunities for learning and growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Join us in this celebration of knowledge, innovation, and academic excellence. 
                Experience world-class facilities, expert guidance, and networking opportunities 
                that will shape your future in technology and beyond.
              </p>
            </div>
            <div 
              ref={cardsReveal.ref}
              className="grid grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`event-card text-center transition-all duration-700 ${
                    cardsReveal.isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-elegant">
                    <feature.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* University Info */}
        <div 
          ref={universityReveal.ref}
          className={`text-center transition-all duration-1000 delay-500 ${
            universityReveal.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
            University College of Engineering Villupuram
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A constituent college of Anna University, UCE Villupuram is committed to 
            providing quality technical education and fostering research excellence. 
            Our institution continues to be a beacon of innovation and academic achievement 
            in the field of engineering and technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;