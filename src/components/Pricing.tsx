import { Check } from 'lucide-react';
import { Button } from './Button';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

function PricingTier({ name, price, description, features, highlighted = false }: PricingTierProps) {
  return (
    <div className={`p-8 rounded-xl ${
      highlighted 
        ? 'bg-gray-800 border-2 border-indigo-500 shadow-xl' 
        : 'bg-gray-800 border border-gray-700'
    }`}>
      <h3 className="text-2xl font-bold mb-2 text-white">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-white">{price}</span>
        {price !== 'Free' && <span className="text-gray-300">/month</span>}
      </div>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-gray-300">
            <Check className="w-5 h-5 text-indigo-400" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant={highlighted ? 'primary' : 'secondary'}
        className="w-full"
      >
        Get Started
      </Button>
    </div>
  );
}

export function Pricing() {
  const tiers = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for getting started with digital mindfulness",
      features: [
        "Basic attention tracking",
        "Daily focus tips",
        "Weekly screen time report"
      ]
    },
    {
      name: "Pro",
      price: "$9",
      description: "Advanced features for serious focus enhancement",
      features: [
        "Everything in Basic",
        "Detailed analytics",
        "Custom focus schedules",
        "Priority support"
      ],
      highlighted: true
    },
    {
      name: "Team",
      price: "$29",
      description: "Help your entire team stay focused and productive",
      features: [
        "Everything in Pro",
        "Team analytics",
        "Admin dashboard",
        "Training workshops"
      ]
    }
  ];

  return (
    <section className="container px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Choose Your Plan</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier) => (
          <PricingTier key={tier.name} {...tier} />
        ))}
      </div>
    </section>
  );
}