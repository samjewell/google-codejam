# CountingSheep Google Codejam solution

Sam Jewell, 10th April 2016

## Setup

`npm install`

(see the packages used in the `package.json` file)


## Running

To run the script, run this at the terminal:

Either print to the console:
```
node count.js < A-small-practice.in
```

Or pipe output to `stdout`

```
node count.js < A-small-practice.in > output.txt
```


## Debugging

First, make sure you have the node debugging tool installed globally:

```
npm install -g node-inspector
```

Then, add `debugger` anywhere in your code, and run this at the console:

```
node-debug count.js < A-small-practice.in
```


## ToDo

- [x] Start git
- [ ] Commit to github.
- [x] get lodash into the repo
- [ ] understand why lodash not available in closure if not used in closure. Compare to developing in the browser, rather than in node.js
- [ ] use babel for transpilation, with watcher (https://babeljs.io/docs/usage/cli/)
- [ ] switch on linting - make this an example repo for all katas