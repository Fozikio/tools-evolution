/**
 * @fozikio/tools-evolution — evolution tracking plugin for cortex-engine.
 *
 * Provides 2 tools: evolve, evolution_list.
 * Uses the generic CortexStore API (put/get/update/query) on the 'evolutions' collection.
 */

import type { ToolPlugin } from 'cortex-engine';
import { evolveTool } from './tools/evolve.js';
import { evolutionListTool } from './tools/evolution-list.js';

const plugin: ToolPlugin = {
  name: '@fozikio/tools-evolution',
  tools: [
    evolveTool,
    evolutionListTool,
  ],
};

export default plugin;

// Named re-exports for direct use
export { evolveTool } from './tools/evolve.js';
export { evolutionListTool } from './tools/evolution-list.js';
