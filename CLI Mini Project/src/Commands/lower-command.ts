import { Command } from '../Interface/command';
import { askForCommand, rl } from '../cli';

export class LowerCommand implements Command {
    name = 'Lower';
    description = 'Check if all characters in the input are lowercase';

    execute(): void {
        rl.question('Enter a string: ', (input) => {
            const isLowercase = /^[a-z]+$/.test(input);
            if (isLowercase) {
                console.log('\nAll characters are lowercase.\n');
                askForCommand();
            } else {
                console.log('\nNot all characters are lowercase.\n');
                askForCommand();
            }
        });
    }
}
