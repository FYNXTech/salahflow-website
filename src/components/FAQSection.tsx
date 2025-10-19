import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is SalahFlow free?",
    answer: "100% free to install and use – no hidden costs. We believe every Muslim should have easy access to prayer reminders.",
  },
  {
    question: "Are the prayer times accurate?",
    answer: "Yes, we use trusted prayer time calculations and geolocation technology. You can also customize calculation methods based on your preferred madhab.",
  },
  {
    question: "Does it work offline?",
    answer: "Once prayer times are loaded for your location, countdowns and notifications work seamlessly even when you're offline.",
  },
  {
    question: "Is my data safe?",
    answer: "Absolutely. We prioritize your privacy – SalahFlow doesn't track your browsing activity. We only use your location to calculate accurate prayer times.",
  },
  {
    question: "Can I customize notification times?",
    answer: "Yes! You can set custom notification times for each prayer – whether you need a 5-minute heads up or a 30-minute reminder, it's completely up to you.",
  },
  {
    question: "Will this slow down my browser?",
    answer: "Not at all. SalahFlow is lightweight and optimized to run smoothly in the background without affecting your browser's performance.",
  },
];

const FAQSection = () => {
  return (
    <section className="gradient-section py-20 relative overflow-hidden">
      {/* Islamic arch pattern */}
      <div className="absolute top-10 left-10 w-32 h-40 border-4 border-secondary/10 rounded-t-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-40 border-4 border-secondary/10 rounded-t-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Got Questions? We've Got You Covered
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-primary-foreground/90 backdrop-blur-sm rounded-xl border border-primary-foreground/20 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-lg font-semibold text-secondary hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
