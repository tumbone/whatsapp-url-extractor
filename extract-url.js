const readline = require('readline');
const fs = require('fs');
// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
  }
// Read the file and print its contents.
const readInterface = readline.createInterface({
    input: fs.createReadStream(process.argv[2]),
    // output: process.stdout,
    console: false
});
readInterface.on('line', (line) => {
    if (line.includes('http')) {
        urlsFound = urlOut(line);
        urlsFound.forEach(element => appendUrlToFile(element + '\n'));
    }
});
const urlOut = lineInput => {
    lineList = lineInput.split(' ');
    return lineList.filter((lineItem) => lineItem.includes('http'));    
}
// Write urls extracte to output file
const appendUrlToFile = url => {
    fs.appendFile('urls-extracted.txt', url, err => {
        if (err) {
          console.error(err)
          return
        }
    });
}