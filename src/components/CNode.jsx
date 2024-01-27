import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import { IoIosAddCircleOutline,IoIosHeartEmpty } from "react-icons/io";
import { TreeGlobalContext } from "../context/TreeContext";

const handleStyle = { left: 10 };

function CustomNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  const IncreaseLike = () => {
    
  }

  const {nodes,setNodes,onNodesChange,edges,setEdges,onEdgesChange} = TreeGlobalContext

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
            <IoIosHeartEmpty onClick={()=>data.IncreaseLike(data.id)} color="white"/> <span className=" text-[10px]">{data?.likes}</span>
          </button>
        </div>
        <div className="mr-2">
          <button className="flex text-[13px]">
            <IoIosAddCircleOutline color="white"/>
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
    </div>
  );
}

export default CustomNode;

// const nodeTypes = useMemo(() => ({ custom: CustomNode }), []);

// return <ReactFlow nodeTypes={nodeTypes} />;
