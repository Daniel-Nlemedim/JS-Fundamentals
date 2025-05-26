const args = process.argv;

if(args.length == 0){
    console.log( args[0] || 'No arguments found');
}else if(args.length == 1){
    console.log(args[1] || 'Single argument found');
}else if(args.length == 2 ){
    console.log(args[2] || 'Multiple arguments found');
}else {
    console.log('Arguments found')
}
