import React from 'react';

const Docs = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center">
          Documentation
        </h1>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-cyan-400 mb-2">1. Getting Started</h2>
            <p>
              To use IntelliCode, simply paste your JavaScript code into the editor and click
              <span className="text-pink-400 font-bold"> "Review" </span>.
              The AI will analyze your code and return feedback including bug detection,
              performance tips, and best practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-2">2. Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>💡 Real-time code analysis</li>
              <li>🛡️ Security scanning</li>
              <li>⚡ Performance enhancement suggestions</li>
              <li>🧠 AI-powered readability improvements</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-pink-400 mb-2">3. API Usage (Coming Soon)</h2>
            <p>
              Our public API will allow programmatic access to the review engine.
              Stay tuned for detailed integration examples and API keys.
            </p>
          </div>
        </div>

        <div className="text-center pt-10">
          <p className="text-sm text-gray-500 font-mono">
            📄 Docs last updated: June 2025 • IntelliCode AI Core v2.1
          </p>
        </div>
      </div>
    </section>
  );
};

export default Docs;
