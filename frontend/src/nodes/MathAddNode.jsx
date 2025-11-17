// frontend/src/nodes/MathAddNode.jsx
import React from "react";
import NodeBase from "./NodeBase";

export default function MathAddNode() {
  return (
    <NodeBase
      title="Math: Add"
      color="#ef4444"
      inputs={["a", "b"]}
      outputs={["sum"]}
    >
      <div style={{ fontSize: 12, color: "#334155" }}>
        Outputs the sum of <code>a + b</code>.
      </div>
    </NodeBase>
  );
}
