import { Command } from 'commander';
import { app } from './agent';

const program = new Command();

program
  .name('langraph-cli')
  .description('Working LangGraph CLI')
  .version('1.0.0');

program.command('process')
  .argument('<input>', 'input to process')
  .action(async (input) => {
    try {
      const result = await app.invoke({ input });
      console.log('Result:', result.output);
    } catch (error) {
      console.error('Error:', error);
    }
  });

program.parseAsync().catch(console.error);