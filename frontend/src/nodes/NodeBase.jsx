import { Handle, Position } from "reactflow";

export default function NodeBase({ title, color, inputs = [], outputs = [], children, style }) {
  return (
    <div
      style={{
        border: `2px solid ${color}`,
        borderRadius: 8,
        padding: 10,
        background: "white",
        width: 240,
        ...style,
      }}
    >
      <strong style={{ color }}>{title}</strong>

      {/* INPUT HANDLES (Left side) */}
      {inputs.map((id, i) => (
        <Handle
          key={id}
          id={id}
          type="target"
          position={Position.Left}
          style={{
            top: 40 + i * 20,
            background: color,
            width: 10,
            height: 10,
          }}
        />
      ))}

      {/* OUTPUT HANDLES (Right side) */}
      {outputs.map((id, i) => (
        <Handle
          key={id}
          id={id}
          type="source"
          position={Position.Right}
          style={{
            top: 40 + i * 20,
            background: color,
            width: 10,
            height: 10,
          }}
        />
      ))}

      <div style={{ marginTop: 10 }}>{children}</div>
    </div>
  );
}
