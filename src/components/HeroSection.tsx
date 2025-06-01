
import React from 'react';
import { ChevronDown, Code, FileText, Linkedin } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="text-center space-y-8 px-4 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 animate-fade-in">
            Youssef 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Ouben Said
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 animate-fade-in">
            Full Stack Developer & AI Enthusiast
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto animate-fade-in">
            Bridging the gap between innovative technology and practical solutions. 
            From DEUST to ENSET, crafting digital experiences that matter.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900">Full Stack Development</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <FileText className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900">AI/ML Projects</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <Linkedin className="w-8 h-8 text-blue-700 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900">Professional Network</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Spring Boot</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Python</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Docker</span>
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">C++</span>
          </div>
        </div>

        <div className="pt-8">
          <button 
            onClick={() => document.getElementById('mindmap')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore My Journey
            <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </div>
  );
};

export default HeroSection;
