import { Command } from '../Interface/command';
import { askForCommand, rl } from '../cli';
import axios from 'axios';

export class NationalizeCommand implements Command {
    name = 'Nationalize';
    description = 'Check the nationality probability of a given first name';

    execute(): void {
        rl.question('Enter a first name: ', (name) => {
            this.getNationality(name);
        });
    }

    private getNationality(name: string) {
        const apiUrl = `https://api.nationalize.io/?name=${name}`;

        axios
            .get(apiUrl)
            .then((response) => {
                const nationalityData = response.data;
                if (nationalityData.country.length > 0) {
                    const mostProbable = nationalityData.country[0];
                    const countryISOCode = mostProbable.country_id;

                    // console.log(mostProbable)
                    // console.log(countryISOCode)

                    const countryCodes = require('./country-code.json');

                    if (countryCodes[countryISOCode]) {
                        const countryName = countryCodes[countryISOCode];
                        const probability = mostProbable.probability * 100;
                        console.log(`\n${countryName} ${probability.toFixed(1)}%\n`);
                        askForCommand();
                    } else {
                        console.log('\nCountry name not found for the given ISO code.\n');
                        askForCommand();
                    }
                } else {
                    console.log('\nNo nationality data found for the given name.\n');
                    askForCommand();
                }
            })
            .catch((error) => {
                console.error('\nError fetching nationality data:\n', error);
                rl.close();
            });
    }
}