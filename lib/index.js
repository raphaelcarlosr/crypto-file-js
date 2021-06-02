#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var clear_1 = __importDefault(require("clear"));
var figlet_1 = __importDefault(require("figlet"));
var commander_1 = require("commander");
var package_json_1 = require("../package.json");
clear_1.default();
console.log(chalk_1.default.red(figlet_1.default.textSync(package_json_1.name + "-cli", { horizontalLayout: 'full' })));
commander_1.program
    .name(package_json_1.name)
    .version(package_json_1.version, undefined, package_json_1.description)
    .description(package_json_1.description)
    .helpOption('-h, --help', 'Display help for the command')
    .option('-v, --version', 'Display the current version')
    .addOption(new commander_1.Option('-a, --action <action>', 'Encrypt or Decrypt ("e=encrypt", "d=decrypt")')
    .choices(['e', 'd']))
    .option('-i, --input', 'Input file')
    .option('-o, --output', 'Output file')
    .option('-p, --phrase', 'Secret Phrase')
    .addOption(new commander_1.Option('-c, --cipher <cipher>', "Cipher Algorithm")
    .choices(['AES', 'DES', 'Rabbit', 'RC4', 'RC4Drop']))
    // .option('-c, --cipher <cipher>', "Algorithm ['AES' | 'DES' | 'Rabbit' | 'RC4' | 'RC4Drop']")
    .usage('<file>... (-p <password>) [-c <cipher>] [-e <encoding>] [-s] [-o]')
    .parse(process.argv);
var options = commander_1.program.opts();
if (!!options.input && options.output && options.phrase) {
    console.log("\n        input: " + options.input + "; \n        output: " + options.output + "; \n        phrase: " + options.phrase + "; \n    ");
}
else {
    commander_1.program.help();
}
if (options.pineapple)
    console.log('  - pineapple');
if (options.bbq)
    console.log('  - bbq');
if (!process.argv.slice(2).length) {
    commander_1.program.outputHelp();
}
