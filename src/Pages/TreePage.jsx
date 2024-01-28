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

const TreePage = () => {
  // const messages = [    mdmlk f,v
  //   {
  //     id: 1,
  //     message: "example message 1",
  //     likes: 10
  //   },
  //   {
  //     id: 2,
  //     message: "example message 2",
  //     likes: 10
  //   },
  //   {
  //     id: 3,
  //     message: "example message 3",
  //     likes: 10
  //   },
  //   {
  //     id: 4,
  //     message: "example message 4",
  //     likes: 10
  //   }
  // ];

  const [messages, setMessages] = useState([]);
  const {nodes,setNodes,onNodesChange,edges,setEdges,onEdgesChange} = TreeGlobalContext()

  useEffect(() => {

    const fetchData = async ()=>{
      const q = query(collection(db,"trees"))
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const fetchedMessages = [];
        querySnapshot.forEach((doc) => {
          if(doc.id === "ajSaWzSv9PPtujH2HLYG"){
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
      return ()=>unsubscribe();
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
