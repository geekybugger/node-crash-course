const path = require('path');

//Base file name
console.log(__filename, __dirname)
console.log(path.basename(__filename))

//Directory name
console.log(path.dirname(__filename)) // same as __dirname but uses path module

//File extension
console.log(path.extname(__filename))

//Create path object
console.log(path.parse(__filename).base)

//Concatenate paths
console.log(path.join(__dirname,'test','hello.html'))
// This is important and it solves the path compatiblity issues in diiferent platforms 

