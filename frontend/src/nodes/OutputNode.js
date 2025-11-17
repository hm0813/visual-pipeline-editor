// frontend/src/nodes/OutputNode.jsx
import React, { useState } from "react";
import NodeBase from "./NodeBase";

export default function OutputNode({ id, data }) {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  return (
    <NodeBase title="Output" color="#dc2626" inputs={[`${id}-value`]} outputs={[]}>
      <div style={{ fontSize: 12, color: "#334155", marginTop: 6 }}>
        <label style={{ display: "block", marginBottom: 4 }}>
          Name:{" "}
          <input
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            style={{
              width: "100%",
              border: "1px solid #ccc",
              borderRadius: 4,
              padding: 4,
            }}
          />
        </label>
        <label style={{ display: "block" }}>
          Type:{" "}
          <select
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
            style={{
              width: "100%",
              border: "1px solid #ccc",
              borderRadius: 4,
              padding: 4,
            }}
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </NodeBase>
  );
}
