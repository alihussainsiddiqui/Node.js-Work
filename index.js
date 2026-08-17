console.log("Node.js is running successfully!");
const os = require('os');
const path = require('path');

console.log("Your Username:", os.userInfo().username);

const filename = path.basename('/Users/Teachers/nodejswork/index.js');
console.log(filename);

const filenameWithoutExt = path.basename('/Users/Teachers/nodejswork/index.js', '.js');
console.log(filenameWithoutExt);

const extension = path.extname('index.js');
console.log(extension);

const fullPath = path.join('/Users', 'Teachers', 'index.js');
console.log(fullPath)

console.log(path.resolve(__dirname, 'index.js'));

const pathInfo = path.parse('/Users/Teachers/nodejswork/index.js');
console.log(pathInfo);
console.log('Directory:', pathInfo.dir);
console.log('Filename:', pathInfo.base);
console.log('Name only:', pathInfo.name);
console.log('Extension:', pathInfo.ext);

const pathString = path.format({
root: '/',
dir: '/Teachers/nodejswork',
name: 'index',
ext: '.js'
});
console.log(pathString)
