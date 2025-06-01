
import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'default',
    data: { label: 'Youssef Ouben Said' },
    position: { x: 400, y: 200 },
    style: { 
      background: '#3B82F6', 
      color: 'white', 
      border: '2px solid #1E40AF',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: 'bold',
      padding: '10px'
    },
  },
  
  // Education Branch
  {
    id: '2',
    data: { label: 'Education' },
    position: { x: 100, y: 50 },
    style: { background: '#10B981', color: 'white', borderRadius: '8px' },
  },
  {
    id: '3',
    data: { label: 'DEUST MIP\n(2022-2024)' },
    position: { x: 0, y: -50 },
    style: { background: '#059669', color: 'white', borderRadius: '6px', fontSize: '12px' },
  },
  {
    id: '4',
    data: { label: 'ENSET Engineering\n(2024-2027)' },
    position: { x: 200, y: -50 },
    style: { background: '#059669', color: 'white', borderRadius: '6px', fontSize: '12px' },
  },

  // Skills Branch
  {
    id: '5',
    data: { label: 'Technical Skills' },
    position: { x: 700, y: 50 },
    style: { background: '#8B5CF6', color: 'white', borderRadius: '8px' },
  },
  {
    id: '6',
    data: { label: 'Frontend\nReact, Angular, Vue' },
    position: { x: 600, y: -80 },
    style: { background: '#7C3AED', color: 'white', borderRadius: '6px', fontSize: '12px' },
  },
  {
    id: '7',
    data: { label: 'Backend\nSpring Boot, Node.js' },
    position: { x: 800, y: -80 },
    style: { background: '#7C3AED', color: 'white', borderRadius: '6px', fontSize: '12px' },
  },
  {
    id: '8',
    data: { label: 'AI/ML\nPython, TensorFlow' },
    position: { x: 700, y: -150 },
    style: { background: '#7C3AED', color: 'white', borderRadius: '6px', fontSize: '12px' },
  },

  // Projects Branch
  {
    id: '9',
    data: { label: 'Projects' },
    position: { x: 400, y: 400 },
    style: { background: '#F59E0B', color: 'white', borderRadius: '8px' },
  },
  {
    id: '10',
    data: { label: 'AI Chatbot\nSpring AI + RAG' },
    position: { x: 200, y: 500 },
    style: { background: '#D97706', color: 'white', borderRadius: '6px', fontSize: '12px' },
  },
  {
    id: '11',
    data: { label: 'Tomato Disease ML\nCNN + Computer Vision' },
    position: { x: 400, y: 550 },
    style: { background: '#D97706', color: 'white', borderRadius: '6px', fontSize: '12px' },
  },
  {
    id: '12',
    data: { label: 'Tetris Game\nC++ + OOP' },
    position: { x: 600, y: 500 },
    style: { background: '#D97706', color: 'white', borderRadius: '6px', fontSize: '12px' },
  },

  // Certifications Branch
  {
    id: '13',
    data: { label: 'Certifications' },
    position: { x: 100, y: 350 },
    style: { background: '#EF4444', color: 'white', borderRadius: '8px' },
  },
  {
    id: '14',
    data: { label: 'CCNA\nCisco Networking' },
    position: { x: 0, y: 450 },
    style: { background: '#DC2626', color: 'white', borderRadius: '6px', fontSize: '12px' },
  },
  {
    id: '15',
    data: { label: 'RHCSA\nRed Hat Linux' },
    position: { x: 200, y: 450 },
    style: { background: '#DC2626', color: 'white', borderRadius: '6px', fontSize: '12px' },
  },

  // Career Goals
  {
    id: '16',
    data: { label: 'Career Goals' },
    position: { x: 700, y: 350 },
    style: { background: '#06B6D4', color: 'white', borderRadius: '8px' },
  },
  {
    id: '17',
    data: { label: 'Full Stack Developer' },
    position: { x: 600, y: 450 },
    style: { background: '#0891B2', color: 'white', borderRadius: '6px', fontSize: '12px' },
  },
  {
    id: '18',
    data: { label: 'AI/ML Engineer' },
    position: { x: 800, y: 450 },
    style: { background: '#0891B2', color: 'white', borderRadius: '6px', fontSize: '12px' },
  },
];

const initialEdges: Edge[] = [
  // Main connections
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-5', source: '1', target: '5' },
  { id: 'e1-9', source: '1', target: '9' },
  { id: 'e1-13', source: '1', target: '13' },
  { id: 'e1-16', source: '1', target: '16' },

  // Education connections
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },

  // Skills connections
  { id: 'e5-6', source: '5', target: '6' },
  { id: 'e5-7', source: '5', target: '7' },
  { id: 'e5-8', source: '5', target: '8' },

  // Projects connections
  { id: 'e9-10', source: '9', target: '10' },
  { id: 'e9-11', source: '9', target: '11' },
  { id: 'e9-12', source: '9', target: '12' },

  // Certifications connections
  { id: 'e13-14', source: '13', target: '14' },
  { id: 'e13-15', source: '13', target: '15' },

  // Career goals connections
  { id: 'e16-17', source: '16', target: '17' },
  { id: 'e16-18', source: '16', target: '18' },

  // Cross connections (skills to projects)
  { id: 'e8-11', source: '8', target: '11', style: { stroke: '#8B5CF6', strokeDasharray: '5,5' } },
  { id: 'e7-10', source: '7', target: '10', style: { stroke: '#8B5CF6', strokeDasharray: '5,5' } },
];

const MindMapSection = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Mind Map
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            An interactive visualization of my skills, education, projects, and career aspirations
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="h-[600px] w-full">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              fitView
              className="bg-gradient-to-br from-blue-50 to-indigo-100"
            >
              <Controls />
              <MiniMap 
                nodeColor="#3B82F6"
                maskColor="rgb(240, 240, 240, 0.6)"
                className="bg-white border border-gray-200 rounded-lg"
              />
              <Background variant="dot" gap={20} size={1} color="#E5E7EB" />
            </ReactFlow>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Interactive Features
            </h3>
            <ul className="text-sm text-blue-800 space-y-2">
              <li>• Drag nodes to explore connections</li>
              <li>• Zoom and pan for detailed view</li>
              <li>• Dashed lines show skill-project relationships</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">
              Color Coding
            </h3>
            <ul className="text-sm text-purple-800 space-y-2">
              <li>• <span className="inline-block w-3 h-3 bg-blue-600 rounded mr-2"></span>Personal Info</li>
              <li>• <span className="inline-block w-3 h-3 bg-green-600 rounded mr-2"></span>Education</li>
              <li>• <span className="inline-block w-3 h-3 bg-purple-600 rounded mr-2"></span>Skills</li>
              <li>• <span className="inline-block w-3 h-3 bg-yellow-600 rounded mr-2"></span>Projects</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Journey Highlights
            </h3>
            <ul className="text-sm text-gray-800 space-y-2">
              <li>• DEUST to ENSET transition</li>
              <li>• 3 major projects completed</li>
              <li>• Industry certifications earned</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindMapSection;
