# jestCoverageBug

repoduce the bug

```
yarn
jest
```

look in coverage folder for index.html file. hasFunctions will be fully covered while index.js should be excluded because it has no actual code, just imports and exports.
