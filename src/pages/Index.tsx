
import React from 'react';
import MatrixBackground from '../components/MatrixBackground';
import FloatingShapes from '../components/FloatingShapes';
import GlitchText from '../components/GlitchText';
import TechOrbit from '../components/TechOrbit';
import HolographicInterface from '../components/HolographicInterface';
import CyberButton from '../components/CyberButton';
import { Zap, Shield, Code } from 'lucide-react';

const Index = () => {
  const handleEnterWorld = () => {
    // Add navigation logic here
    console.log('Entering the cyber world...');
  };

  return (
    <div className="min-h-screen bg-gradient-cyber text-white overflow-hidden relative">
      {/* Background Effects */}
      <MatrixBackground />
      <FloatingShapes />
      
      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Main Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Developer Name with Glitch Effect */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-black font-orbitron">
                  <GlitchText text="CYBER" className="block" />
                  <span className="text-gradient block mt-2">DEVELOPER</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-300 font-mono">
                  Full-Stack Engineer • Digital Architect • Code Warrior
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="glass-card neon-border rounded-lg p-4 text-center">
                  <Code className="w-8 h-8 text-cyber-blue mx-auto mb-2 glow-text" />
                  <div className="text-2xl font-bold text-cyber-blue">50+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
                
                <div className="glass-card neon-border rounded-lg p-4 text-center">
                  <Zap className="w-8 h-8 text-cyber-pink mx-auto mb-2 glow-text" />
                  <div className="text-2xl font-bold text-cyber-pink">99%</div>
                  <div className="text-xs text-gray-400">Uptime</div>
                </div>
                
                <div className="glass-card neon-border rounded-lg p-4 text-center">
                  <Shield className="w-8 h-8 text-cyber-green mx-auto mb-2 glow-text" />
                  <div className="text-2xl font-bold text-cyber-green">24/7</div>
                  <div className="text-xs text-gray-400">Secure</div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-8">
                <CyberButton onClick={handleEnterWorld}>
                  ENTER MY WORLD
                </CyberButton>
              </div>
            </div>

            {/* Right Side - Interactive Elements */}
            <div className="relative space-y-8">
              {/* Tech Orbit */}
              <div className="flex justify-center mb-12">
                <TechOrbit />
              </div>
              
              {/* Holographic Interface */}
              <div className="flex justify-center lg:justify-end">
                <HolographicInterface />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Section - Additional Info */}
        <section className="relative z-20 px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card neon-border rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold text-gradient mb-4">
                Welcome to the Future of Web Development
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Where cutting-edge technology meets stunning design. Experience the next generation 
                of digital interfaces crafted with precision and innovation.
              </p>
              
              {/* Tech Stack Badges */}
              <div className="flex flex-wrap justify-center gap-3">
                {['React', 'TypeScript', 'Firebase', 'Node.js', 'Python', 'C++'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-full text-sm font-mono border border-cyber-blue-electric/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
