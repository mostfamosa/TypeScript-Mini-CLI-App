// The available commands are:
// (1) Palindrome - Check if the input is a palindrome
// (2) Lower - Check if all characters in the input are lowercase
// (3) Digits - Check if all characters in the input are digits
// (4) Armstrong - Check if the input is an "Armstrong Number"
// (5) Nationalize - Check the nationality probability of a given first name
// (6) Exit - Exit successfully from the application


import * as readline from 'readline';
import { Command } from './Interface/command';
import { PalindromeCommand } from './Commands/palindrome-command';
import { LowerCommand } from './Commands/lower-command';
import { DigitsCommand } from './Commands/digits-command';
import { ArmstrongCommand } from './Commands/armstrong-commad';
import { ExitCommand } from './Commands/exit-command';
import { NationalizeCommand } from './Commands/nationalize-command';

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const commands: Command[] = [new PalindromeCommand(), new LowerCommand(), new DigitsCommand(), new ArmstrongCommand(), new NationalizeCommand(), new ExitCommand()];

function displayMenu() {
    console.log('Available Commands:');
    commands.forEach((command, index) => {
        console.log(`(${index + 1}) ${command.name} - ${command.description}`);
    });
}

export function askForCommand() {
    displayMenu();
    rl.question('Choose a command (1/2/3/4/5/6): ', (choice) => {
        const index = parseInt(choice) - 1;
        if (0 <= index && index <= commands.length - 1) {
            commands[index].execute();
        } else {
            console.log('Invalid choice. Please select a valid command.');
            askForCommand();
        }
    });
}

console.log('Welcome to the CLI application!');
askForCommand();
