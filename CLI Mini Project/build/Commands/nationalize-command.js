"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NationalizeCommand = void 0;
const cli_1 = require("../cli");
const axios_1 = __importDefault(require("axios"));
class NationalizeCommand {
    constructor() {
        this.name = 'Nationalize';
        this.description = 'Check the nationality probability of a given first name';
    }
    execute() {
        cli_1.rl.question('Enter a first name: ', (name) => {
            this.getNationality(name);
        });
    }
    getNationality(name) {
        const apiUrl = `https://api.nationalize.io/?name=${name}`;
        axios_1.default
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
                    (0, cli_1.askForCommand)();
                }
                else {
                    console.log('\nCountry name not found for the given ISO code.\n');
                    (0, cli_1.askForCommand)();
                }
            }
            else {
                console.log('\nNo nationality data found for the given name.\n');
                (0, cli_1.askForCommand)();
            }
        })
            .catch((error) => {
            console.error('\nError fetching nationality data:\n', error);
            cli_1.rl.close();
        });
    }
}
exports.NationalizeCommand = NationalizeCommand;
