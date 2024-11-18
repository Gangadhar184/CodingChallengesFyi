# ccwc - A Command Line Tool

`ccwc` is a simple command-line tool for counting lines, words, characters, and bytes in a text file. It is an implementation of the popular `wc` (word count) utility. You can also use it to process input from standard input (stdin) if no file is provided.

## Features

- **Line Count**: Count the number of lines in a file.
- **Word Count**: Count the number of words in a file.
- **Character Count**: Count the number of characters in a file.
- **Byte Count**: Count the number of bytes in a file.
- **Standard Input Support**: Read data from stdin if no file is provided.
- **Default Behavior**: Outputs line count, word count, and byte count if no options are specified.

## Installation

To use `ccwc`, you need to have [Node.js](https://nodejs.org/) installed on your machine.

### Steps to Set Up:

1. Clone the repository or download the JavaScript files.
2. Open a terminal and navigate to the folder where the files are stored.
3. Run the tool using Node.js.

### Example:

```bash
node ccwc.js -l test.txt   # Count lines in test.txt
node ccwc.js -w test.txt   # Count words in test.txt
node ccwc.js -c test.txt   # Count characters in test.txt
node ccwc.js -b test.txt   # Count bytes in test.txt
Usage
1. Counting Lines, Words, Characters, or Bytes in a File
Use the following flags to specify the type of count you want:

-l: Count lines.
-w: Count words.
-c: Count characters.
-b: Count bytes.
Examples:
bash
Copy code
node ccwc.js -l test.txt   # Counts the number of lines in test.txt
node ccwc.js -w test.txt   # Counts the number of words in test.txt
node ccwc.js -c test.txt   # Counts the number of characters in test.txt
node ccwc.js -b test.txt   # Counts the number of bytes in test.txt


2. Default Behavior
If no options are provided (i.e., no -l, -w, -c, or -b flags), the tool will output the line count, word count, and byte count by default.

Example:
bash
Copy code
node ccwc.js test.txt
# Output:
# 7145   58164  342190 test.txt
# (where 7145 is the number of lines, 58164 is the number of words, and 342190 is the number of bytes)


3. Reading from Standard Input
You can also use the tool to read from standard input (stdin) if no filename is provided. This is especially useful for piping data into the tool.

Example:
cat test.txt | node wc-tool.js -l ( In windows use "type" instead of cat) 
# Output:
# 7145   (the number of lines in the input)
4. Help Option
To view the available commands and options, run the script with the --help option:


node ccwc.js --help
Implementation Details
ccwc.js: This script implements the basic functionality of counting lines, words, characters, and bytes in a file.
wc.js: Implements the default behavior of counting lines, words, and bytes when no options are provided.
wc-tool.js: Handles reading from stdin if no filename is specified and provides full command-line option support.
Example Output
For a file test.txt with the following attributes:

Lines: 7145
Words: 58164
Characters: 342190
Running:

node ccwc.js test.txt
Will output:


7145   58164  342190 test.txt
You can also specify individual counts:


node ccwc.js -l test.txt   # Output: 7145
node ccwc.js -w test.txt   # Output: 58164
node ccwc.js -c test.txt   # Output: 342190



Contribution
Feel free to fork this project, open issues, or submit pull requests.



### Key Points:

- This `README.md` provides an overview of the functionality of the `ccwc` tool.
- Installation and usage instructions are clear and easy to follow.
- The example outputs show how to run the tool and interpret results.
