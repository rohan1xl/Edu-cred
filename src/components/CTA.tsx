import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section id="institutions" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">For Educational Institutions</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Revolutionize Your{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Credential Management
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Join the growing network of forward-thinking institutions. Empower your students with verifiable, 
            portable, and future-ready credentials.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-lg font-medium hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-yellow-500/25 flex items-center space-x-2">
            <span>Get Started for Institutions</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="border border-slate-600 text-slate-300 px-8 py-4 rounded-lg font-medium hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200">
            Schedule a Demo
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
            <div className="text-2xl font-bold text-white mb-2">Free Setup</div>
            <div className="text-slate-400">No upfront costs or hidden fees</div>
          </div>
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
            <div className="text-2xl font-bold text-white mb-2">24/7 Support</div>
            <div className="text-slate-400">Dedicated technical assistance</div>
          </div>
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
            <div className="text-2xl font-bold text-white mb-2">Easy Integration</div>
            <div className="text-slate-400">Seamless API and portal access</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;