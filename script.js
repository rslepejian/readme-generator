const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

async function generateReadme() {
    try {
        // const {variable names to assign based on object properties} = (object we are assigning from);
        // we can then do: name instead of user.name if we instead had:
        // const user = await inquirer.prompt( [{
        const project = await inquirer.prompt([{
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'checkbox',
            message: 'What license are you publishing your site under?',
            choices: ['MIT', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'What would you like the description of your project to be?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What are the installation instructions for your project?',
            name: 'install'
        },
        {
            type: 'input',
            message: 'What usage information would you like to give for your project?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'What contribution guidelines would you like to give for your project?',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'What test instructions would you like to give for your project?',
            name: 'test'
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'github'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        }
        ]);


        const readme = 
        `# ${project.title}

## Description
        
${project.description}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
        
## Installation
        
${project.installation}

## Usage

${project.usage}
        
## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
        
## Contributing
        
${project.contribution}

## Tests

${project.test}
        
## Questions

You can reach me via my email or by messaging me through github. Both listed below:

- Github: ${project.github}
- Email: ${project.email}
`;

        await writeFileAsync('generated.md', readme);
        console.log("Your readme has been generated.");
    } catch (err) {
        console.log("Error: ");
        console.log(err);
    }

}

generateReadme();
