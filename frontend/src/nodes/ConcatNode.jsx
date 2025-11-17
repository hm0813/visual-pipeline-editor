// frontend/src/nodes/ConcatNode.jsx
import React from "react";
import NodeBase from "./NodeBase";

export default function ConcatNode() {
  return (
    <NodeBase
      title="Text: Concat"
      color="#f97316"
      inputs={["text1", "text2"]}
      outputs={["joined"]}
    >
      <div style={{ fontSize: 12, color: "#334155" }}>
        Joins two strings → <code>text1 + text2</code>.
      </div>
    </NodeBase>
  );
}
