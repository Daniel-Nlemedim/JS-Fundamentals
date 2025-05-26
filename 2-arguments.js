const args = process.argv.slice(1);

if(args.length === 0){
    console.log( 'No arguments found');
}else if(args.length === 1){
    console.log( 'Single argument found');
}else {
    console.log('Arguments found')
}

const args2 = process.argv.slice(2);
if(args2.length === 0){
    console.log( 'No arguments found');
}