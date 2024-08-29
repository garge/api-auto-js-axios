Create a folder and goto terminal of vscode
npm init -y
npm install mocha chai axios --save-dev

Open the package.json file and modify the "scripts" section to include a test command:
"scripts": {
    "test": "mocha"
}

This allows you to run your tests using npm test.

Create a new directory called test and add a test file:
    mkdir test
    touch test/apiTests.js

Inside apiTests.js, write your code.

