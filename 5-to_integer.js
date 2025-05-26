const args = process.argv[2];
const converted = parseInt(args);
if (isNaN(converted)) {
    console.log('Not a number');
} else {
    console.log(`My number: ${converted}`);
}