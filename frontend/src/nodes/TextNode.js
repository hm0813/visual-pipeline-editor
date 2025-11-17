import React, { useMemo, useState, useRef, useEffect } from "react";
import NodeBase from "./NodeBase";
import { Handle, Position } from "reactflow";

const VAR_RE = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;

export default function TextNode({ data }) {
  const [text, setText] = useState(data?.text || "");
  const [height, setHeight] = useState(80);
  const taRef = useRef(null);

  // Auto-resize text area
  useEffect(() => {
    const ta = taRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = ta.scrollHeight + "px";
    setHeight(Math.max(80, ta.scrollHeight + 24));
  }, [text]);

  // Detect {{variables}}
  const vars = useMemo(() => {
    const names = new Set();
    let m;
    while ((m = VAR_RE.exec(text)) !== null) {
      names.add(m[1]);
    }
    return Array.from(names);
  }, [text]);

  return (
    <div style={{ width: 260 }}>
      <NodeBase
        title="Text"
        color="#0ea5e9"
        inputs={vars}
        outputs={["out"]}
        style={{ width: 260, minHeight: height }}
      >
        <textarea
          ref={taRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type here. Use {{name}} to create inputs."
          style={{
            width: "100%",
            minHeight: 56,
            outline: "none",
            border: "1px solid #cbd5e1",
            borderRadius: 8,
            padding: 8,
            fontSize: 14,
            resize: "none",
          }}
        />
        <div style={{ marginTop: 6, fontSize: 11, color: "#64748b" }}>
          Vars found: {vars.length ? vars.join(", ") : "none"}
        </div>
      </NodeBase>
    </div>
  );
}
