//This is the fourth step

const fs = require('fs');
const args = process.argv;
if(args.length < 3 || args.length > 4){
    console.log('wrong arguments');
    process.exit(1);
}
const option = args.length === 4 ? args[2] : null;
const fileName = args[args.length - 1];
try{
    const fileContent = fs.readFileSync(fileName, 'utf-8');
    if(option === '-c'){
        const byteCount = Buffer.byteLength(fileContent, 'utf-8');
        console.log(`${byteCount} ${fileName}`)
    }
    else if(option === '-l'){
        const lineCount = fileContent.split('\n').length;
        console.log(`${lineCount} ${fileName}`);
    }
    else if(option === '-w'){
        const words = fileContent.trim().split(/\s+/);
        const wordCount = words.length;
        console.log(`${wordCount} ${fileName}`);
    }
    else if(option === '-m'){
        const charCount = fileContent.length;
        console.log(`${charCount} ${fileName}`);
    }else if(!option){
        const byteCount = Buffer.byteLength(fileContent, 'utf-8');
        const lineCount = fileContent.split('\n').length;
        const words = fileContent.trim().split(/\s+/);
        const wordCount = words.length;
        const charCount = fileContent.length;
        console.log(`${byteCount} ${lineCount} ${wordCount} ${charCount} ${fileName}`)
    }
    else{
        console.log("Invalid options usage of -c -l -w -m")
    }
}catch(error){
    console.error('error reading file', error.message);
}
