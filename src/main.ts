import { app } from './agent';

async function main() {
  const result = await app.invoke({ input: "Test input" });
  console.log('Result:', result.output);
}

main().catch(console.error);