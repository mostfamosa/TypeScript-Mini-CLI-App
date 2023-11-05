import { Command } from '../Interface/command';
import { rl } from '../cli';

export class ExitCommand implements Command {
    name = 'Exit';
    description = 'Exit the application';

    execute(): void {
        console.log('\nExiting the application...');
        rl.close();
    }
}
