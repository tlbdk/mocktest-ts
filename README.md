# mocktest-ts

Sample code to test different types of mocking

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
