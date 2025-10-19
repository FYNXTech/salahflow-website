import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    quote: "SalahFlow keeps me on track during crazy workdays. The notifications are a game-changer!",
    name: "Yusuf",
    role: "Data Analyst",
    location: "Riyadh",
    avatar: "👨🏽‍💼",
  },
  {
    quote: "I love how simple it is. Now I can focus on my designs and still catch every salah.",
    name: "Noor",
    role: "Freelance Designer",
    location: "Toronto",
    avatar: "👩🏻‍💻",
  },
  {
    quote: "Perfect for my office job. No more checking my phone – it's all in my browser!",
    name: "Zainab",
    role: "HR Manager",
    location: "Jakarta",
    avatar: "👩🏽‍💼",
  },
];

const TestimonialsSection = () => {
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollReveal(0.2);
  
  return (
    <section className="bg-background py-20 border-t-4 border-primary border-b-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
              Muslims Like You Are Praying on Time with SalahFlow
            </h2>
          </div>
          
          <div 
            ref={testimonialsRef}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-primary/5 rounded-2xl p-8 space-y-6 border border-primary/20 hover:shadow-xl transition-all duration-500 hover:border-primary hover:-translate-y-2 ${
                  testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4 pt-4 border-t border-primary/10">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl border-2 border-primary">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-secondary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 border border-primary/30">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-lg font-semibold text-secondary">
                Rated 4.9/5 on Chrome Web Store
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
