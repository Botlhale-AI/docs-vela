# Vela Documentation

The Vela documentation site, built with [Docusaurus](https://docusaurus.io/).

This repository uses **npm**. `package-lock.json` is the lockfile CI installs from, so use npm rather than yarn to keep your tree matching the one that gets checked.

## Installation

```
npm install
```

## Local development

```
npm start
```

Starts a local development server and opens a browser window. Most changes appear live without restarting the server.

## Checking your work

```
npm run check
```

Runs the documentation linter and then the build, which is exactly what CI runs on every push. Either command can be run on its own:

```
npm run lint:docs
npm run build
```

The linter enforces the rules in [STYLE_GUIDE.md](./STYLE_GUIDE.md) that the build cannot see: frontmatter, house style, images, links, and navigation. The build fails on broken links and anchors. Run `npm run check` before you commit.

`npm run build` generates static content into `build`, which any static host can serve.

## Writing

Read [STYLE_GUIDE.md](./STYLE_GUIDE.md) before editing a page, and [DOCUMENTATION_FRAMEWORK.md](./DOCUMENTATION_FRAMEWORK.md) before adding one or restructuring a section.

## Deployment

Using SSH:

```
USE_SSH=true npm run deploy
```

Otherwise:

```
GIT_USER=<GitHub username> npm run deploy
```

This builds the site and pushes it to the `gh-pages` branch.
