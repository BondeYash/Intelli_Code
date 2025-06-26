import React from 'react';

const AboutUs = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white p-[20px]">
      <div className="max-w-5xl mx-auto space-y-10 p-[20px]">
        <h1 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent text-center">
          About IntelliCode
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed text-center">
          At <span className="text-cyan-400 font-bold">IntelliCode</span>, we merge
          artificial intelligence with futuristic design to bring you the most advanced
          code analysis platform on the web. Our mission is to empower developers with real-time,
          AI-driven insights that enhance security, boost performance, and elevate code quality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400">
          <div className="bg-gray-800/30 p-6 rounded-lg border border-cyan-400/20 backdrop-blur-sm shadow-md hover:shadow-cyan-500/10 transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-cyan-400 mb-3">Our Vision</h2>
            <p>
              To redefine how developers write and review code by fusing intelligent systems
              with clean, elegant interfaces that feel like tomorrow.
            </p>
          </div>

          <div className="bg-gray-800/30 p-6 rounded-lg border border-pink-400/20 backdrop-blur-sm shadow-md hover:shadow-pink-500/10 transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-pink-400 mb-3">Our Tech</h2>
            <p>
              IntelliCode uses modern LLMs and static code analyzers combined with a
              responsive React frontend and animated UI to deliver immersive developer tooling.
            </p>
          </div>
        </div>

        <div className="text-center pt-10">
          <p className="text-sm text-gray-500 font-mono">
             IntelliCode Code Analysis Systems • Version 2.1 • Built for the future
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
