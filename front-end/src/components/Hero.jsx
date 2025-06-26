import React from 'react'; 
import { Terminal, Zap, Code, Cpu, Shield, Eye } from 'lucide-react';

const Hero = () => { return ( <section className="min-h-screen relative flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 bg-gradient-to-br from-gray-900 via-black to-purple-900 overflow-hidden">

  {/* Animated Background Grid */}
  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(0,255,255,0.03)_25%,rgba(0,255,255,0.03)_26%,transparent_27%,transparent_74%,rgba(0,255,255,0.03)_75%,rgba(0,255,255,0.03)_76%,transparent_77%,transparent)] animate-pulse"></div>
  <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(255,0,255,0.03)_25%,rgba(255,0,255,0.03)_26%,transparent_27%,transparent_74%,rgba(255,0,255,0.03)_75%,rgba(255,0,255,0.03)_76%,transparent_77%,transparent)]"></div>
  
  {/* Cyberpunk Character Background */}
  <div 
    className="absolute right-0 top-0 w-1/2 h-full opacity-20 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
      filter: 'hue-rotate(180deg) saturate(2) brightness(0.8)'
    }}
  ></div>
  
  {/* Floating Particles */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
    <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
    <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping"></div>
  </div>

  {/* Left - AI Visualization */}
  <div className="md:w-1/3 w-full relative z-10 p-4">
    <div className="relative">
      {/* Main AI Core */}
      <div className="w-80 h-80 mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full animate-spin"></div>
        <div className="absolute inset-4 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-full animate-pulse"></div>
        <div className="absolute inset-8 bg-gradient-to-r from-gray-900 to-black rounded-full border-2 border-cyan-400/50 flex items-center justify-center">
          <Cpu className="w-20 h-20 text-cyan-400 animate-pulse drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
        </div>
        
        {/* Floating Icons */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Code className="w-8 h-8 text-purple-400 animate-bounce drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
        </div>
        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
          <Shield className="w-8 h-8 text-pink-400 animate-pulse drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
        </div>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          <Eye className="w-8 h-8 text-cyan-400 animate-bounce drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
        </div>
        <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
          <Terminal className="w-8 h-8 text-purple-400 animate-pulse drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
        </div>
      </div>
    </div>
  </div>

  {/* Right - Content */}
  <div className="md:w-1/2 w-full text-center md:text-left py-6 flex flex-col gap-6 relative z-10">
    {/* Status Bar */}
    <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm mb-2">
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      <span>&gt; SYSTEM_ONLINE</span>
      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping ml-2"></div>
    </div>

    <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] animate-pulse">
      INTELLICODE
      <span className="block text-3xl md:text-4xl mt-2 font-mono text-cyan-300 opacity-80">
        &gt; AI_CODE_ANALYZER
      </span>
    </h1>
    
    <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-light">
      <span className="text-cyan-400 font-mono">[NEURAL_ANALYSIS]</span> Deploy advanced AI algorithms to scan, analyze, and optimize your code. 
      <span className="text-purple-400"> Real-time performance insights</span> and 
      <span className="text-pink-400"> vulnerability detection</span> powered by Gemini AI
    </p>

    {/* Stats */}
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="text-center p-3 bg-gray-900/50 rounded-lg border border-cyan-400/30">
        <div className="text-2xl font-black text-cyan-400">99.9%</div>
        <div className="text-xs text-gray-400 font-mono">ACCURACY</div>
      </div>
      <div className="text-center p-3 bg-gray-900/50 rounded-lg border border-purple-400/30">
        <div className="text-2xl font-black text-purple-400">&lt; 0.1s</div>
        <div className="text-xs text-gray-400 font-mono">SCAN_TIME</div>
      </div>
      <div className="text-center p-3 bg-gray-900/50 rounded-lg border border-pink-400/30">
        <div className="text-2xl font-black text-pink-400">1M+</div>
        <div className="text-xs text-gray-400 font-mono">CODE_LINES</div>
      </div>
    </div>
    
    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4">
      <button className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 px-8 py-4 rounded-lg font-black text-black hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.8)] transform hover:scale-105 border border-cyan-400/30 text-lg">
        <Terminal className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
        <span className="tracking-wider">INITIATE_SCAN</span>
        <Zap className="h-5 w-5 group-hover:scale-125 transition-transform duration-300" />
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur"></div>
      </button>
      
      <button className="group flex items-center justify-center gap-2 bg-transparent border-2 border-cyan-400 text-cyan-400 px-6 py-4 rounded-lg font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
        <Eye className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
        <span className="tracking-wide">VIEW_DEMO</span>
      </button>
    </div>

    {/* Terminal Command */}
    <div className="mt-6 p-4 bg-black/80 border border-cyan-400/30 rounded-lg font-mono text-sm">
      <div className="text-cyan-400 mb-1">$ intellicode --analyze</div>
      <div className="text-gray-400">
        <span className="text-green-400">[INFO]</span> Scanning codebase...
        <span className="animate-pulse">_</span>
      </div>
    </div>
  </div>
</section>
); };

export default Hero;