
import React, { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  Connection,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  {
    id: 'youssef',
    type: 'input',
    position: { x: 400, y: 200 },
    data: { label: 'Youssef Ouben Said' },
    style: { 
      background: 'linear-gradient(45deg, #3B82F6, #8B5CF6)', 
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: 'bold',
      width: 200,
      height: 60
    },
  },
  // Education
  {
    id: 'education',
    position: { x: 100, y: 100 },
    data: { label: 'Education' },
    style: { background: '#EF4444', color: 'white', borderRadius: '8px' },
  },
  {
    id: 'deust',
    position: { x: 0, y: 50 },
    data: { label: 'DEUST MIP' },
  },
  {
    id: 'enset',
    position: { x: 0, y: 150 },
    data: { label: 'ENSET Engineering' },
  },
  // Skills
  {
    id: 'skills',
    position: { x: 700, y: 100 },
    data: { label: 'Technical Skills' },
    style: { background: '#10B981', color: 'white', borderRadius: '8px' },
  },
  {
    id: 'frontend',
    position: { x: 600, y: 50 },
    data: { label: 'Frontend\n(React, JavaScript)' },
  },
  {
    id: 'backend',
    position: { x: 800, y: 50 },
    data: { label: 'Backend\n(Spring Boot, Java)' },
  },
  {
    id: 'ai',
    position: { x: 700, y: 0 },
    data: { label: 'AI/ML\n(Python, TensorFlow)' },
  },
  {
    id: 'devops',
    position: { x: 600, y: 150 },
    data: { label: 'DevOps\n(Docker, RHCSA)' },
  },
  // Projects
  {
    id: 'projects',
    position: { x: 400, y: 350 },
    data: { label: 'Key Projects' },
    style: { background: '#8B5CF6', color: 'white', borderRadius: '8px' },
  },
  {
    id: 'tetris',
    position: { x: 200, y: 450 },
    data: { label: 'Tetris Game\n(C++)' },
  },
  {
    id: 'tomato',
    position: { x: 400, y: 450 },
    data: { label: 'Tomato Disease ML\n(Python, CNN)' },
  },
  {
    id: 'chatbot',
    position: { x: 600, y: 450 },
    data: { label: 'AI Chatbot\n(Spring AI, RAG)' },
  },
  // Certifications
  {
    id: 'certs',
    position: { x: 100, y: 300 },
    data: { label: 'Certifications' },
    style: { background: '#F59E0B', color: 'white', borderRadius: '8px' },
  },
  {
    id: 'cisco',
    position: { x: 0, y: 400 },
    data: { label: 'Cisco CCNA' },
  },
  {
    id: 'redhat',
    position: { x: 200, y: 400 },
    data: { label: 'Red Hat RHCSA' },
  },
];

const initialEdges: Edge[] = [
  // Education connections
  { id: 'e1', source: 'youssef', target: 'education' },
  { id: 'e2', source: 'education', target: 'deust' },
  { id: 'e3', source: 'education', target: 'enset' },
  
  // Skills connections
  { id: 'e4', source: 'youssef', target: 'skills' },
  { id: 'e5', source: 'skills', target: 'frontend' },
  { id: 'e6', source: 'skills', target: 'backend' },
  { id: 'e7', source: 'skills', target: 'ai' },
  { id: 'e8', source: 'skills', target: 'devops' },
  
  // Project connections
  { id: 'e9', source: 'youssef', target: 'projects' },
  { id: 'e10', source: 'projects', target: 'tetris' },
  { id: 'e11', source: 'projects', target: 'tomato' },
  { id: 'e12', source: 'projects', target: 'chatbot' },
  
  // Cross connections
  { id: 'e13', source: 'frontend', target: 'chatbot' },
  { id: 'e14', source: 'backend', target: 'chatbot' },
  { id: 'e15', source: 'ai', target: 'tomato' },
  
  // Certifications
  { id: 'e16', source: 'youssef', target: 'certs' },
  { id: 'e17', source: 'certs', target: 'cisco' },
  { id: 'e18', source: 'certs', target: 'redhat' },
];

const MindMapSection = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Mind Map
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            An interactive visualization of my skills, education, projects, and career journey. 
            Explore the connections between different aspects of my professional development.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden" style={{ height: '600px' }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            attributionPosition="bottom-left"
          >
            <Controls />
            <MiniMap />
            <Background variant="dots" gap={12} size={1} />
          </ReactFlow>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Interactive mind map - Drag nodes, zoom, and explore connections</p>
        </div>
      </div>
    </div>
  );
};

export default MindMapSection;
