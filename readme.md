# Phaser 3 + TypeScript + Webpack 5 Template
> For people who want to spend time making Phaser 3 games in TypeScript instead of configuring build tools.

![License](https://img.shields.io/badge/license-MIT-green)

This is a fork of [phaser3-parcel-template](https://github.com/ourcade/phaser3-parcel-template).

## Prerequisites

You'll need [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/), and [Webpack](https://webpack.js.org/) installed.

It is highly recommended to use [Node Version Manager](https://github.com/nvm-sh/nvm) (nvm) to install Node.js and npm.

For Windows users there is [Node Version Manager for Windows](https://github.com/coreybutler/nvm-windows).

Install Node.js and `npm` with `nvm`:

```bash
nvm install node

nvm use node
```

Replace 'node' with 'latest' for `nvm-windows`.

Then install packages:

```bash
npm install
```

## Getting Started

Start development server:

```
npm run start
```

To create a production build:

```
npm run build
```

Production files will be placed in the `dist` folder. Then upload those files to a web server. 🎉

## Project Structure

```
    .
    ├── dist
    ├── node_modules
    ├── public
    ├── src
    │   ├── scenes
    │   │   ├── HelloWorldScene.ts
    │   ├── index.html
    │   ├── main.ts
    ├── package.json
```

The contents of this template is the basic [Phaser 3 getting started example](http://phaser.io/tutorials/getting-started-phaser3/part5).

This template assumes you will want to organize your code into multiple files and use TypeScript.

TypeScript files are intended for the `src` folder. `main.ts` is the entry point referenced by `index.html`.

Other than that there is no opinion on how you should structure your project. There is a `scenes` folder in `src` where the `HelloWorldScene.ts` lives but you can do whatever you want.

## Static Assets

Any static assets like images or audio files should be placed in the `public` folder. It'll then be served at http://localhost:5001/images/my-image.png

Example `public` structure:

```
    public
    ├── images
    │   ├── my-image.png
    ├── music
    │   ├── ...
    ├── sfx
    │   ├── ...
```

They can then be loaded by Phaser with `this.image.load('my-image', 'images/my-image.png')`.

## TypeScript ESLint

This template uses a basic `typescript-eslint` set up for code linting.

It does not aim to be opinionated.

## Dev Server Port

You can change the dev server's port number by modifying the port number in the `webpack.config.js`. The port is set on `5001`.

## Other Notes

No other notes. Unless you have one.

## License

[MIT License](https://github.com/Alt148/phaser3-webpack-template/blob/master/LICENSE)
