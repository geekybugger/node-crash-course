const url = require('url');

const myUrl = new URL('https://mywebsite.com:8000/hello.html?id=100&status=active')

//Serialized url
console.log(myUrl.href);
console.log(myUrl.toString());
//Host (root domain)
console.log(myUrl.host)
console.log(myUrl.hostname)
//Pathname
console.log(myUrl.pathname)
//Selarized query
console.log(myUrl.search)
//Params object
console.log(myUrl.searchParams)
//Add params
myUrl.searchParams.append('abc','123')
console.log(myUrl.searchParams)
console.log(myUrl.toString())
//Loop through params
myUrl.searchParams.forEach((value,name) => console.log(`${name} : ${value}`))