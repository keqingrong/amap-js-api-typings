# amap-js-api-typings

[![npm version](https://img.shields.io/npm/v/amap-js-api-typings.svg)](https://www.npmjs.com/package/amap-js-api-typings)

Type definitions for [JavaScript APIs of AMap](https://lbs.amap.com/api/javascript-api/summary) in TypeScript

English | [简体中文](./README-zh-hans.md)

## Installation

```sh
npm install amap-js-api-typings
```

## Usage

Add the types package to your [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types) file. For example:

```json
{
  "compilerOptions": {
    "typeRoots" : [
      "./node_modules/@types",
      "./node_modules/amap-js-api-typings",
      "./typings",
    ]
  }
}
```

Or you could use it with [triple-slash directive](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html). For example:

```ts
// ./typings/global.d.ts
/// <reference types="amap-js-api-typings" />
```

## Thanks

Special thanks to the `@types/amap-js-api` contributors.

## Contributing

PRs accepted.

## License

MIT © Qingrong Ke
