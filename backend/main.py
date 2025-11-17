from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str

class Edge(BaseModel):
    id: str
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)
    
    # Check if pipeline is a DAG
    adj = {node.id: [] for node in pipeline.nodes}
    for e in pipeline.edges:
        adj[e.source].append(e.target)

    visited, stack = set(), set()

    def dfs(node):
        if node in stack:
            return False
        if node in visited:
            return True
        stack.add(node)
        for nei in adj[node]:
            if not dfs(nei):
                return False
        stack.remove(node)
        visited.add(node)
        return True

    is_dag = all(dfs(node.id) for node in pipeline.nodes)
    return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": is_dag}
