const os = require('os');

//Platform
console.log(os.platform());

//CPU Arch
console.log(os.arch());

//CPU Core Info
console.log(os.cpus());

//Free and total memory
console.log(os.freemem());
console.log(os.totalmem());

//Home dir
console.log(os.homedir());
console.log(os.hostname());

//Uptime
console.log(os.uptime());