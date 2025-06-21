
import React from 'react';
import { Terminal, Activity, Wifi } from 'lucide-react';

const HolographicInterface = () => {
  return (
    <div className="relative">
      {/* Main holographic panel */}
      <div className="glass-card holographic rounded-lg p-6 animate-float">
        <div className="flex items-center gap-3 mb-4">
          <Terminal className="w-6 h-6 text-cyber-blue-electric glow-text" />
          <span className="text-cyber-blue-electric text-sm font-mono">SYSTEM_STATUS</span>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-300">CPU Usage</span>
            <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyber-green to-cyber-blue w-3/4 animate-pulse"></div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-300">Memory</span>
            <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyber-purple to-cyber-pink w-2/3 animate-pulse"></div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-300">Network</span>
            <Wifi className="w-4 h-4 text-cyber-green animate-pulse" />
          </div>
        </div>
      </div>

      {/* Secondary floating elements */}
      <div className="absolute -top-4 -right-4 glass-card holographic rounded-full p-3 animate-float" style={{animationDelay: '1s'}}>
        <Activity className="w-5 h-5 text-cyber-pink glow-text" />
      </div>
      
      <div className="absolute -bottom-2 -left-6 glass-card holographic rounded-lg p-2 animate-float" style={{animationDelay: '2s'}}>
        <div className="w-12 h-6 bg-gradient-to-r from-cyber-blue to-cyber-purple opacity-60 rounded"></div>
      </div>
    </div>
  );
};

export default HolographicInterface;
