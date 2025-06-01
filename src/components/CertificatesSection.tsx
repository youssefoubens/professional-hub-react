
import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const CertificatesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    {
      id: 1,
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      date: "March 2024",
      credentialId: "CCNA-2024-YOS-001",
      description: "Comprehensive networking certification covering IP connectivity, security fundamentals, and automation.",
      skills: ["Network Fundamentals", "IP Connectivity", "IP Services", "Security Fundamentals", "Automation"],
      image: "/placeholder.svg",
      verifyLink: "https://cisco.com/verify",
      category: "networking"
    },
    {
      id: 2,
      title: "Red Hat Certified System Administrator (RHCSA)",
      issuer: "Red Hat",
      date: "January 2024",
      credentialId: "RHCSA-2024-YOS-002",
      description: "Linux system administration certification demonstrating essential skills for managing Red Hat Enterprise Linux systems.",
      skills: ["Linux Administration", "System Configuration", "User Management", "File Systems", "Process Management"],
      image: "/placeholder.svg",
      verifyLink: "https://redhat.com/verify",
      category: "linux"
    },
    {
      id: 3,
      title: "Machine Learning Specialization",
      issuer: "Coursera - Stanford University",
      date: "December 2023",
      credentialId: "ML-COURSERA-2023-YOS",
      description: "Comprehensive machine learning course covering supervised learning, unsupervised learning, and neural networks.",
      skills: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Python", "TensorFlow"],
      image: "/placeholder.svg",
      verifyLink: "https://coursera.org/verify",
      category: "ai"
    },
    {
      id: 4,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "November 2023",
      credentialId: "AWS-CP-2023-YOS-004",
      description: "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
      skills: ["Cloud Computing", "AWS Services", "Security", "Pricing", "Architecture"],
      image: "/placeholder.svg",
      verifyLink: "https://aws.amazon.com/verification",
      category: "cloud"
    },
    {
      id: 5,
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "October 2023",
      credentialId: "DCA-2023-YOS-005",
      description: "Container orchestration and management certification covering Docker fundamentals and best practices.",
      skills: ["Containerization", "Docker", "Orchestration", "DevOps", "Microservices"],
      image: "/placeholder.svg",
      verifyLink: "https://docker.com/verify",
      category: "devops"
    },
    {
      id: 6,
      title: "React Professional Certificate",
      issuer: "Meta - Coursera",
      date: "September 2023",
      credentialId: "REACT-META-2023-YOS",
      description: "Advanced React development covering hooks, context, performance optimization, and modern development practices.",
      skills: ["React.js", "JavaScript", "Frontend Development", "Component Design", "State Management"],
      image: "/placeholder.svg",
      verifyLink: "https://coursera.org/verify",
      category: "frontend"
    }
  ];

  const activities = [
    {
      title: "Tech Conference Speaker",
      event: "Morocco Dev Summit 2024",
      date: "April 2024",
      description: "Presented on 'AI Integration in Modern Web Applications'"
    },
    {
      title: "Hackathon Winner",
      event: "ENSET Innovation Challenge",
      date: "February 2024",
      description: "First place for AI-powered educational platform"
    },
    {
      title: "Open Source Contributor",
      event: "Various Projects",
      date: "2023 - Present",
      description: "Active contributor to open-source AI and web development projects"
    },
    {
      title: "Mentoring Program",
      event: "ENSET Peer Mentoring",
      date: "2023 - Present",
      description: "Mentoring junior students in programming and career development"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'networking':
        return 'bg-blue-100 text-blue-800';
      case 'linux':
        return 'bg-red-100 text-red-800';
      case 'ai':
        return 'bg-purple-100 text-purple-800';
      case 'cloud':
        return 'bg-orange-100 text-orange-800';
      case 'devops':
        return 'bg-green-100 text-green-800';
      case 'frontend':
        return 'bg-cyan-100 text-cyan-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const nextCertificate = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  const currentCert = certificates[currentIndex];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Certificates & Activities
          </h2>
          <p className="text-lg text-gray-600">
            Continuous learning through professional certifications and active participation in tech community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certificates Carousel */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-gray-900">Professional Certifications</h3>
              <div className="flex space-x-2">
                <button
                  onClick={prevCertificate}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextCertificate}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <Award className="w-16 h-16 text-blue-600 mx-auto" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{currentCert.title}</h4>
                    <p className="text-gray-600">{currentCert.issuer}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {currentCert.date}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(currentCert.category)}`}>
                    {currentCert.category}
                  </span>
                </div>
                
                <p className="text-gray-700">{currentCert.description}</p>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Skills Validated:</h5>
                  <div className="flex flex-wrap gap-2">
                    {currentCert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-xs text-gray-500">
                    ID: {currentCert.credentialId}
                  </span>
                  <a
                    href={currentCert.verifyLink}
                    className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Verify
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-2">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Activities Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Professional Activities</h3>
            
            <div className="space-y-6">
              {activities.map((activity, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4"></div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{activity.title}</h4>
                        <span className="text-sm text-gray-500">{activity.date}</span>
                      </div>
                      <p className="text-blue-600 font-medium mb-2">{activity.event}</p>
                      <p className="text-gray-600 text-sm">{activity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-3">Continuous Learning</h4>
              <p className="text-gray-700 text-sm mb-4">
                I believe in lifelong learning and staying current with technology trends. 
                My certification journey reflects my commitment to professional growth and expertise validation.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{certificates.length}</div>
                  <div className="text-sm text-gray-600">Certifications</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{activities.length}</div>
                  <div className="text-sm text-gray-600">Activities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesSection;
