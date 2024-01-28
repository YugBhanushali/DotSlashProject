import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDoc,
  doc,
  where,
} from "firebase/firestore";
import { db } from "../firebase"; // Import your Firebase configuration
import TreeChart from "./Tree";
import Tree from "./Tree";
import { TreeGlobalContext } from "../context/TreeContext";
import { useParams } from "react-router-dom";

const TreePage = () => {
  
  const treeParams =useParams()
  const [messages, setMessages] = useState([]);
  const { nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange } = TreeGlobalContext()

  useEffect(() => {

    const fetchData = async () => {
      const q = query(collection(db, "trees"))
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const fetchedMessages = [];
        querySnapshot.forEach((doc) => {
          if (doc.id === String(treeParams.tree)) {
            fetchedMessages.push({ ...doc.data(), id: doc.id });
          }
          // console.log("accessed")
          // console.log(doc.data());
        });
        console.log("fetchedMessages")
        console.log(fetchedMessages);
        setMessages(fetchedMessages);
        setNodes(fetchedMessages[0].trees.nodes)
        setEdges(fetchedMessages[0].trees.edges)
      });
      return () => unsubscribe();
    }


    fetchData();
  }, []);

  return (
    <>
      <div>
        <Tree
          nodes={messages[0]?.text?.nodes}
          edges={messages[0]?.text?.edges}
        />
      </div>
    </>
  );
};

export default TreePage;