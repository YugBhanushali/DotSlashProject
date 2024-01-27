import React, { useCallback, useState } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import Modal from "react-modal";

import "reactflow/dist/style.css";
import NodeComp from "./NodeComp";
import { nanoid } from "nanoid";

const rootPosition = { x: 300, y: 200 }; // Updated root node position

const tempTree = {
  root: [
    {
      nodeName: "node 1",
      level: 1,
    },
    {
      nodeName: "node 2",
      level: 1,
    },
    {
      nodeName: "node 3",
      level: 1,
    },
  ],
  "node 1": [
    {
      nodeName: "node 4",
      level: 2,
    },
    {
      nodeName: "node 5",
      level: 2,
    },
  ],
  "node 3": [
    {
      nodeName: "node 6",
      level: 2,
    },
  ],
  "node 4": [
    {
      nodeName: "node 7",
      level: 3,
    },
  ],
};

const tree = {
  title: "",
  nodes: [
    {
      id: "1",
      position: { x: 0, y: 0 },
      data: { value: "Root", title: "dljsf", likes: 0, content: "", time: "" },
      targetPosition: "right",
      type: "custom",
    },
    {
      id: "2",
      position: { x: 0, y: 0 },
      data: { value: "Root", title: "dljsf", likes: 0, content: "", time: "" },
      targetPosition: "right",
      type: "custom",
    },
    {
      id: "3",
      position: { x: 0, y: 0 },
      data: { value: "Root", title: "dljsf", likes: 0, content: "", time: "" },
      targetPosition: "right",
      type: "custom",
    },
    {
      id: "4",
      position: { x: 0, y: 0 },
      data: { value: "Root", title: "dljsf", likes: 0, content: "", time: "" },
      targetPosition: "right",
      type: "custom",
    },
    {
      id: "5",
      position: { x: 0, y: 0 },
      data: { value: "Root", title: "dljsf", likes: 0, content: "", time: "" },
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

const initialNodes = [
  {
    id: "id1",
    position: { x: 0, y: 0 },
    data: { value: "Root", label: "dljsf", likes: 0 },
    targetPosition: "right",
    type: "custom",
  },
  // Updated positions for level one nodes
  {
    id: "node-1",
    position: { x: rootPosition.x + 200, y: rootPosition.y - 50 },
    data: { label: "Node 1" },
    targetPosition: "left",
  },
  {
    id: "node-2",
    position: { x: rootPosition.x + 200, y: rootPosition.y },
    data: { label: "Node 2" },
    targetPosition: "left",
  },
  {
    id: "node-3",
    position: { x: rootPosition.x + 200, y: rootPosition.y + 50 },
    data: { label: "Node 3" },
    targetPosition: "left",
  },
  {
    id: "node-4",
    position: { x: rootPosition.x + 400, y: rootPosition.y - 50 },
    data: { label: "Node 4" },
    targetPosition: "left",
  },
  {
    id: "node-5",
    position: { x: rootPosition.x + 400, y: rootPosition.y },
    data: { label: "Node 5" },
    targetPosition: "left",
  },
  {
    id: "node-6",
    position: { x: rootPosition.x + 400, y: rootPosition.y + 50 },
    data: { label: "Node 6" },
    targetPosition: "left",
  },
];

const initialEdges = [
  { id: "e-root-1", source: "root", target: "node-1" },
  { id: "e-root-2", source: "root", target: "node-2" },
  { id: "e-root-3", source: "root", target: "node-3" },
  { id: "e-node-1-4", source: "node-1", target: "node-4" },
  { id: "e-node-1-5", source: "node-1", target: "node-5" },
  { id: "e-node-1-6", source: "node-1", target: "node-6" },
];

Modal.setAppElement("#root");
const handleStyle = { left: 10 };
export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [showModal, setShowModal] = useState(false);
  const [newNodeData, setNewNodeData] = useState("");
  const [clickedNodeId, setClickedNodeId] = useState(null);

  const nodeTypes = { textUpater: NodeComp };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = (event, node) => {
    setClickedNodeId(node.id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setNewNodeData("");
    setClickedNodeId(null);
  };

  const handleAddChildNode = () => {
    if (clickedNodeId) {
      // Generate a unique ID for the new child node
      const newChildNodeId = `node-${nodes.length + 1}`;

      // Create a new child node with the provided data
      const newChildNode = {
        id: newChildNodeId,
        position: {
          x: nodes.find((node) => node.id === clickedNodeId).position.x + 200,
          y: nodes.find((node) => node.id === clickedNodeId).position.y + 100,
        },
        data: { label: newNodeData || `Node ${nodes.length + 1}` },
      };

      // Add the new child node to the nodes array
      setNodes((prevNodes) => [...prevNodes, newChildNode]);

      // Connect the clicked node to the new child node
      setEdges((prevEdges) => [
        ...prevEdges,
        {
          id: `e-${clickedNodeId}-${newChildNodeId}`,
          source: clickedNodeId,
          target: newChildNodeId,
        },
      ]);

      closeModal();
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={{
          content: {
            width: "300px",
            margin: "auto",
          },
        }}
      >
        <h2>Enter Node Data</h2>
        <input
          type="text"
          value={newNodeData}
          onChange={(e) => setNewNodeData(e.target.value)}
        />
        <button onClick={handleAddChildNode}>Add Node</button>
      </Modal>
    </div>
  );
}
