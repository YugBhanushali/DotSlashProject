import { useCallback,useState } from "react";
import { Handle, Position } from "reactflow";
import { IoIosAddCircleOutline,IoIosHeartEmpty } from "react-icons/io";
import { TreeGlobalContext } from "../context/TreeContext";
import { useLayoutedElements } from "../Pages/Tree";
import Modal from 'react-modal';

const customStyles = {
  content: {
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
    width: '300px',
    padding: '20px',
  },
};
Modal.setAppElement('#root');

const handleStyle = { left: 10 };

function CustomNode({ data, isConnectable,id }) {

  const {nodes,setNodes,onNodesChange,edges,setEdges,onEdgesChange} = TreeGlobalContext()

  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  // const { getLayoutedElements } = useLayoutedElements();
  const [showAddNodeModal, setShowAddNodeModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content,setContent] = useState("");

  const openAddNodeModal = () => {
    setShowAddNodeModal(true);
  };

  const closeAddNodeModal = () => {
    setShowAddNodeModal(false);
    
  };

  const handleAddNode = (id) => {
    // Validate the new node data (you can add more sophisticated validation logic)
    if (!title || !content) {
      alert("Please fill in both title and content.");
      return;
    }

    // Create a new node with a unique id
    const newNode = {
      id: `${id}-child-${nodes.length + 1}`, // You may need a more robust ID generation logic
      type: "custom", // Assuming the default node type, you can adjust this as needed
      data: { title: title, content: content, likes: 0 },
      position: { x: 0, y: 0 }, // Set the initial position as needed
    };

    // Update the nodes array with the new node
    setNodes((prevNodes) => [...prevNodes, newNode]);

    // Optionally, you can connect the new node to the parent node
    const newEdge = {
      id: `edge-${id}-${newNode.id}`,
      source: id,
      target: newNode.id,
    };
    setEdges((prevEdges) => [...prevEdges, newEdge]);

    // Close the modal after adding the new node
    closeAddNodeModal();
  };


  const IncreaseLike = (id) => {
    // Find the node with the given id and update the likes count
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, likes: node.data.likes + 1 } } : node
      )
    );
  };



  

  return (
    <div className="node flex flex-col relative min-w-[250px] h-[250px] max-h-[650px] rounded-xl nodrag border border-[#3a3a3a] shadow-md">
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <div className="bg-[#020308] flex gap-2 text-white text-pretty text-[12px] py-1 px-3 rounded-lg">
        <div>
          <img
            height={20}
            width={20}
            className=" rounded-full"
            src={data.img}
          />
        </div>
        <div>{data.title}</div>
      </div>
      <div className="bg-[#020308] text-white text-pretty text-sm h-full p-3 text-[8px] rounded-b-lg overflow-y-scroll border border-[#3a3a3a]">
        {data?.content}
      </div>
      <div className="bg-[#020308] flex justify-end items-center gap-2 rounded-lg py-2">
        <div>
          <button className="flex text-white justify-center items-center text-[13px] gap-1">
            <IoIosHeartEmpty onClick={()=>IncreaseLike(id)} color="white"/> <span className=" text-[10px]">{data?.likes}</span>
          </button>
        </div>
        <div className="mr-2">
          <button className="flex text-[13px]">
            <IoIosAddCircleOutline onClick={()=>{
              openAddNodeModal(id);
            }} color="white"/>
          </button>
        </div>
      </div>
      {/* <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      /> */}
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        isConnectable={isConnectable}
      />
      <Modal
      isOpen={showAddNodeModal}
      onRequestClose={closeAddNodeModal}
      style={customStyles}
      contentLabel="Add Node Modal"
    >
      <h2>Add Node</h2>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Content:
        <input type="text" value={content} onChange={(e) => setContent(e.target.value)}  />
      </label>
      <br />
      <button onClick={()=>handleAddNode(id)}>Add Node</button>
    </Modal>
    </div>
  );
}

export default CustomNode;

// const nodeTypes = useMemo(() => ({ custom: CustomNode }), []);

// return <ReactFlow nodeTypes={nodeTypes} />;
