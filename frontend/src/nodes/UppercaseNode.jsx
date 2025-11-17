// frontend/src/nodes/UppercaseNode.jsx
import React from "react";
import NodeBase from "./NodeBase";

export default function UppercaseNode() {
  return (
    <NodeBase
      title="Text: Uppercase"
      color="#3b82f6"
      inputs={["text"]}
      outputs={["upper"]}
    >
      <div style={{ fontSize: 12, color: "#334155" }}>
        Converts input text to UPPERCASE.
      </div>
    </NodeBase>
  );
}
