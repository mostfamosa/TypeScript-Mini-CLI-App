"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitCommand = void 0;
const cli_1 = require("../cli");
class ExitCommand {
    constructor() {
        this.name = 'Exit';
        this.description = 'Exit the application';
    }
    execute() {
        console.log('\nExiting the application...');
        cli_1.rl.close();
    }
}
exports.ExitCommand = ExitCommand;
