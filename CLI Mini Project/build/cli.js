"use strict";
// The available commands are:
// (1) Palindrome - Check if the input is a palindrome
// (2) Lower - Check if all characters in the input are lowercase
// (3) Digits - Check if all characters in the input are digits
// (4) Armstrong - Check if the input is an "Armstrong Number"
// (5) Nationalize - Check the nationality probability of a given first name
// (6) Exit - Exit successfully from the application
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.askForCommand = exports.rl = void 0;
const readline = __importStar(require("readline"));
const palindrome_command_1 = require("./Commands/palindrome-command");
const lower_command_1 = require("./Commands/lower-command");
const digits_command_1 = require("./Commands/digits-command");
const armstrong_commad_1 = require("./Commands/armstrong-commad");
const exit_command_1 = require("./Commands/exit-command");
const nationalize_command_1 = require("./Commands/nationalize-command");
exports.rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const commands = [new palindrome_command_1.PalindromeCommand(), new lower_command_1.LowerCommand(), new digits_command_1.DigitsCommand(), new armstrong_commad_1.ArmstrongCommand(), new nationalize_command_1.NationalizeCommand(), new exit_command_1.ExitCommand()];
function displayMenu() {
    console.log('Available Commands:');
    commands.forEach((command, index) => {
        console.log(`(${index + 1}) ${command.name} - ${command.description}`);
    });
}
function askForCommand() {
    displayMenu();
    exports.rl.question('Choose a command (1/2/3/4/5/6): ', (choice) => {
        const index = parseInt(choice) - 1;
        if (0 <= index && index <= commands.length - 1) {
            commands[index].execute();
        }
        else {
            console.log('Invalid choice. Please select a valid command.');
            askForCommand();
        }
    });
}
exports.askForCommand = askForCommand;
console.log('Welcome to the CLI application!');
askForCommand();
