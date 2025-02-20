
import { useState } from "react";
import { Card } from "./ui/card";
import { Globe, Code, BarChart } from "lucide-react";

const services = [
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Web Development",
    description: "Custom websites and web applications built with the latest technologies.",
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Software Solutions",
    description: "Tailored software solutions to streamline your business processes.",
  },
  {
    icon: <BarChart className="h-10 w-10" />,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns to grow your online presence.",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="heading-lg mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business succeed in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`p-8 transition-all duration-300 animate-on-scroll hover:shadow-lg ${
                hoveredIndex === index ? "transform -translate-y-2" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="mb-6 text-primary">{service.icon}</div>
              <h3 className="heading-md mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
