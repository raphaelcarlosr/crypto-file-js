#!/usr/bin/env node
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import path from 'path';
import program from 'commander';
import cryptoJS from 'crypto-js';

type Algorithms = 'AES' | 'DES' | 'Rabbit' | 'RC4' | 'RC4Drop';

clear();
console.log(
    chalk.red(
        figlet.textSync('crypto-file-js-cli', { horizontalLayout: 'full' })
    )
);


program
    .version('0.0.1')
    .description("Chose the options below")
    .option('-E, --encrypt', 'Encrypt action')
    .option('-D, --decrypt', 'Decrypt action')
    .option('-I, --input', 'Input file')
    .option('-O, --output', 'Output file')
    .option('-P, --phrase', 'Secret Phrase')
    .option('-A, --algorithm <type>', "Algorithm ['AES' | 'DES' | 'Rabbit' | 'RC4' | 'RC4Drop']")
    .parse(process.argv);

const options = program.opts();

if (options.version) {
    console.log('version');
}

if(!!options.input && options.output && options.phrase){
    console.log(`
        input: ${options.input}; 
        output: ${options.output}; 
        phrase: ${options.phrase}; 
    `);
}else {
    program.help()
}

if (options.pineapple) console.log('  - pineapple');
if (options.bbq) console.log('  - bbq');

if (!process.argv.slice(2).length) {
    program.outputHelp();
}