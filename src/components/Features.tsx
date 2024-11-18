import { Clock, Focus, PhoneOff } from 'lucide-react';
import { Button } from './Button';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700">
      <Icon className="w-8 h-8 mb-4 text-indigo-400" />
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export function Features() {
  const features = [
    {
      icon: Focus,
      title: "Deep Focus",
      description: "Learn techniques to achieve and maintain deep, meaningful focus in a distracted world."
    },
    {
      icon: Clock,
      title: "Time Awareness",
      description: "Understand where your attention goes and make conscious choices about your time."
    },
    {
      icon: PhoneOff,
      title: "Digital Balance",
      description: "Develop a healthy relationship with technology without sacrificing productivity."
    }
  ];

  return (
    <section className="container px-4 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Why Digital Wellness Matters</h2>
        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">The Attention Crisis</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                In today's hyperconnected world, our attention is increasingly fragmented. The average person spends over 7 hours daily on digital devices, with constant notifications interrupting their flow of thought every few minutes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This constant digital distraction isn't just annoying - it's affecting our ability to focus, our mental well-being, and our productivity.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Our Solution</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                We combine behavioral science with practical tools to help you rebuild your attention span and create healthy digital habits that stick.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our approach isn't about digital detox - it's about finding the right balance that works for your lifestyle and goals.
              </p>
              <Button className="w-full">Start Your Journey</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}