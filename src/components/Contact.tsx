
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Succès",
      description: "Votre message a été envoyé. Nous vous recontacterons bientôt !",
    });
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="heading-lg mb-4">Nous Contacter</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Laissez-nous vos informations, et nous vous contacterons.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Nom Complet
                  </label>
                  <Input required placeholder="Jean Dupont" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input required type="email" placeholder="jean@exemple.com" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Sujet
                </label>
                <Input required placeholder="Discussion de projet" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Message
                </label>
                <Textarea
                  required
                  placeholder="Écrivez-nous quelques mots à propos de vous..."
                  className="min-h-[150px]"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Nous nous efforçons de répondre à toutes les sollicitations et dans un délai raisonnable.
                </p>
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Envoyer le Message
              </Button>
            </form>
          </div>

          <div className="animate-on-scroll space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-muted-foreground">contact@exemple.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Téléphone</h4>
                <p className="text-muted-foreground">+212 (0) 5 22 00 00 00</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Adresse</h4>
                <p className="text-muted-foreground">
                  123 Rue des Affaires<br />
                  Casablanca, Maroc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
