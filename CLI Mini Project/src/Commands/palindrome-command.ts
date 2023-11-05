import { Command } from '../Interface/command';
import { askForCommand, rl } from '../cli';

export class PalindromeCommand implements Command {
  name = 'Palindrome';
  description = 'Check if the input is a palindrome';

  execute(): void {
    rl.question('Enter a word or phrase: ', (input) => {
      const reversedInput = input.split('').reverse().join('');
      const isPalindrome = (input === reversedInput);

      if (isPalindrome) {
        console.log(`\n${input} is a palindrome.\n`);
        askForCommand();
      } else {
        console.log(`\n${input} is not a palindrome.\n`);
        askForCommand();
      }

    });

  }
}
