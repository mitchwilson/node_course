const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, 'test'), {}, err => {
//   if(err) throw err;
//   console.log('Folder created');
// });

// Create and write to file
// fs.writeFile(path.join(__dirname, 'hello.txt'), 'Hello world', err => {
//   if(err) throw err;
//   console.log('File created');
//
//   // Create and write to file
//   fs.appendFile(path.join(__dirname, 'hello.txt'), ' I love nodejs', err => {
//     if(err) throw err;
//     console.log('File created');
//   });
// });

// Read file
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
//   if(err) throw err;
//   console.log(data);
// });

// Read file
fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'helloworld.txt'), (err, data) => {
  if(err) throw err;
  console.log(data);
});
