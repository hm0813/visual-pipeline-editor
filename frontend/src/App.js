// frontend/src/App.js
import React from "react";
import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  // Assuming your PipelineUI manages nodes & edges,
  // we can lift their state up or pass them through context.
  // For now, we’ll assume PipelineUI exports nodes and edges (adjust as needed).

  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      {/* temporary static props — replace with actual nodes/edges from state */}
      <SubmitButton />
    </div>
  );
}

export default App;
