# AeroWebsite

This template should help get you started developing with Vue 3 in Vite.
*Note: it's not made with mobile in mind!*

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Enviornment Setup
Install NodeJS https://nodejs.org/en/

In your terminal, type:
```sh
node -v
```
if a version number like *vXX.XX.X* appears then you’ve installed it

Then run: 
```sh
npm install -g @vue/cli
```

Then to install any project dependencies go into the project folder (cloned repo) and run:
```sh
npm install
```

Lastly, to insure you have Bulma installed, run:
```sh
npm install bulma --save
npm install -g sass
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```


### Deploying on Github Pages
```sh
npm run build
git add dist -f
git commit -m "adding dist"
git subtree push --prefix dist origin gh-pages
```