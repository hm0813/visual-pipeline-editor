

# 🌐 Visual Pipeline Editor (React + FastAPI)

A fully interactive **node-based pipeline editor** built with **React, ReactFlow, Zustand, and FastAPI**.
This tool allows users to visually create workflows by dragging and connecting nodes such as **Input**, **LLM**, **Text**, and **Output**, with real-time graph validation.

---

## 🚀 Features

### 🔷 1. Reusable Node Abstraction

Implemented a shared `NodeBase.jsx` component to standardize structure, styling, and handle configuration across all nodes.
This allows new nodes to be created quickly by simply defining their inputs, outputs, and unique content.

### 🔷 2. Dynamic Text Node

The Text Node includes advanced functionality:

* Auto-resizing height based on user input
* Detection of variables like `{{name}}` or `{{user_input}}`
* Automatic creation of input handles for each variable
* Smooth UI updates using React hooks (`useMemo`, `useEffect`)

### 🔷 3. Additional Demo Nodes

Five extra nodes were created to demonstrate abstraction flexibility:

* MathAdd
* Concat
* Uppercase
* Delay
* Switch

Each is built in only a few lines using the shared NodeBase component.

### 🔷 4. Clean, Unified Styling

A modern UI inspired by VectorShift’s design language:

* Soft shadows
* Rounded corners
* Consistent color palette
* Improved spacing & typography

### 🔷 5. Backend Integration (FastAPI)

The backend includes a `/pipelines/parse` endpoint that:

* Receives pipeline nodes + edges
* Counts nodes and edges
* Validates whether the pipeline is a **Directed Acyclic Graph (DAG)**
* Returns the result as JSON
* Is fully CORS-enabled for local development

### 🔷 6. Submit Button → Full Pipeline Parsing

The frontend sends the entire ReactFlow graph to the backend and displays:

* Node count
* Edge count
* DAG status
  in a clean alert popup.

---

## 📁 Project Structure

```
/frontend
  ├── src
  │   ├── nodes
  │   │   ├── NodeBase.jsx
  │   │   ├── InputNode.jsx
  │   │   ├── OutputNode.jsx
  │   │   ├── LLMNode.jsx
  │   │   ├── TextNode.jsx
  │   │   └── (demo nodes)
  │   ├── ui.js
  │   ├── store.js
  │   ├── submit.js
  │   └── index.js
/backend
  ├── main.py
  └── (FastAPI environment)
```

---

## 🛠 Tech Stack

### **Frontend**

* React
* ReactFlow
* Zustand
* JavaScript
* CSS

### **Backend**

* FastAPI
* Python
* Pydantic

---

## ▶️ How to Run the Project Locally

### **Frontend (React)**

1. Open terminal & navigate to the frontend folder:

   ```
   cd frontend
   ```
2. Install dependencies:

   ```
   npm install
   ```
3. Start the development server:

   ```
   npm start
   ```
4. Open the app in your browser:
   **[http://localhost:3000](http://localhost:3000)**

---

### **Backend (FastAPI)**

1. Open a new terminal & navigate to the backend folder:

   ```
   cd backend
   ```
2. Start the server:

   ```
   uvicorn main:app --reload
   ```
3. Backend runs at:
   **[http://127.0.0.1:8000](http://127.0.0.1:8000)**

---

## 🧪 Example Use Case

A simple sample pipeline:

1. **Input Node** → Provides user text
2. **Text Node** → Uses variables like `{{user_name}}`
3. **LLM Node** → Simulates prompt processing
4. **Text Node** → Formats final message
5. **Output Node** → Displays the result

This demonstrates text interpolation, variable handles, and multi-step data flow.


---

## 📦 Output JSON Example

Backend returns:

```json
{
  "num_nodes": 5,
  "num_edges": 4,
  "is_dag": true
}
```

---

## ✨ Highlights & What This Project Demonstrates

* Strong frontend architecture
* Clean reusable component design
* Real-time dynamic UI behavior
* Full-stack integration & data flow
* Understanding of DAG computation & graph algorithms
* Production-ready code quality

---

## 👩‍💻 Author

**Harshita Mathpal**
