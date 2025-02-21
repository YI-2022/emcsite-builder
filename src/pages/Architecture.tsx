
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Architecture = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center">
          <div className="absolute inset-0 bg-primary/80" />
          <div className="container-custom relative z-10 py-20">
            <div className="max-w-3xl">
              <h1 className="heading-xl text-white mb-6">
                Architecture SI
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Construisons ensemble une infrastructure informatique robuste et évolutive pour votre entreprise.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-lg mb-6">Solutions d'Architecture</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Notre expertise en architecture des systèmes d'information vous permet de construire une infrastructure technologique performante et sécurisée.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>Architecture Cloud</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>Sécurité des Systèmes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>Infrastructure Évolutive</span>
                  </li>
                </ul>
                <Button size="lg">Découvrir Nos Solutions</Button>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31" 
                  alt="Architecture" 
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

export default Architecture;
