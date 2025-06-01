
import React from 'react';
import { FileText, Target } from 'lucide-react';

const CommentarySection = () => {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Commentary
          </h2>
          <p className="text-lg text-gray-600">
            Reflecting on my journey, growth, and aspirations in technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">My Journey</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                My transition from DEUST MIP to ENSET Engineering has been transformative. 
                What started as curiosity about computer science evolved into a passion for 
                full-stack development and artificial intelligence. Each project, from the 
                simple Tetris game in C++ to complex AI chatbots with Spring Boot, has been 
                a stepping stone in my professional growth.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The intersection of theoretical knowledge from academia and practical 
                application through internships has shaped my problem-solving approach. 
                I believe in continuous learning, which is reflected in my certifications 
                and ongoing exploration of emerging technologies like machine learning 
                and cloud computing.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Career Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I envision myself as a technology leader who bridges the gap between 
                innovative solutions and business needs. My goal is to work on projects 
                that have real-world impact, particularly in AI-driven applications that 
                solve complex problems. The combination of my technical skills and 
                understanding of business requirements positions me well for roles in 
                product development and technical leadership.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Successfully transitioned from Mathematics to Computer Science
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Developed AI/ML projects with real-world applications
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Earned industry certifications (CCNA, RHCSA)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  Built full-stack applications with modern tech stack
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Excellence</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                My approach to software development emphasizes clean code, scalable 
                architecture, and user-centered design. I've consistently delivered 
                projects that not only meet technical requirements but also provide 
                exceptional user experiences.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="font-medium text-gray-900">Frontend</div>
                  <div className="text-gray-600">React, Angular, Vue</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="font-medium text-gray-900">Backend</div>
                  <div className="text-gray-600">Spring Boot, Node.js</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="font-medium text-gray-900">AI/ML</div>
                  <div className="text-gray-600">Python, TensorFlow</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="font-medium text-gray-900">DevOps</div>
                  <div className="text-gray-600">Docker, Kubernetes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentarySection;
