import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };
 
function CustomNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="node flex flex-col relative min-w-[250px] h-[250px] max-h-[650px] rounded-lg nodrag border border-[#3a3a3a] shadow-md">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <div className='bg-[#020308] flex gap-2 text-white text-pretty text-[12px] py-1 px-3 rounded-t-lg'>
      <div>
        <img height={20} width={20} className=' rounded-full' src={data.img}/>
      </div>
      <div>
        {data.title}
      </div>
      </div>
      <div className="bg-[#020308] text-white text-pretty text-sm h-full p-3 text-[8px] rounded-b-lg overflow-y-scroll border border-[#3a3a3a]">
        {data?.content}
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