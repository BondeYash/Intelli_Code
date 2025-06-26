import React from 'react';
import {
  Terminal,
  Code,
  Zap,
  Shield,
  Eye,
  Github,
  Twitter,
  Linkedin,
  Mail,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(0,255,255,0.02)_25%,rgba(0,255,255,0.02)_26%,transparent_27%,transparent_74%,rgba(0,255,255,0.02)_75%,rgba(0,255,255,0.02)_76%,transparent_77%,transparent)] animate-pulse"></div>

      {/* Top Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-5">
              <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                IntelliCode
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Advanced AI-powered code analysis and optimization.{' '}
              <span className="text-cyan-400">Neural networks</span> meet{' '}
              <span className="text-purple-400">quantum computing</span> for ultimate code intelligence.
            </p>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>&gt; STATUS: ONLINE</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-purple-400 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Neural Services
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { icon: <Terminal className="w-4 h-4" />, label: 'Code Analysis', color: 'text-cyan-400' },
                { icon: <Shield className="w-4 h-4" />, label: 'Security Scan', color: 'text-purple-400' },
                { icon: <Zap className="w-4 h-4" />, label: 'Performance Boost', color: 'text-pink-400' },
                { icon: <Eye className="w-4 h-4" />, label: 'Real-time Monitor', color: 'text-cyan-400' },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className={`text-gray-400 hover:${item.color} transition-all duration-300 flex items-center gap-2 group`}
                  >
                    <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-pink-400 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Neural Hub
            </h3>
            <ul className="space-y-3 text-sm">
              {['Documentation', 'API Reference', 'Tutorials', 'Support Center'].map((res, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:pl-2"
                  >
                    {res}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              Neural Network
            </h3>
            <p className="text-gray-400 text-sm font-mono">Connect to our cybernetic grid</p>
            <div className="flex flex-wrap gap-4">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className={`group p-2 bg-gray-800/50 border border-cyan-400/30 rounded-lg hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] transition-all duration-300`}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-gray-800/50 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span className="font-mono">© 2024 IntelliCode AI</span>
              <span className="text-cyan-400">|</span>
              <span className="font-mono">Neural Network v2.1</span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors font-mono">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors font-mono">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors font-mono">
                License
              </a>
            </div>
          </div>

          {/* Terminal-style bottom line */}
          <div className="p-3 bg-black/50 border border-cyan-400/20 rounded font-mono text-xs flex items-center gap-2 flex-wrap">
            <span className="text-cyan-400">root@intellicode:~$</span>
            <span className="text-gray-400">System status:</span>
            <span className="text-green-400">All neural networks operational</span>
            <span className="animate-pulse text-white">_</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
