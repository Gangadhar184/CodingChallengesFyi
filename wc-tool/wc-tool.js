const fs = require('fs');
const args = process.argv;

let option = null;
let fileName = null;

if (args.length === 4) {
  option = args[2]; 
  fileName = args[3]; // File name
} else if (args.length === 3) {
  option = args[2]; //  it's an option
}

if (option && !['-c', '-l', '-w', '-m'].includes(option)) {
  console.log('Invalid option. Use -c, -l, -w, -m');
  process.exit(1);
}

// Function to perform counting
function performCounts(inputText) {
  const lineCount = inputText.split('\n').length;
  const wordCount = inputText.trim().split(/\s+/).length;
  const byteCount = Buffer.byteLength(inputText, 'utf8');
  const charCount = inputText.length;

  if (option === '-c') {
    console.log(`${byteCount}`);
  } else if (option === '-l') {
    console.log(`${lineCount}`);
  } else if (option === '-w') {
    console.log(`${wordCount}`);
  } else if (option === '-m') {
    console.log(`${charCount}`);
  } else {
    console.log(`${lineCount}   ${wordCount}   ${byteCount}`);
  }
}

// Handle file or stdin input
if (fileName) {
  try {
    const fileContent = fs.readFileSync(fileName, 'utf8');
    performCounts(fileContent);
  } catch (error) {
    console.error('Error reading file:', error.message);
  }
} else {
  // Read from stdin
  let inputText = '';
  process.stdin.on('data', (chunk) => {
    inputText += chunk;
  });

  process.stdin.on('end', () => {
    if (inputText.trim()) {
      performCounts(inputText);
    } else {
      console.log('No file provided and no input found. Provide a file name or pipe text.');
    }
  });
  process.stdin.resume();
}
