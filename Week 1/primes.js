var fs = require("fs");
var outfile = "output.txt";
function isPrime(n){
	if(n == 1) return false;
	if(n == 2) return true;
	if(n%2 == 0 ) return false;
	for(i = 3; i <= Math.sqrt(n); i += 2){
		if(n%i == 0) return false;
	}
	return true;
}
out = [];
function primes(){
	k = 2;
	count = 0;
	while(count < 100){
		if(isPrime(k)){
			out.push(k);
			count++;
		}
		k++;
		console.log("i="+k);
	}
}
primes();
fs.writeFileSync(outfile, out.join());
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
