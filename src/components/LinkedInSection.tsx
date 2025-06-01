
import React from 'react';
import { Linkedin, ExternalLink, Users, MessageCircle } from 'lucide-react';

const LinkedInSection = () => {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            LinkedIn Professional Network
          </h2>
          <p className="text-lg text-gray-600">
            Connect with me on LinkedIn to stay updated on my professional journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Professional Profile</h3>
                  <p className="text-gray-600">Full Stack Developer & AI Enthusiast</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Professional Connections</span>
                  </div>
                  <span className="font-semibold text-gray-900">500+</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <MessageCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Active in Tech Communities</span>
                  </div>
                  <span className="font-semibold text-gray-900">Weekly</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Recent Activity</h4>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>• Shared insights on React best practices</p>
                  <p>• Published article on AI in web development</p>
                  <p>• Participated in tech conference discussions</p>
                  <p>• Connected with industry professionals</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
              <h4 className="text-xl font-semibold mb-4">Why Connect?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Stay updated on my latest projects and achievements</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Access to my professional insights and articles</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Networking opportunities in tech industry</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Collaboration on interesting projects</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">YOS</span>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Youssef Ouben Said</h3>
                  <p className="text-gray-600 mt-1">Full Stack Developer | AI Enthusiast</p>
                  <p className="text-sm text-gray-500 mt-1">Casablanca, Morocco</p>
                </div>
                
                <div className="space-y-3">
                  <button 
                    onClick={() => window.open('https://linkedin.com/in/youssef-ouben-said', '_blank')}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </button>
                  
                  <button 
                    onClick={() => window.open('https://linkedin.com/in/youssef-ouben-said', '_blank')}
                    className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Full Profile
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-3">LinkedIn Engagement</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">15</div>
                  <div className="text-sm text-gray-600">Posts</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">250</div>
                  <div className="text-sm text-gray-600">Likes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">45</div>
                  <div className="text-sm text-gray-600">Comments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInSection;
