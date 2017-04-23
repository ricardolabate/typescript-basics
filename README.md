**Typescript Basics**
Examples based on Udemy course by  Maximilian Schwarzmueller

**Additional notes on configuring Typescript**
Each folder has a notes.txt file with orientations on how to run tsc files locally

**Commands and packages**

lite-server = to create a small server

npm start = start lite-server (package.json)

tsc --init = compile all Typescript (creates tsconfig.json)

tsc = compile app.ts -> app.js

tsc --watch OR tsc -w -> auto reload ts

tsc --outFile app.js file1.ts file2.ts app.ts -> bundle all the ts files into one file.

tsc app.ts --outFile app.js -> compile all the ts files to use with:
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

TO IMPORT MODULES ON TYPESCRIPT

tsc --outFile app.js - to use import with "amd" on tsconfig.json

- To work with Modules we need a Module Loader:

SystemJS - https://github.com/systemjs/systemjs

and we can use Explicit Dependency Declaration.