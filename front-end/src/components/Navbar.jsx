import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, Zap, Terminal } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-2xl border-b-2 border-cyan-400 relative overflow-hidden">
      {/* Cyberpunk grid background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(56,189,248,0.03)_25%,rgba(56,189,248,0.03)_26%,transparent_27%,transparent_74%,rgba(56,189,248,0.03)_75%,rgba(56,189,248,0.03)_76%,transparent_77%,transparent)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20 group-hover:opacity-40 blur transition-all duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all duration-300">
                IntelliCode
              </span>
              <span className="text-xs text-cyan-300 font-mono opacity-70 -mt-1">
                &gt; AI_ANALYZER_v2.1
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="relative group text-gray-300 hover:text-cyan-400 transition-all duration-300 font-semibold tracking-wide">
              HOME
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              <span className="absolute -top-1 -left-1 w-0 h-0 border-l-2 border-t-2 border-cyan-400 group-hover:w-3 group-hover:h-3 transition-all duration-300"></span>
            </Link>
            <Link to="/docs" className="relative group text-gray-300 hover:text-purple-400 transition-all duration-300 font-semibold tracking-wide">
              DOCS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              <span className="absolute -top-1 -left-1 w-0 h-0 border-l-2 border-t-2 border-purple-400 group-hover:w-3 group-hover:h-3 transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="relative group text-gray-300 hover:text-pink-400 transition-all duration-300 font-semibold tracking-wide">
              ABOUT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              <span className="absolute -top-1 -left-1 w-0 h-0 border-l-2 border-t-2 border-pink-400 group-hover:w-3 group-hover:h-3 transition-all duration-300"></span>
            </Link>

            {/* CTA Button */}
            <button className="relative group flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 px-6 py-3 rounded-lg font-black text-black hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transform hover:scale-105 border border-cyan-400/30">
              <Terminal className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="tracking-wider">RUN ANALYSIS</span>
              <Zap className="h-4 w-4 group-hover:scale-125 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur"></div>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_12px_rgba(34,211,238,0.4)]"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-cyan-400" />
              ) : (
                <Menu className="h-6 w-6 text-cyan-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-6 bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-sm border-t border-cyan-400/20">
          <div className="space-y-3 pt-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="block py-3 px-4 text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-300 font-semibold tracking-wide border-l-2 border-transparent hover:border-cyan-400">
              HOME
            </Link>
            <Link to="/docs" onClick={() => setIsOpen(false)} className="block py-3 px-4 text-gray-300 hover:text-purple-400 hover:bg-purple-400/10 rounded-lg transition-all duration-300 font-semibold tracking-wide border-l-2 border-transparent hover:border-purple-400">
              DOCS
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block py-3 px-4 text-gray-300 hover:text-pink-400 hover:bg-pink-400/10 rounded-lg transition-all duration-300 font-semibold tracking-wide border-l-2 border-transparent hover:border-pink-400">
              ABOUT
            </Link>
            <button className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 px-6 py-4 rounded-lg font-black text-black hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transform hover:scale-105">
              <Terminal className="h-5 w-5" />
              <span className="tracking-wider">RUN ANALYSIS</span>
              <Zap className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
