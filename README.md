# Prettier configuration

![Build](https://github.com/electerious/prettier-config/workflows/Build/badge.svg)

Shareable Prettier configuration for my personal projects.

## Install

Install this package. It already includes Prettier and the necessary plugins.

```
npm install --save-dev @electerious/prettier-config
```

## Usage

Create a file named `.prettierrc.js` with following contents in the root folder of your project:

```js
module.exports = {
  ...require('@electerious/prettier-config'),
}
```

That's it! You can override the settings by editing the `.prettierrc.js` file.
