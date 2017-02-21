var PythonShell = require('python-shell');
var yearMin = 1961;
var yearMax = 2015;
var selectorX = 'gdp';
var selectorY = 'popdensity';

var options = {
  args: [yearMin, yearMax, selectorX, selectorY]
};

var pyshell = new PythonShell('test.py', options);

// pyshell.send('Hello');

pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement)
  d = JSON.stringify(message);
  m = JSON.parse(d);
  obj = eval('(' + m + ')');
  console.log(obj);
});

pyshell.end(function (err) {
  if (err) throw err;
  // console.log('finished');
});
