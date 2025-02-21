
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Quote = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Succès",
      description: "Votre demande a été envoyée. Nous vous recontacterons bientôt !",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0')] bg-cover bg-center">
          <div className="absolute inset-0 bg-primary/80" />
          <div className="container-custom relative z-10 py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl text-white mb-6">
                Demandez un Devis
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                Parlez-nous de votre projet et obtenez un devis personnalisé
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-lg">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Nom Complet
                  </label>
                  <Input required placeholder="Jean Dupont" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email Professionnel
                  </label>
                  <Input required type="email" placeholder="jean@entreprise.com" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Entreprise
                  </label>
                  <Input required placeholder="Nom de votre entreprise" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Téléphone
                  </label>
                  <Input required type="tel" placeholder="+212 XXX XXX XXX" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Type de Service
                </label>
                <select 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="development">Développement Web & Solutions Logicielles</option>
                  <option value="architecture">Architecture SI</option>
                  <option value="marketing">Marketing Digital</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Description du Projet
                </label>
                <Textarea
                  required
                  placeholder="Décrivez votre projet, vos objectifs et vos besoins spécifiques..."
                  className="min-h-[200px]"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Plus votre description sera détaillée, plus notre devis sera précis.
                </p>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Budget Estimé (en MAD)
                </label>
                <select 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="">Sélectionnez une fourchette de budget</option>
                  <option value="10k-50k">10 000 - 50 000 MAD</option>
                  <option value="50k-100k">50 000 - 100 000 MAD</option>
                  <option value="100k-200k">100 000 - 200 000 MAD</option>
                  <option value="200k+">200 000+ MAD</option>
                </select>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Envoyer la Demande de Devis
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;
