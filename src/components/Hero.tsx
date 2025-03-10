
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center">
      <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]" />
      
      <div className="container-custom relative z-10 pt-20">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="heading-xl text-white mb-6">
            Transformez Vos Idées en
            <span className="text-primary-foreground block mt-2">Excellence Digitale</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Nous créons des solutions numériques innovantes qui aident les entreprises à prospérer dans le monde moderne.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Commencer
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white hover:bg-white/10">
              En Savoir Plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
