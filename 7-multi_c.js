const arg = ['x', 'C is fun']
for (let i = 0; i < arg.length; i++) {
    if(arg[i]!==parseInt(arg[i])){
        console.log(`Missing number of occurrences ${i}`);
    }else if(arg[i]===parseInt(arg[i]) && arg[i]!==0){
        console.log(`Number of occurrences ${i}`);
    }
//   console.log(arg[i]);
}