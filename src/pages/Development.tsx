
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Development = () => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate("/quote");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1533237264985-ee62a4bf88a6')] bg-cover bg-center">
          <div className="absolute inset-0 bg-primary/80" />
          <div className="container-custom relative z-10 py-20">
            <div className="max-w-3xl">
              <h1 className="heading-xl text-white mb-6">
                Développement Web & Solutions Logicielles
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Nous créons des solutions numériques sur mesure qui propulsent votre entreprise vers l'avenir.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-lg mb-6">Notre Expertise en Développement</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Nous concevons et développons des applications web et logicielles personnalisées qui répondent parfaitement à vos besoins métier.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>Applications Web Modernes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>Solutions Logicielles sur Mesure</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>Intégration de Systèmes</span>
                  </li>
                </ul>
                <Button size="lg" onClick={handleQuoteClick}>Commencer</Button>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1561883088-039e53143d73" 
                  alt="Développement" 
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Development;
