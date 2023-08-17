# koffi-open-handle-demo

## Minimal Reproducible Code For Koffi Open Async Handle Issue

Simply loading the Koffi library leaves open async handles
that cause issues with jest when using `--detectOpenHandles`.

To reproduce with the repo:

1. Clone this repo locally
2. Run `npm install`
3. Run `npm run test`

As of koffi 2.5.11, the simplistic test itself passes, but jest throws the following error at the end:

```
Jest has detected the following 1 open handle potentially keeping Jest from exiting:

  ●  Koffi Async Callback Broker

       5 | Object.defineProperty(exports, "__esModule", { value: true });
       6 | exports.noop = void 0;
    >  7 | const koffi_1 = __importDefault(require("koffi"));
         |                                 ^
       8 | const test = koffi_1.default.types;
       9 | const noop = () => {
      10 |     console.log({ test });

      at Runtime._loadModule (node_modules/jest-runtime/build/index.js:1009:29)
      at Object.<anonymous> (node_modules/koffi/src/index.js:48:41)
      at Object.<anonymous> (dist/index.js:7:33)
      at Object.<anonymous> (dist/index.test.js:3:12)
```
