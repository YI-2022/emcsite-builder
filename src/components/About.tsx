
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "./ui/button";

const About = () => {
  const isMobile = useIsMobile();

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="About us"
              className="rounded-2xl shadow-2xl w-full object-cover"
              style={{ height: isMobile ? "300px" : "600px" }}
            />
          </div>
          
          <div className="animate-on-scroll">
            <h2 className="heading-lg mb-6">
              Building Digital Success Stories Since 2010
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              With over a decade of experience in digital innovation, we've helped countless businesses transform their digital presence and achieve remarkable growth.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-2xl font-bold mb-2">200+</h4>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">50+</h4>
                <p className="text-muted-foreground">Expert Team Members</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">15+</h4>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">100%</h4>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
            
            <Button size="lg">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
