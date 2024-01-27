import React, { useCallback } from 'react';
import './Tree.css';
import 'reactflow/dist/style.css';
import ELK from 'elkjs/lib/elk.bundled.js';

import CNode from '../components/CNode';


import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    ReactFlowProvider,
    Panel,
    useReactFlow,
  } from 'reactflow'; 
import { nanoid } from 'nanoid';
  
  const tree = {
    title: "",
    nodes: [
      {
        id: "1",
        position: { x: 0, y: 0 },
        data: { value: "Root", title: "dljsf",img:"https://github.com/shadcn.png", likes: 0, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .", time: "" },
        targetPosition: "right",
        type: "custom",
      },
      {
        id: "2",
        position: { x: 0, y: 0 },
        data: { value: "Root", title: "dljsf",img:"https://github.com/shadcn.png", likes: 0, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", time: "" },
        targetPosition: "right",
        type: "custom",
      },
      {
        id: "3",
        position: { x: 0, y: 0 },
        data: { value: "Root", title: "dljsf",img:"https://github.com/shadcn.png", likes: 0, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", time: "" },
        targetPosition: "right",
        type: "custom",
      },
      {
        id: "4",
        position: { x: 0, y: 0 },
        data: { value: "Root", title: "dljsf",img:"https://github.com/shadcn.png", likes: 0, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", time: "" },
        targetPosition: "right",
        type: "custom",
      },
      {
        id: "5",
        position: { x: 0, y: 0 },
        data: { value: "Root", title: "dljsf", likes: 0, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", time: "" },
        targetPosition: "right",
        type: "custom",
      },
    ],
    edges: [
      { id: nanoid(5), source: "1", target: "2" },
      { id: nanoid(5), source: "1", target: "3" },
      { id: nanoid(5), source: "2", target: "4" },
      { id: nanoid(5), source: "2", target: "5" },
    ],
  };

const initialNodes = tree.nodes

const nodeTypes = {custom:CNode}  
  
const initialEdges = tree.edges;

const elk = new ELK(); 

const useLayoutedElements = () => {
    const { getNodes, setNodes, getEdges, fitView } = useReactFlow();
    const defaultOptions = {
      'elk.algorithm': 'layered',
      'elk.direction': 'RIGHT',
      'elk.layered.spacing.nodeNodeBetweenLayers': 100,
      'elk.spacing.nodeNode': 80,
    };
  
    const getLayoutedElements = useCallback((options) => {
      const layoutOptions = { ...defaultOptions, ...options };
      const graph = {
        id: 'root',
        layoutOptions: layoutOptions,
        children: getNodes(),
        edges: getEdges(),
      };
  
      elk.layout(graph).then(({ children }) => {
        // By mutating the children in-place we saves ourselves from creating a
        // needless copy of the nodes array.
        children.forEach((node) => {
          node.position = { x: node.x, y: node.y };
        });
  
        setNodes(children);
        window.requestAnimationFrame(() => {
          fitView();
        });
      });
    }, []);
  
    return { getLayoutedElements };
  };
  
  const LayoutFlow = () => {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);
    const { getLayoutedElements } = useLayoutedElements();
  
    return (
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
      >
        <Panel position="top-right" className='flex flex-col justify-center items-center gap-2'>
          <button className="w-[80px] h-1/3 text-[12px] bg-[#ffa45c] text-white p-1 font-semibold rounded-xl mx-2"
            onClick={() =>
              getLayoutedElements({ 'elk.algorithm': 'layered', 'elk.direction': 'DOWN' })
            }
          >
            vertical
          </button>
          <button className="w-[80px] h-1/3 text-[12px] bg-[#ffa45c] text-white p-1 font-semibold rounded-xl"
            onClick={() =>
              getLayoutedElements({ 'elk.algorithm': 'layered', 'elk.direction': 'RIGHT' })
            }
          >
            horizontal
          </button>
        </Panel>
        <Background variant="dots" color="#fff" gap={12} size={1} className="bg-[#282523]" />
      </ReactFlow>
    );
  };
   
export default function Tree() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
   
    const onConnect = useCallback(
      (params) => setEdges((eds) => addEdge(params, eds)),
      [setEdges],
    );
   
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        {/* <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Controls />
          <MiniMap nodeColor='#ff0072' nodeStrokeWidth={3} zoomable pannable />
          <Background variant="dots" color="#000" gap={12} size={1} className="bg-black" />
        </ReactFlow> */}
        <ReactFlowProvider>
            <LayoutFlow />
        </ReactFlowProvider>
      </div>
    );
  }