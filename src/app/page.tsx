import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Star, Users, BarChart3, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-950">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]"></div>
        {/* Animated blobs */}
        <div className="absolute top-10 right-10 w-2/3 h-2/3 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-1/2 h-1/2 bg-blue-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-light text-white">
                <span className="font-bold text-blue-400">Proj</span>ex
              </h1>
            </div>
            
            <nav className="hidden md:block">
              <ul className="flex gap-8">
                <li><a href="#features" className="text-gray-300 hover:text-white transition">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition">How It Works</a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a></li>
              </ul>
            </nav>
            
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-gray-300 hover:text-white transition hidden md:block">Sign In</Link>
              <Link href="/workspace" className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition text-sm md:text-base shadow-lg shadow-blue-500/20">
                Get Started
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="md:w-1/2">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4">Project Management Reimagined</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Simplify Your <span className="text-blue-400">Workflow</span>
                </h2>
              </div>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                An intelligent project management platform designed to boost productivity and streamline collaboration. Get more done with less effort.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/workspace" className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition shadow-lg shadow-blue-500/20 flex items-center gap-2 font-medium">
                  Try for Free <ArrowRight size={16} />
                </Link>
                <a href="#how-it-works" className="px-6 py-3 bg-transparent border border-gray-600 text-white rounded-full hover:bg-white/5 transition">
                  Learn More
                </a>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-950 flex items-center justify-center">
                      <span className="text-xs text-white">{i}</span>
                    </div>
                  ))}
                </div>
                <p>Join 10,000+ teams already using Projex</p>
              </div>
            </div>
            
            <div className="md:w-1/2 relative w-full max-w-[500px] mx-auto">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50 shadow-2xl p-2 sm:p-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg p-1">
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    {/* Dashboard preview image */}
                    <div className="aspect-video w-full relative bg-gray-800 flex items-center justify-center">
                      <Image 
                        src="/dashboard.png" 
                        alt="Dashboard Preview"
                        fill
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 600px"
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements - adjusted for better mobile display */}
              <div className="absolute -top-4 sm:-top-6 -right-2 sm:-right-6 bg-blue-500/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg">
                <Users className="text-white" size={16} />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 bg-gray-800/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg">
                <Calendar className="text-blue-400" size={16} />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4">Features</span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">Powerful tools that help your team stay organized, focused, and productive.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="text-blue-400" size={24} />,
                title: "Team Collaboration",
                description: "Real-time collaboration tools that keep everyone in sync and working together efficiently."
              },
              {
                icon: <Calendar className="text-blue-400" size={24} />,
                title: "Task Management",
                description: "Organize tasks with deadlines, priorities, and assignees to ensure nothing falls through the cracks."
              },
              {
                icon: <BarChart3 className="text-blue-400" size={24} />,
                title: "Analytics & Insights",
                description: "Gain valuable insights into your team's performance and project progress with visual reports."
              },
              {
                icon: <Star className="text-blue-400" size={24} />,
                title: "Goal Tracking",
                description: "Set team and individual goals, track progress, and celebrate achievements together."
              },
              {
                icon: <ArrowRight className="text-blue-400" size={24} />,
                title: "Workflow Automation",
                description: "Automate repetitive tasks and streamline processes to focus on what matters most."
              },
              {
                icon: <Check className="text-blue-400" size={24} />,
                title: "Resource Management",
                description: "Efficiently allocate resources across projects to maximize productivity and prevent burnout."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-900/50 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-900/30">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4">How It Works</span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple & Intuitive</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">Get started in minutes with our easy-to-use platform that requires no training.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[1, 2, 3].map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-8 mb-12">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
                    {step}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {index === 0 ? "Create your workspace" : index === 1 ? "Invite your team members" : "Start managing projects"}
                  </h4>
                  <p className="text-gray-400 mb-4">
                    {index === 0 
                      ? "Sign up and create your personalized workspace in seconds. No credit card required." 
                      : index === 1 
                        ? "Add team members with customizable permissions to collaborate efficiently."
                        : "Create projects, assign tasks, track progress, and achieve your goals together."
                    }
                  </p>
                  {index === 2 && (
                    <Link href="/workspace" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                      Get Started Now <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4">Pricing</span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">No hidden fees or complicated tiers. Choose the plan that works for your team.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "Free",
                description: "Perfect for individuals and small projects",
                features: ["Up to 5 team members", "3 projects", "Basic analytics", "24/7 support"]
              },
              {
                name: "Pro",
                price: "$12",
                popular: true,
                description: "Ideal for growing teams and businesses",
                features: ["Unlimited team members", "Unlimited projects", "Advanced analytics", "Priority support", "Custom workflows"]
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large organizations with specific needs",
                features: ["Everything in Pro", "Dedicated account manager", "Custom integrations", "Advanced security", "Training sessions"]
              }
            ].map((plan, index) => (
              <div key={index} className={`p-6 rounded-xl border ${plan.popular ? 'bg-blue-500/10 border-blue-500/50' : 'bg-gray-900/50 border-gray-800/50'} relative`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  {plan.price !== "Free" && plan.price !== "Custom" && <span className="text-gray-400">/month per user</span>}
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check size={16} className={plan.popular ? 'text-blue-400' : 'text-gray-400'} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={index === 0 ? "/workspace" : "/contact"} 
                  className={`block text-center py-2 px-4 rounded-lg ${
                    plan.popular 
                      ? 'bg-blue-500 text-white hover:bg-blue-600' 
                      : 'bg-transparent border border-gray-600 text-white hover:bg-white/5'
                  } transition`}>
                  {index === 0 ? "Start for Free" : index === 1 ? "Try Pro" : "Contact Sales"}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center bg-blue-500/5 rounded-2xl p-10 border border-gray-800/50">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to transform your workflow?</h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Join thousands of teams who have already simplified their project management with Projex.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/workspace" className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition font-medium shadow-lg shadow-blue-500/20">
                Get Started Free
              </Link>
              <Link href="/demo" className="px-8 py-3 bg-transparent border border-gray-600 text-white rounded-full hover:bg-white/5 transition font-medium">
                Request Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div>
                <h5 className="text-white font-bold mb-4">Product</h5>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-gray-400 hover:text-white transition text-sm">Features</a></li>
                  <li><a href="#pricing" className="text-gray-400 hover:text-white transition text-sm">Pricing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Roadmap</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-white font-bold mb-4">Company</h5>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-gray-400 hover:text-white transition text-sm">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Blog</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-white font-bold mb-4">Resources</h5>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Help Center</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Community</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-white font-bold mb-4">Legal</h5>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h1 className="text-xl font-light text-white tracking-wide mb-2">
                  <span className="font-bold text-blue-400">Proj</span>ex
                </h1>
                <p className="text-gray-500 text-sm">Simplify your workflow, amplify your results</p>
              </div>
              <div className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Projex. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
