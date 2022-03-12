const path = require('path');

const { spawn } = require('child_process');

let args = ['run', 'build', '--scope=web']

let cmd = './node_modules/.bin/turbo'



console.log(cmd, args)
spawn(cmd, [...args], {
  cwd: path.resolve(__dirname, '..'),
  detached: true,
  stdio: 'inherit',
});
