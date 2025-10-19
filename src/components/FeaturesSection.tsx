import { Button } from "@/components/ui/button";
import { Clock, Bell, Chrome, MapPin } from "lucide-react";

const features = [
  {
    icon: Clock,
    benefit: "Know Your Next Salah in One Glance",
    description: "Click the SalahFlow icon to see the exact time left until your next prayer. No more tab-switching or guesswork – stay focused and prepared.",
  },
  {
    icon: Bell,
    benefit: "Reminders That Fit Your Schedule",
    description: "Set notifications for 5, 10, or 30 minutes before each salah. It's like a gentle nudge from a friend, ensuring you never miss Fajr or Isha, no matter how busy you are.",
  },
  {
    icon: Chrome,
    benefit: "Prayer Times Right Where You Work",
    description: "Built for Muslims who live in Chrome. No apps, no ads – just a clean, instant way to stay on top of your prayers.",
  },
  {
    icon: MapPin,
    benefit: "Accurate Times, Wherever You Are",
    description: "SalahFlow auto-adjusts to your location for precise prayer times, so you're covered whether you're at the office or working remotely.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-background py-20 border-t-4 border-primary border-b-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
              SalahFlow: Your Prayer Companion in Chrome
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple, reliable, and designed for your busy life – stay connected to your faith without missing a beat.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-300 group hover:border-primary"
              >
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {feature.benefit}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary-light text-secondary-foreground text-lg px-8 py-6 rounded-xl shadow-lg"
            >
              Add SalahFlow to Chrome – Free!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
