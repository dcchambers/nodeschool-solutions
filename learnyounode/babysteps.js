var args = process.argv;
var sum = 0, i;
for (i = 2; i < args.length; i++) {
    sum += Number(args[i]);
}
console.log(sum);