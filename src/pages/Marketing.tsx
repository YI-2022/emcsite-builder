
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Marketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1533750516457-a7f992034fec')] bg-cover bg-center">
          <div className="absolute inset-0 bg-primary/80" />
          <div className="container-custom relative z-10 py-20">
            <div className="max-w-3xl">
              <h1 className="heading-xl text-white mb-6">
                Marketing Digital
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Boostez votre présence en ligne avec nos stratégies marketing innovantes.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-lg mb-6">Solutions Marketing</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Nous développons des stratégies marketing digitales personnalisées pour maximiser votre visibilité et votre croissance.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>SEO & SEA</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>Marketing de Contenu</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>Réseaux Sociaux</span>
                  </li>
                </ul>
                <Button size="lg">Booster Votre Présence</Button>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="Marketing" 
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

export default Marketing;
