
import React, { useState } from 'react';
import { Github, ExternalLink, Filter, Code, Brain, Gamepad2 } from 'lucide-react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "AI-Powered Chatbot",
      description: "Intelligent chatbot built with Spring AI framework, featuring RAG (Retrieval-Augmented Generation) and vector database integration for enhanced context understanding.",
      image: "/placeholder.svg",
      tags: ["Spring Boot", "AI", "RAG", "Vector DB", "Java"],
      category: "ai",
      github: "https://github.com/youssef/ai-chatbot",
      demo: "https://chatbot-demo.youssefoubensaid.me",
      status: "completed"
    },
    {
      id: 2,
      title: "Tomato Disease Detection",
      description: "Machine learning model using convolutional neural networks to detect diseases in tomato plants from images, achieving 92% accuracy.",
      image: "/placeholder.svg",
      tags: ["Python", "TensorFlow", "CNN", "Computer Vision", "Agriculture"],
      category: "ai",
      github: "https://github.com/youssef/tomato-ml",
      demo: "https://tomato-ml.youssefoubensaid.me",
      status: "completed"
    },
    {
      id: 3,
      title: "Modern Tetris Game",
      description: "Classic Tetris game implementation in C++ with modern programming practices, object-oriented design, and smooth gameplay mechanics.",
      image: "/placeholder.svg",
      tags: ["C++", "Game Development", "OOP", "Graphics"],
      category: "game",
      github: "https://github.com/youssef/tetris-cpp",
      demo: null,
      status: "completed"
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React frontend, Spring Boot backend, and PostgreSQL database. Features include user authentication, payment integration, and admin dashboard.",
      image: "/placeholder.svg",
      tags: ["React", "Spring Boot", "PostgreSQL", "Docker", "Microservices"],
      category: "fullstack",
      github: "https://github.com/youssef/ecommerce-platform",
      demo: "https://ecommerce.youssefoubensaid.me",
      status: "in-progress"
    },
    {
      id: 5,
      title: "Task Management API",
      description: "RESTful API for task management with user authentication, role-based access control, and real-time notifications using WebSockets.",
      image: "/placeholder.svg",
      tags: ["Spring Boot", "REST API", "WebSocket", "JWT", "MySQL"],
      category: "backend",
      github: "https://github.com/youssef/task-api",
      demo: "https://api.youssefoubensaid.me/docs",
      status: "completed"
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "Responsive weather application with real-time data visualization, location-based forecasts, and interactive charts built with React and Chart.js.",
      image: "/placeholder.svg",
      tags: ["React", "Chart.js", "API Integration", "Responsive Design"],
      category: "frontend",
      github: "https://github.com/youssef/weather-dashboard",
      demo: "https://weather.youssefoubensaid.me",
      status: "completed"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Filter },
    { id: 'ai', label: 'AI/ML', icon: Brain },
    { id: 'fullstack', label: 'Full Stack', icon: Code },
    { id: 'game', label: 'Games', icon: Gamepad2 },
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'backend', label: 'Backend', icon: Code },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Digital Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical projects spanning full-stack development, 
            artificial intelligence, and game development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Code className="w-12 h-12 text-gray-400 mx-auto" />
                    <p className="text-sm text-gray-500">Project Screenshot</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found for this category.</p>
          </div>
        )}

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Want to see more projects?
            </h3>
            <p className="text-gray-600 mb-6">
              Check out my GitHub profile for additional projects and contributions
            </p>
            <a
              href="https://github.com/youssef"
              className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
