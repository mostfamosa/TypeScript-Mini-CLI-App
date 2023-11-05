import { Command } from '../Interface/command';
import { askForCommand, rl } from '../cli';

export class DigitsCommand implements Command {
    name = 'Digits';
    description = 'Check if all characters in the input are digits';

    execute(): void {
        rl.question('Enter a string: ', (input) => {
            const isDigits = /^\d+$/.test(input);
            if (isDigits) {
                console.log('\nAll characters are digits.\n');
                askForCommand();
            } else {
                console.log('\nNot all characters are digits.\n');
                askForCommand();
            }
        });
    }
}
