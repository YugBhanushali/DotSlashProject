import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };
 
function CustomNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="node flex flex-col relative min-w-[250px] min-h-[250px] rounded-lg">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <div className='bg-[#ED7D31] text-white text-pretty text-[12px] py-1 px-3 rounded-t-lg'>
        {data.label}
      </div>
      <div className="bg-[#6C5F5B] text-white text-pretty text-sm h-full p-3 text-[8px] rounded-b-lg overflow-y-scroll">
        {data.value}
      </div>
      {/* <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      /> */}
      <Handle type="source" position={Position.Right} id="b" isConnectable={isConnectable} />
    </div>
  );
}
 
export default CustomNode;

// const nodeTypes = useMemo(() => ({ custom: CustomNode }), []);
 
// return <ReactFlow nodeTypes={nodeTypes} />;