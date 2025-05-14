// @ts-nocheck
import { StateGraph } from '@langchain/langgraph';
import { RunnableLambda } from '@langchain/core/runnables';

// Create processing node
const processNode = new RunnableLambda({
  func: (state: { input: string }) => ({
    output: `Processed: ${state.input}`
  })
});

// Create graph with minimal configuration
const workflow = new StateGraph({
  channels: {
    input: { value: null },
    output: { value: null }
  }
});

// Add node
workflow.addNode("process", processNode);

// Set edges
workflow.addEdge("process", "__end__");

// Set entry point
workflow.setEntryPoint("process");

// Compile the graph
export const app = workflow.compile();