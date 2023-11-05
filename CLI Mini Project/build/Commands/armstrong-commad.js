"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmstrongCommand = void 0;
const cli_1 = require("../cli");
class ArmstrongCommand {
    constructor() {
        this.name = 'Armstrong';
        this.description = 'Check if the input is an "Armstrong Number"';
    }
    execute() {
        cli_1.rl.question('Enter a number: ', (input) => {
            const num = parseInt(input);
            const numStr = num.toString();
            const numDigits = numStr.length;
            let sum = 0;
            for (let i = 0; i < numDigits; i++) {
                sum += Math.pow(parseInt(numStr[i]), numDigits);
            }
            if (sum === num) {
                console.log(`\n${num} is an Armstrong Number.\n`);
                (0, cli_1.askForCommand)();
            }
            else {
                console.log(`\n${num} is not an Armstrong Number.\n`);
                (0, cli_1.askForCommand)();
            }
        });
    }
}
exports.ArmstrongCommand = ArmstrongCommand;
1;
