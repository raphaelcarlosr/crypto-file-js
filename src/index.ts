#!/usr/bin/env node
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import path from 'path';
import {program, Option} from 'commander';
import cryptoJS from 'crypto-js';
import {version, name, description} from '../package.json';

type Algorithms = 'AES' | 'DES' | 'Rabbit' | 'RC4' | 'RC4Drop';

clear();
console.log(
    chalk.red(
        figlet.textSync(`${name}-cli`, { horizontalLayout: 'full' })
    )
);


program
    .name(name)
    .version(version, undefined, description)
    .description(description)
    .helpOption('-h, --help', 'Display help for the command')
    .option('-v, --version', 'Display the current version')
    .addOption(
        new  Option('-a, --action <action>', 'Encrypt or Decrypt ("e=encrypt", "d=decrypt")')
            .choices(['e', 'd'])
    )
    .option('-i, --input', 'Input file')
    .option('-o, --output', 'Output file')
    .option('-p, --phrase', 'Secret Phrase')
    .addOption(
        new  Option('-c, --cipher <cipher>', "Cipher Algorithm")
            .choices(['AES', 'DES', 'Rabbit', 'RC4', 'RC4Drop'])
            .default('AES')
    )
    // .option('-c, --cipher <cipher>', "Algorithm ['AES' | 'DES' | 'Rabbit' | 'RC4' | 'RC4Drop']")
    .usage('<file>... (-p <password>) [-c <cipher>] [-e <encoding>] [-s] [-o]')
    .parse(process.argv);

    
const options = program.opts();


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