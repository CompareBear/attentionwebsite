import { Brain, ArrowRight } from 'lucide-react';
import { Button } from './Button';

function MainHero() {
  return (
    <header className="container px-4 py-20 text-center">
      <Brain className="w-16 h-16 mx-auto mb-8 text-indigo-400 animate-float" />
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
        Reclaim Your Digital Life
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
        In a world of endless notifications and digital distractions, 
        we help you take back control of your most valuable resource: your attention.
      </p>
      <div className="flex gap-4 justify-center">
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </div>
    </header>
  );
}

function SecondaryHero() {
  return (
    <section className="bg-gray-800 py-20">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Transform Your Digital Habits
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Our science-backed approach helps you build better digital habits, 
              increase productivity, and find more time for what truly matters in your life.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Reduce digital overwhelm',
                'Improve focus and productivity',
                'Create lasting behavioral change'
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="w-5 h-5 text-indigo-400" />
                  {item}
                </li>
              ))}
            </ul>
            <Button className="w-full sm:w-auto">
              Start Your Journey
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-600 rounded-lg transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Person working mindfully at desk"
                className="relative rounded-lg shadow-xl transform transition-transform hover:-translate-y-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <>
      <MainHero />
      <SecondaryHero />
    </>
  );
}