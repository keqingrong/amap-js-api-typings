# 高德地图类型定义文件

[![npm version](https://img.shields.io/npm/v/amap-js-api-typings.svg)](https://www.npmjs.com/package/amap-js-api-typings)

[高德地图 JavaScript API](https://lbs.amap.com/api/javascript-api/summary) 的 TypeScript 类型定义文件

[English](./README.md) | 简体中文

## 安装

```sh
npm install amap-js-api-typings
```

## 用法

你可以将该类型定义文件加到项目的 [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types) 编译配置中。例如：

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

或者搭配 [三斜线指令](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html) 使用。例如：

```ts
// ./typings/global.d.ts
/// <reference types="amap-js-api-typings" />
```

## 鸣谢

感谢 `@types/amap-js-api` 等包的贡献者。

## 贡献

欢迎提交 PR。

## 许可证

MIT © Qingrong Ke
