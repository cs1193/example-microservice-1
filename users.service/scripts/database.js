#!/usr/bin/env node

const _ = require('lodash');
const argv = require('yargs').argv;
const spawn = require('cross-spawn');

console.log(argv);

function init () {
  let list = spawn('npm', ['run', 'test'], { stdio: 'inherit' });
  console.log(list);
}
