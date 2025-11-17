// submit.js
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    // Prepare payload
    const payload = { nodes, edges };

    try {
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      // Show alert with backend response
      alert(`✅ Pipeline Summary:\nNodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag}`);
    } catch (error) {
      alert('Error submitting pipeline: ' + error.message);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={handleSubmit} style={{
        backgroundColor: '#0a0a0a',
        color: 'white',
        borderRadius: '6px',
        padding: '8px 20px',
        border: 'none',
        cursor: 'pointer'
      }}>
        Submit
      </button>
    </div>
  );
};
