import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Events from '@/components/Events';
import Registration from '@/components/Registration';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import RobotLoader from '@/components/RobotLoader';

const Index = () => {
  return (
    <>
      <RobotLoader />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Events />
          <Registration />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
