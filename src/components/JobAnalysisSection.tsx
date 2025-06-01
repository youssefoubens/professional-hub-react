
import React, { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, TrendingUp } from 'lucide-react';

const JobAnalysisSection = () => {
  const [selectedJob, setSelectedJob] = useState(0);

  const jobOffers = [
    {
      title: "Full Stack Developer",
      company: "TechCorp Morocco",
      location: "Casablanca, Morocco",
      salary: "45,000 - 65,000 MAD",
      requirements: [
        { skill: "React.js", status: "match", proficiency: 85 },
        { skill: "Spring Boot", status: "match", proficiency: 80 },
        { skill: "Java", status: "match", proficiency: 85 },
        { skill: "Docker", status: "match", proficiency: 75 },
        { skill: "AWS", status: "learning", proficiency: 40 },
        { skill: "Microservices", status: "match", proficiency: 70 },
        { skill: "PostgreSQL", status: "match", proficiency: 80 },
        { skill: "Kubernetes", status: "missing", proficiency: 20 }
      ],
      matchPercentage: 75
    },
    {
      title: "AI/ML Engineer",
      company: "Innovation Labs",
      location: "Rabat, Morocco",
      salary: "50,000 - 70,000 MAD",
      requirements: [
        { skill: "Python", status: "match", proficiency: 90 },
        { skill: "TensorFlow", status: "match", proficiency: 75 },
        { skill: "Machine Learning", status: "match", proficiency: 80 },
        { skill: "Deep Learning", status: "learning", proficiency: 60 },
        { skill: "PyTorch", status: "learning", proficiency: 45 },
        { skill: "Computer Vision", status: "match", proficiency: 70 },
        { skill: "NLP", status: "learning", proficiency: 50 },
        { skill: "MLOps", status: "missing", proficiency: 25 }
      ],
      matchPercentage: 68
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'match':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'learning':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'missing':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'match':
        return 'bg-green-100 text-green-800';
      case 'learning':
        return 'bg-yellow-100 text-yellow-800';
      case 'missing':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Job Market Analysis
          </h2>
          <p className="text-lg text-gray-600">
            Analyzing real job opportunities and my skill alignment with market demands
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Job Selection */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Positions</h3>
            {jobOffers.map((job, index) => (
              <div
                key={index}
                onClick={() => setSelectedJob(index)}
                className={`p-6 rounded-xl cursor-pointer transition-all border-2 ${
                  selectedJob === index
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{job.title}</h4>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    job.matchPercentage >= 70 ? 'bg-green-100 text-green-800' :
                    job.matchPercentage >= 50 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {job.matchPercentage}% Match
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">{job.company}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
                <p className="text-sm font-medium text-blue-600 mt-2">{job.salary}</p>
              </div>
            ))}
          </div>

          {/* Detailed Analysis */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {jobOffers[selectedJob].title}
                </h3>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-lg font-semibold text-blue-600">
                    {jobOffers[selectedJob].matchPercentage}% Match
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Company Details</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><span className="font-medium">Company:</span> {jobOffers[selectedJob].company}</p>
                    <p><span className="font-medium">Location:</span> {jobOffers[selectedJob].location}</p>
                    <p><span className="font-medium">Salary:</span> {jobOffers[selectedJob].salary}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Match Summary</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Strong Matches</span>
                      <span className="font-medium text-green-600">
                        {jobOffers[selectedJob].requirements.filter(r => r.status === 'match').length}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Learning Areas</span>
                      <span className="font-medium text-yellow-600">
                        {jobOffers[selectedJob].requirements.filter(r => r.status === 'learning').length}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Skill Gaps</span>
                      <span className="font-medium text-red-600">
                        {jobOffers[selectedJob].requirements.filter(r => r.status === 'missing').length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="font-semibold text-gray-900 mb-4">Skills Comparison</h4>
              <div className="space-y-4">
                {jobOffers[selectedJob].requirements.map((req, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      {getStatusIcon(req.status)}
                      <span className="ml-3 font-medium text-gray-900">{req.skill}</span>
                      <span className={`ml-3 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(req.status)}`}>
                        {req.status}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div
                          className={`h-2 rounded-full ${
                            req.proficiency >= 80 ? 'bg-green-600' :
                            req.proficiency >= 60 ? 'bg-yellow-600' :
                            'bg-red-600'
                          }`}
                          style={{ width: `${req.proficiency}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-600 w-12">
                        {req.proficiency}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-3">Improvement Recommendations</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {jobOffers[selectedJob].requirements
                  .filter(req => req.status !== 'match')
                  .map((req, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        {req.status === 'learning' ? 'Continue developing' : 'Start learning'} <strong>{req.skill}</strong>
                        {req.status === 'learning' && ` (Currently at ${req.proficiency}%)`}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAnalysisSection;
