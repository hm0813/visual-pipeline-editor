// frontend/src/nodes/SwitchNode.jsx
import React from "react";
import NodeBase from "./NodeBase";

export default function SwitchNode() {
  return (
    <NodeBase
      title="Logic: Switch"
      color="#a855f7"
      inputs={["condition", "trueCase", "falseCase"]}
      outputs={["result"]}
    >
      <div style={{ fontSize: 12, color: "#334155" }}>
        Returns <code>trueCase</code> if condition is true, else <code>falseCase</code>.
      </div>
    </NodeBase>
  );
}
