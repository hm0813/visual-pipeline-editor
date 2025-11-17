// frontend/src/nodes/DelayNode.jsx
import React from "react";
import NodeBase from "./NodeBase";

export default function DelayNode() {
  return (
    <NodeBase
      title="Utility: Delay"
      color="#10b981"
      inputs={["input"]}
      outputs={["delayed"]}
    >
      <div style={{ fontSize: 12, color: "#334155" }}>
        Adds a time delay before passing the value through.
      </div>
    </NodeBase>
  );
}
