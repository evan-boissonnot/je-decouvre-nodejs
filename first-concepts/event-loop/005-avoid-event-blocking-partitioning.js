const n = process.argv.slice(2);
let sum = 0;

console.log(">> COST : O(n)");
for (let i = 0; i < n; i++)
  sum += i;

let avg = sum / n;
console.log('avg: ' + avg);

console.log(">> COST : O(1) each iteration");
function asyncAvg(n, avgCB) {
    // Save ongoing sum in JS closure.
    var sum = 0;
    function help(i, cb) {
      sum += i;
      if (i == n) {
        cb(sum);
        return;
      }
  
      // "Asynchronous recursion".
      // Schedule next operation asynchronously.
      setImmediate(help.bind(null, i+1, cb));
    }
  
    // Start the helper, with CB to call avgCB.
    help(0, function(sum){
        var avg = sum/n;
        avgCB(avg);
    });
  }
  
  asyncAvg(n, function(avg){
    console.log('avg of 1-n: ' + avg);
  });