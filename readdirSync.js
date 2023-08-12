const fs = require('fs');
const path = require('path');

// let filenames = fs.readdirSync('./yes', { withFileTypes: true });
// filenames.forEach(file => console.log(file));
// console.log(filenames);

// let filenamesDirent = fs.readdirSync('./yes', { withFileTypes: true });
// filenamesDirent.forEach(file => console.log(file));
// console.log(filenamesDirent);

let mdFiles = fs.readdirSync('./yes');
mdFiles.forEach(file => {
	if (path.extname(file) == '.ts') {
		console.log(file);
	}
});
