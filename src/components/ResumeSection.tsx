
import React, { useState } from 'react';
import { Download, Eye, User, Code, GraduationCap, Award } from 'lucide-react';

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState('human');

  const skills = [
    { name: 'React.js', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'Java', level: 85, category: 'backend' },
    { name: 'Spring Boot', level: 80, category: 'backend' },
    { name: 'Python', level: 90, category: 'ai' },
    { name: 'Machine Learning', level: 75, category: 'ai' },
    { name: 'Docker', level: 75, category: 'devops' },
    { name: 'Linux', level: 80, category: 'devops' },
  ];

  const experience = [
    {
      title: "Software Development Intern",
      company: "VINCI Construction",
      period: "Summer 2024",
      description: "Developed internal tools and contributed to digitalization projects"
    },
    {
      title: "Freelance Developer",
      company: "Various Clients",
      period: "2023 - Present",
      description: "Built web applications and AI solutions for small businesses"
    }
  ];

  const education = [
    {
      degree: "Software Engineering",
      school: "ENSET Mohammedia",
      period: "2023 - 2025",
      status: "In Progress"
    },
    {
      degree: "DEUST MIP",
      school: "Errachidia",
      period: "2021 - 2023",
      status: "Completed"
    }
  ];

  const getSkillColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'bg-blue-600';
      case 'backend':
        return 'bg-green-600';
      case 'ai':
        return 'bg-purple-600';
      case 'devops':
        return 'bg-orange-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Resume
          </h2>
          <p className="text-lg text-gray-600">
            Choose between human-friendly interactive version or ATS-optimized format
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('human')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'human'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Eye className="inline-block w-4 h-4 mr-2" />
              Human-Friendly
            </button>
            <button
              onClick={() => setActiveTab('ats')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'ats'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Download className="inline-block w-4 h-4 mr-2" />
              ATS-Optimized
            </button>
          </div>
        </div>

        {activeTab === 'human' ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Personal Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white">YOS</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Youssef Ouben Said</h3>
                  <p className="text-gray-600">Full Stack Developer</p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <User className="w-4 h-4 text-gray-400 mr-3" />
                    <span>oubenssaidyoussef@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 text-gray-400 mr-3" />
                    <span>+212 654823654</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 text-gray-400 mr-3" />
                    <span>Casablanca, Morocco</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <Code className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Technical Skills</h3>
                </div>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getSkillColor(skill.category)}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Experience & Education */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Education</h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-green-600 pl-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-1">{edu.school}</p>
                      <p className="text-sm text-gray-500">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <Award className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Experience</h3>
                </div>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-4 border-purple-600 pl-6">
                      <h4 className="font-semibold text-gray-900 mb-1">{exp.title}</h4>
                      <p className="text-gray-600 mb-1">{exp.company}</p>
                      <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                <h3 className="text-lg font-semibold mb-4">Professional Objective</h3>
                <p className="leading-relaxed">
                  Passionate full-stack developer with expertise in modern web technologies and AI/ML. 
                  Seeking to leverage my technical skills and continuous learning mindset to contribute 
                  to innovative projects in a dynamic technology environment. Committed to delivering 
                  high-quality solutions that bridge the gap between user needs and business objectives.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-12 shadow-lg border border-gray-200">
              <div className="text-center mb-8 pb-6 border-b border-gray-200">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">YOUSSEF OUBEN SAID</h1>
                <p className="text-lg text-gray-600">Full Stack Developer | AI Enthusiast</p>
                <p className="text-gray-600 mt-2">
                  oubenssaidyoussef@gmail.com | +212 654823654 | Casablanca, Morocco
                </p>
                <p className="text-gray-600">
                  LinkedIn: linkedin.com/in/youssef-ouben-said | Website: youssefoubensaid.me
                </p>
              </div>

              <div className="prose prose-gray max-w-none">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="mb-6">
                  Software Engineering student with expertise in full-stack development, artificial intelligence, 
                  and machine learning. Proficient in React, Spring Boot, Python, and modern DevOps practices. 
                  Demonstrated experience in developing AI-powered applications and web solutions. Certified in 
                  Cisco CCNA and Red Hat RHCSA. Seeking full-time opportunities in software development roles.
                </p>

                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
                  TECHNICAL SKILLS
                </h2>
                <div className="mb-6">
                  <p><strong>Programming Languages:</strong> Java, Python, JavaScript, C++, TypeScript</p>
                  <p><strong>Frontend Technologies:</strong> React.js, HTML5, CSS3, Tailwind CSS, Bootstrap</p>
                  <p><strong>Backend Technologies:</strong> Spring Boot, Node.js, RESTful APIs, Microservices</p>
                  <p><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB</p>
                  <p><strong>AI/ML:</strong> TensorFlow, Scikit-learn, Computer Vision, Natural Language Processing</p>
                  <p><strong>DevOps & Tools:</strong> Docker, Git, Linux, RHCSA, CI/CD</p>
                  <p><strong>Certifications:</strong> Cisco CCNA, Red Hat RHCSA, Google AI/ML Coursera</p>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
                  EDUCATION
                </h2>
                <div className="mb-6">
                  <p><strong>Software Engineering Degree</strong> | ENSET Mohammedia | 2023 - 2025 (Expected)</p>
                  <p><strong>DEUST MIP</strong> | Faculty of Sciences Ben M'Sik | 2021 - 2023</p>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
                  PROFESSIONAL EXPERIENCE
                </h2>
                <div className="mb-6">
                  <p><strong>Software Development Intern</strong> | VINCI Construction | Summer 2024</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Developed internal tools for project management and resource allocation</li>
                    <li>Contributed to digitalization initiatives improving operational efficiency</li>
                    <li>Collaborated with cross-functional teams on software architecture decisions</li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
                  KEY PROJECTS
                </h2>
                <div className="mb-6">
                  <p><strong>AI-Powered Chatbot</strong> | Spring Boot, RAG, Vector Databases</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Developed intelligent chatbot using Spring AI framework and retrieval-augmented generation</li>
                    <li>Implemented vector database integration for enhanced context understanding</li>
                  </ul>
                  
                  <p className="mt-4"><strong>Tomato Disease Detection ML Model</strong> | Python, TensorFlow, CNN</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Built convolutional neural network for agricultural disease detection</li>
                    <li>Achieved 92% accuracy in identifying tomato plant diseases from images</li>
                  </ul>
                  
                  <p className="mt-4"><strong>Tetris Game Implementation</strong> | C++, Game Development</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Developed classic Tetris game with modern C++ practices</li>
                    <li>Implemented object-oriented design patterns and game logic</li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-8 pt-6 border-t border-gray-200">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  <Download className="inline-block w-5 h-5 mr-2" />
                  Download PDF Version
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeSection;
