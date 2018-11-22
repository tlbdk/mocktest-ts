# Module imports and mocking

Sample code to test different types of mocking

## How module import and require work

This is a simplified explanation of how module import and require works:

main.js:

``` javascript
// const my = require('./my.js')
let my = myJsModule
my.test()

// let { test } = require('./my.js')
let test = myJsModule.test // test function reference is copied
test()

// import * as my from './my.js'
let my = Object.assign({}, myJsModule) // test reference is copied to a new object
my.test()

// import * as my from './my.ts'
let my = myTsModule
my.test()

// import * as my from './my.mjs'
let my = myMjsModule
my.test()

// import { test } from './my.js'
let my_1 = myJsModule
// test()
my_1.test()

// import { test as test2 } from './my.js'
let my_1 = myJsModule
// test2()
my_1.test()
```

my.js:

``` javascript
function test() {
  return "hello"
}
// module.exports = { test }
myJsModule = { test } // Declare the module as a global
```

my.ts:

``` javascript
// export function test() {
//  return "hello"
// }
function test() {
  return "hello"
}
// module.exports = { test }
myTsModule = { test }
```

my.mjs:

``` javascript
// export function test() {
//  return "hello"
// }
function test() {
  return "hello"
}
myMjsModule = { test }
```

## VSCode

launch.json:

``` json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "name": "vscode-jest-tests",
      "request": "launch",
      "args": [
        "--runInBand",
        "--coverage=false"
      ],
      "cwd": "${workspaceFolder}",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "program": "${workspaceFolder}/node_modules/jest/bin/jest"
    }
  ]
}
```

settings.json:

``` json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "tslint.enable": true,
  "tslint.autoFixOnSave": true,
  "files.exclude": {
    "**/.git": true,
    "**/.DS_Store": true,
    "build": true
  },
  "jest.showCoverageOnLoad": false,
  "jest.autoEnable": true,
  "jest.runAllTestsFirst": true,
  "eslint.enable": false,
  "git.ignoreLimitWarning": true
}
```

tasks.json:

``` json
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "typescript",
      "tsconfig": "tsconfig.json",
      "problemMatcher": [
        "$tsc"
      ],
      "group": {
        "kind": "build",
        "isDefault": true
      }
    },
    {
      "type": "typescript",
      "tsconfig": "tsconfig.json",
      "option": "watch",
      "problemMatcher": [
        "$tsc-watch"
      ]
    }
  ]
}
```
