"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowerCommand = void 0;
const cli_1 = require("../cli");
class LowerCommand {
    constructor() {
        this.name = 'Lower';
        this.description = 'Check if all characters in the input are lowercase';
    }
    execute() {
        cli_1.rl.question('Enter a string: ', (input) => {
            const isLowercase = /^[a-z]+$/.test(input);
            if (isLowercase) {
                console.log('\nAll characters are lowercase.\n');
                (0, cli_1.askForCommand)();
            }
            else {
                console.log('\nNot all characters are lowercase.\n');
                (0, cli_1.askForCommand)();
            }
        });
    }
}
exports.LowerCommand = LowerCommand;
