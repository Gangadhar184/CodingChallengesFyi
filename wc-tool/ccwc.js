const fs = require('fs');
const args = process.argv;

if (args.length !== 4 || (args[2] !== '-c' && args[2] !== '-l' && args[2] !== '-w' && args[2] !== '-m')) {
    console.log('wrong arguments');
    process.exit(1);
}

const fileName = args[3];
try {
    const fileContent = fs.readFileSync(fileName, 'utf-8');
    if(args[2] === '-c'){
    const byteCount = Buffer.byteLength(fileContent, 'utf-8')
    console.log(`${byteCount} ${fileName}`);
    }
    else if(args[2] === '-l'){
        const lineCount = fileContent.split('\n').length -1;
        console.log(`${lineCount} ${fileName}`)
    }
    else if(args[2] === '-w'){
        const words = fileContent.trim().split(/\s+/);
        const wordCount = words.length;
        console.log(`${wordCount} ${fileName}`);
    }
    else if(args[2] === '-m'){
        const charCount = fileContent.length;
        console.log(`${charCount} ${fileName}`)
    }
} catch (error) {
    console.error('error reading File', error.message)
}
