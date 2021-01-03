var cluster = require('cluster');

console.log("Starting new node...");
if (cluster.isMaster) {
  var noOfWorkers = 
       process.env.NODE_WORKERS || require('os').cpus().length;
  for(var i=0; i < noOfWorkers; i++) {
    cluster.fork();
  }
   //restart on death of any sub process
  cluster.on('exit', function (worker, code, signal){
    var exitCode = worker.process.exitCode;
    console.log('worker ' + worker.process.pid + ' died ('+exitCode+'). restarting...');
    cluster.fork();
    console.log(cluster.workers);
  });

} else {
  require('./app.js');
}

