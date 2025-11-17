// frontend/src/nodes/LLMNode.jsx
import React from "react";
import NodeBase from "./NodeBase";

export default function LLMNode({ id }) {
  return (
    <NodeBase
      title="LLM"
      color="#9333ea" // purple for AI nodes
      inputs={[`${id}-system`, `${id}-prompt`]}
      outputs={[`${id}-response`]}
    >
      <div style={{ fontSize: 12, color: "#334155", marginTop: 6 }}>
        This node connects to a Large Language Model (LLM).
      </div>
    </NodeBase>
  );
}
