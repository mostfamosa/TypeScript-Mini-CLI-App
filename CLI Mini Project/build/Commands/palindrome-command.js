"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PalindromeCommand = void 0;
const cli_1 = require("../cli");
class PalindromeCommand {
    constructor() {
        this.name = 'Palindrome';
        this.description = 'Check if the input is a palindrome';
    }
    execute() {
        cli_1.rl.question('Enter a word or phrase: ', (input) => {
            const reversedInput = input.split('').reverse().join('');
            const isPalindrome = (input === reversedInput);
            if (isPalindrome) {
                console.log(`\n${input} is a palindrome.\n`);
                (0, cli_1.askForCommand)();
            }
            else {
                console.log(`\n${input} is not a palindrome.\n`);
                (0, cli_1.askForCommand)();
            }
        });
    }
}
exports.PalindromeCommand = PalindromeCommand;
