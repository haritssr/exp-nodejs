const fs = require('fs');

fs.readFile('./example.txt', { encoding: 'utf8', flag: 'r' }, function (err, data) {
	err ? console.log(err) : console.log(data);
});

const data = fs.readFileSync('./example2.txt', { encoding: 'utf8', flag: 'r' });
console.log(data);
