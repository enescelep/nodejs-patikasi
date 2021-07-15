const fs = require('fs');

fs.writeFile('./employees.json', '{"name": "Employee 1 Name", "salary": 2000}', (err) => {
    if (err) console.log(err);
    console.log('Added Employee One');
});

fs.readFile('./employees.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
});

fs.appendFile('./employees.json', '\n{"name": "Second Employee", "salary": 5000}', (err) => {
    if (err) console.log(err);
    console.log('Added Employee Two');
});

fs.unlink('./employees.json', (err) => {
   if (err) console.log(err);
   console.log('Deleted employees.json');
});