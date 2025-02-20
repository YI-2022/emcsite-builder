
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
      title: "Success",
      description: "Your message has been sent. We'll get back to you soon!",
    });
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="heading-lg mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Send us a message
            and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Full Name
                  </label>
                  <Input required placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input required type="email" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Subject
                </label>
                <Input required placeholder="Project Discussion" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Message
                </label>
                <Textarea
                  required
                  placeholder="Tell us about your project..."
                  className="min-h-[150px]"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div className="animate-on-scroll space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Email Us</h4>
                <p className="text-muted-foreground">contact@example.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Call Us</h4>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Visit Us</h4>
                <p className="text-muted-foreground">
                  123 Business Street<br />
                  New York, NY 10001
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
