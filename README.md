# @fozikio/tools-evolution

Evolution tracking plugin for cortex-engine. Propose and track identity changes -- shifts in values, preferences, patterns, or beliefs -- with an auditable proposal workflow.

## Install

```
npm install @fozikio/tools-evolution
```

## Tools

| Tool | Description |
|------|-------------|
| `evolve` | Propose an identity evolution with change description, trigger, confidence level, and dimension |
| `evolution_list` | List evolution proposals filtered by status (proposed, applied, rejected, reverted) |

## Usage

```yaml
# cortex-engine config
plugins:
  - package: "@fozikio/tools-evolution"
```

```typescript
import evolutionPlugin from "@fozikio/tools-evolution";
import { CortexEngine } from "@fozikio/cortex-engine";

const engine = new CortexEngine({
  plugins: [evolutionPlugin],
});
```

## Documentation

- **[Wiki](https://github.com/Fozikio/cortex-engine/wiki)** — Guides, architecture, and full tool reference
- **[Plugin Authoring](https://github.com/Fozikio/cortex-engine/wiki/Plugin-Authoring)** — Build your own plugins
- **[Contributing](https://github.com/Fozikio/.github/blob/main/CONTRIBUTING.md)** — How to contribute

## License

MIT
