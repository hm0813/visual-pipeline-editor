// frontend/src/nodes/InputNode.jsx
import React, { useState } from "react";
import NodeBase from "./NodeBase";

export default function InputNode({ id, data }) {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");

  return (
    <NodeBase title="Input" color="#16a34a" inputs={[]} outputs={[`${id}-value`]}>
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
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            style={{
              width: "100%",
              border: "1px solid #ccc",
              borderRadius: 4,
              padding: 4,
            }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </NodeBase>
  );
}
