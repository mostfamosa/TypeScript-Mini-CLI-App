import { Command } from '../Interface/command';
import { askForCommand, rl } from '../cli';

export class ArmstrongCommand implements Command {
    name = 'Armstrong';
    description = 'Check if the input is an "Armstrong Number"';

    execute(): void {
        rl.question('Enter a number: ', (input) => {
            const num = parseInt(input);
            const numStr = num.toString();
            const numDigits = numStr.length;
            let sum = 0;

            for (let i = 0; i < numDigits; i++) {
                sum += Math.pow(parseInt(numStr[i]), numDigits);
            }

            if (sum === num) {
                console.log(`\n${num} is an Armstrong Number.\n`);
                askForCommand();
            } else {
                console.log(`\n${num} is not an Armstrong Number.\n`);
                askForCommand();
            }
        });
    }
}
1