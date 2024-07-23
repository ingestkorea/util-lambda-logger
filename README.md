# @ingestkorea/util-lambda-logger

[![npm (scoped)](https://img.shields.io/npm/v/@ingestkorea/util-lambda-logger?style=flat-square)](https://www.npmjs.com/package/@ingestkorea/util-lambda-logger)
[![NPM downloads](https://img.shields.io/npm/dm/@ingestkorea/util-lambda-logger?style=flat-square)](https://www.npmjs.com/package/@ingestkorea/util-lambda-logger)

## Description

INGESTKOREA Utility Lambda Log Handler for Node.js.

## Installing

```sh
npm install @ingestkorea/util-lambda-logger
```

## Getting Started

### Pre-requisites

- Use TypeScript v5.x
  ```sh
  npm install -D typescript # save dev mode
  ```

### Import

```ts
// ES5 example
const { lambdaLogger } = require("@ingestkorea/util-lambda-logger");
```

```ts
// ES6+ example
import { lambdaLogger } from "@ingestkorea/util-lambda-logger";
```

### Usage

Async/await

```ts
// Set Label, Message
import { lambdaLogger, LambdaLoggerInput } from "@ingestkorea/util-lambda-logger";

(async () => {
  let params: LambdaLoggerInput = {
    label: "INFO", // optional "INFO" | "ERROR"
    message: "hello world", // required Object | String
  };
  await lambdaLogger(params);
})();
```

## License

This Utility is distributed under the [MIT License](https://opensource.org/licenses/MIT), see LICENSE for more information.
