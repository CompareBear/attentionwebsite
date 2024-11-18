import { Brain, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './Button';

function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h3 className="text-lg font-semibold mb-2 text-white">Stay Updated</h3>
      <p className="text-gray-400 text-sm mb-4">
        Get tips and insights about digital wellness delivered to your inbox.
      </p>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          required
        />
        <Button type="submit">Subscribe</Button>
      </div>
    </form>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-indigo-400">
              <Brain className="w-8 h-8" />
              <span className="font-bold text-xl">Attention Matters</span>
            </div>
            <p className="text-gray-300">
              Helping you reclaim your focus and digital well-being in an increasingly distracted world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'About', 'Blog', 'Resources', 'Support'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@attentionmatters.com" className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  hello@attentionmatters.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  (123) 456-7890
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  San Francisco, CA
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© {currentYear} Attention Matters. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}