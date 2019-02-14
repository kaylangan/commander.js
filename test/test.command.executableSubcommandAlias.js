var exec = require('child_process').exec
  , path = require('path')
  , should = require('should')
  , utils = require('./utils.js');

var bin = 'node ' + path.join(__dirname, './fixtures/pm')

// success case
exec(bin + ' i', function (error, stdout, stderr) {
  stdout.should.equal('install\n');
});

// subcommand bin file with explicit extension
exec(bin + ' p', function (error, stdout, stderr) {
  stdout.should.equal('publish\n');
});

// spawn EACCES
exec(bin + ' s', function (error, stdout, stderr) {
  // error info are not the same in between <v0.10 and v0.12
  // search command works on windows
  if (utils.isWindows()) {
    stdout.should.equal('search\n');
  } else {
    should.notEqual(0, stderr.length);
  }
});

// when `bin` is a symbol link for mocking global install
var bin = 'node ' + path.join(__dirname, './fixtures/pmlink')
// success case
exec(bin + ' i', function (error, stdout, stderr) {
  stdout.should.equal('install\n');
});
