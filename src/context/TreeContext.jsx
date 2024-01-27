import React,{useContext,createContext, useState} from 'react';
import {useNodesState,useEdgesState} from 'reactflow';
import { nanoid } from "nanoid";

const TreeContext = createContext()




const TreeContextWrapper = ({children}) => {

    const tree = {
        title: "",
        nodes: [
          {
            id: "1",
            position: { x: 0, y: 0 },
            data: {
              value: "Root",
              title: "dljsf",
              img: "https://github.com/shadcn.png",
              likes: 0,
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .",
              time: "",
            },
            targetPosition: "right",
            type: "custom",
          },
          {
            id: "2",
            position: { x: 0, y: 0 },
            data: {
              value: "Root",
              title: "dljsf",
              img: "https://github.com/shadcn.png",
              likes: 0,
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              time: "",
            },
            targetPosition: "right",
            type: "custom",
          },
          {
            id: "3",
            position: { x: 0, y: 0 },
            data: {
              value: "Root",
              title: "dljsf",
              img: "https://github.com/shadcn.png",
              likes: 0,
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              time: "",
            },
            targetPosition: "right",
            type: "custom",
          },
          {
            id: "4",
            position: { x: 0, y: 0 },
            data: {
              value: "Root",
              title: "dljsf",
              img: "https://github.com/shadcn.png",
              likes: 0,
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              time: "",
            },
            targetPosition: "right",
            type: "custom",
          },
          {
            id: "5",
            position: { x: 0, y: 0 },
            data: {
              value: "Root",
              title: "dljsf",
              img: "https://github.com/shadcn.png",
              likes: 0,
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              time: "",
            },
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

    // const initialNodes = tree.nodes
    // const initialEdges = tree.edges  

    const [nodes, setNodes, onNodesChange] = useNodesState(tree.nodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(tree.edges);
    
  return (
    <TreeContext.Provider value={{nodes,setNodes,onNodesChange,edges,setEdges,onEdgesChange}}>
        {children}
    </TreeContext.Provider>
  )
}

const TreeGlobalContext = () =>{
    return useContext(TreeContext);
}

export {TreeContextWrapper,TreeGlobalContext}
