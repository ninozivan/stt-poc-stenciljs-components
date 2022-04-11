# stt-poc-stenciljs-components

Test project for STT

# VSCode extensions

- `Prettier`

# Dependencies

- `nvm` (e.g. 1.1.9)
- `NodeJS` (e.g. 16.10.0)
- `npm` (e.g. 8.6.0)
- `StencilJS` (npm install @stencil/core@latest --save-exact)

# Common StencilJS commands

- `npm run generate` for creating new component
- `npm start` Starts the development server
- `npm run build` Builds your components/app in production mode.
- `npm test` Starts the test runner.

# How to publish npm package

- Using the terminal, login to the npm (`npm login`)
- Enter username & pass
- Change lib version inside the `package.json` file ("version": "x.x.x")
- Run `npm run build`
- Run `npm publish`
