# Meru Docs

Documentation website for Meru, built using [Startlight](https://starlight.astro.build/).

[Getting started](#getting-started) |
[Commands](#commands) |
[Local development](#local-development) |

## Local development

To get it up and running:

```bash
# Enable corepack for the local version of node
corepack enable

# Install dependencies
yarn

# Start the app at localhost:4321
yarn dev
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `yarn install`         | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn preview`         | Preview your build locally, before deploying     |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help` | Get help using the Astro CLI                     |

## Project structure

Starlight projects use the following structure:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

### Components

Starlight comes with a number of [built-in components](https://starlight.astro.build/components/using-components/#built-in-components) for use in MDX files. We’ll author additional components as needed.
