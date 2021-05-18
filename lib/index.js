#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var clear_1 = __importDefault(require("clear"));
var figlet_1 = __importDefault(require("figlet"));
var commander_1 = __importDefault(require("commander"));
clear_1.default();
console.log(chalk_1.default.red(figlet_1.default.textSync('crypto-file-js-cli', { horizontalLayout: 'full' })));
commander_1.default
    .version('0.0.1')
    .description("Chose the options below")
    .option('-I, --input', 'Input file')
    .option('-O, --output', 'Output file')
    .option('-P, --phrase', 'Secret Phrase')
    .option('-A, --algorithm <type>', "Algorithm ['AES' | 'DES' | 'Rabbit' | 'RC4' | 'RC4Drop']")
    .parse(process.argv);
var options = commander_1.default.opts();
if (options.version) {
    console.log('version');
}
if (!!options.input && options.output && options.phrase) {
    console.log("\n        input: " + options.input + "; \n        output: " + options.output + "; \n        phrase: " + options.phrase + "; \n    ");
}
else {
    commander_1.default.help();
}
if (options.pineapple)
    console.log('  - pineapple');
if (options.bbq)
    console.log('  - bbq');
if (!process.argv.slice(2).length) {
    commander_1.default.outputHelp();
}
