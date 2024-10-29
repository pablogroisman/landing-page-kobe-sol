import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Cpu, Zap, Shield, Globe, Layers, Book, Code, CheckCircle, Clock, ShieldCheck, UserCheck, Monitor } from "lucide-react";
import Link from "next/link";
import { title } from "process";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Cpu className="h-8 w-8" />
          <span className="text-5xl md:text-6xl font-bold text-left">Kobe</span>
        </div>
        <nav className="flex space-x-4">
          <Link className="hover:text-blue-300 transition-colors transform hover:scale-105" href="#features">
            Features
          </Link>
          <Link className="hover:text-blue-300 transition-colors transform hover:scale-105" href="#why-choose-kobe">
            Why Choose Kobe
          </Link>

          {/* Menú desplegable para Socials */}
          <div className="relative group">
            <button className="hover:text-blue-300 transition-colors transform hover:scale-105">
              Socials
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full bg-blue-700 text-white shadow-lg rounded-lg w-40 p-1 group-hover:block hidden">
              <Link className="block px-4 py-2 hover:bg-blue-500 rounded-md transition-colors" href="https://x.com/KobeAssistant" target="_blank" rel="noopener noreferrer">
                X
              </Link>
              <Link className="block px-4 py-2 hover:bg-blue-500 rounded-md transition-colors" href="https://github.com/vquartaitba/Kobe-Solana" target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </div>
          </div>

          {/* Menú desplegable para About */}
          <div className="relative group">
            <button className="hover:text-blue-300 transition-colors transform hover:scale-105">
              About
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full bg-blue-700 text-white shadow-lg rounded-lg w-40 p-1 group-hover:block hidden">
              <Link className="block px-4 py-2 hover:bg-blue-500 rounded-md transition-colors" href="#created-by-kobe">
                Created By Kobe
              </Link>
              <Link className="block px-4 py-2 hover:bg-blue-500 rounded-md transition-colors" href="#get-started">
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Título y subtítulo de la página */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Intelligent Ally in the Web3 World</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            The all-in-one AI-Powered Solution to Simplify Smart Contract Development on Solana
          </p>
        </section>

        {/* Sección "Bring Your Ideas to Life" */}
        <section id="features" className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">From imagination to implementation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Smart Contract Generation", icon: Zap, description: "Automatically create Solana-compatible contracts using advanced AI" },
              { title: "Testing and Validation", icon: Shield, description: "Ensure your contracts are valid and error-free before deployment" },
              { title: "Compilation and Deployment", icon: Globe, description: "Directly compile and deploy contracts to the Solana blockchain" },
              { title: "Real-Time Blockchain Info", icon: Layers, description: "Access up-to-date blockchain data with Retrieval-Augmented Generation (RAG)" },
            ].map((feature, index) => (
              <Card key={index} className="bg-green-800 bg-opacity-50 border-none transform transition-transform hover:scale-105">
                <CardContent className="p-6">
                  <feature.icon className="h-8 w-8 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sección "Why Choose Kobe" */}
        <section id="why-choose-kobe" className="container mx-auto px-4 py-20 bg-blue-900 bg-opacity-50 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Kobe</h2>
          <div className="space-y-6 text-left">
            {[
              { title: "Fine Tuned Models for Each Task", icon: Code, description: "Optimized models specifically for blockchain development tasks." },
              { title: "Automated Testing", icon: Shield, description: "Kobe ensures your contracts are secure and tested automatically." },
              { title: "Deployment on Chain", icon: Globe, description: "Easily deploy smart contracts on chain after your smartcontract is created." },
              { title: "Create your website", icon: Monitor, description: "Develop your own website with Kobe to grow your web3 project." },
              { title: "Access to Updated Documentation", icon: Book, description: "Stay informed with the latest blockchain documentation through Kobe." },
              { title: "Dependencies Solver", icon: CheckCircle, description: "Automatically solves dependencies using linear programming." },
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 transform transition-transform hover:scale-105">
                <feature.icon className="h-10 w-10 text-blue-400" />
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{feature.title}</h3>
                  <p className="text-lg text-blue-100">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección "3 Pilares de Kobe" */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Kobe empowers you with</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Efficiency", icon: Clock, description: "Kobe reduces development and deployment time" },
              { title: "Security", icon: ShieldCheck, description: "Kobe creates general and specific tests ensuring error-free and optimized contracts" },
              { title: "Ease of Use", icon: UserCheck, description: "User-friendly interface and intuitive process" },
            ].map((pillar, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <pillar.icon className="h-12 w-12 mb-4 mx-auto text-blue-400" />
                <h3 className="text-xl font-semibold mb-2 text-center">{pillar.title}</h3>
                <p className="text-center">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Llamado a la acción */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your Solana development workflow?</h2>
          <p className="text-xl mb-8">Join our waiting list and be the first to experience the power of AI-driven blockchain development.</p>
          <Button size="lg" className="text-lg px-8 py-6">
            I want to stay informed
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>
      </main>

      <footer className="bg-blue-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6" />
              <span className="text-xl font-semibold">Kobe</span>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
              <Link className="hover:text-blue-300 transition-colors" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="hover:text-blue-300 transition-colors" href="/terms">
                Terms of Service
              </Link>
              <Link className="hover:text-blue-300 transition-colors" href="/contact">
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="mt-4 text-center text-sm text-blue-300">
            © {new Date().getFullYear()} Kobe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
