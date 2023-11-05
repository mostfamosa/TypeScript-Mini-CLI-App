"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitsCommand = void 0;
const cli_1 = require("../cli");
class DigitsCommand {
    constructor() {
        this.name = 'Digits';
        this.description = 'Check if all characters in the input are digits';
    }
    execute() {
        cli_1.rl.question('Enter a string: ', (input) => {
            const isDigits = /^\d+$/.test(input);
            if (isDigits) {
                console.log('\nAll characters are digits.\n');
                (0, cli_1.askForCommand)();
            }
            else {
                console.log('\nNot all characters are digits.\n');
                (0, cli_1.askForCommand)();
            }
        });
    }
}
exports.DigitsCommand = DigitsCommand;
