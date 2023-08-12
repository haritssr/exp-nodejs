const fs = require('fs');

fs.writeFileSync('./example.txt', "This is a longer note. Don't bother me.\n");

console.log(fs.readFileSync('./example.txt', { encoding: 'utf8', flag: 'r' }));

for (let i = 0; i < 5; i++) {
	fs.writeFileSync('./example.txt', ' New note no ' + i + '\n', {
		encoding: 'utf8',
		flag: 'a+',
		mode: 0o666,
	});
}

console.log(fs.readFileSync('./example.txt', { encoding: 'utf8', flag: 'r' }));
