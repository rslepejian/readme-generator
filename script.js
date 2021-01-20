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

        if (project.license == 'MIT'){
            var licenseIMG = 'https://img.shields.io/badge/License-MIT-yellow.svg';
            var licenseURL= 'https://opensource.org/licenses/MIT';
        }
        else if (project.license == 'GNU GPLv3'){
            var licenseIMG = 'https://www.gnu.org/graphics/gplv3-127x51.png';
            var licenseURL= 'https://opensource.org/licenses/GPL-3.0';
        }
        else if (project.license == 'GNU AGPLv3'){
            var licenseIMG = 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Shopware-Licence-AGPL3.png';
            var licenseURL= 'https://opensource.org/licenses/AGPL-3.0';
        }
        else if (project.license == 'GNU LGPLv3'){
            var licenseIMG = 'https://lh3.googleusercontent.com/proxy/J2zfsRkJFMeKR0inzyNbvVeOjzKwuY1zjR290gnp9036jeR5tggPakyQYLo-oOySrBq3nloS1ygi44jn5-MQmWX4Iz4ucrLNHnyq';
            var licenseURL= 'https://opensource.org/licenses/LGPL-3.0';
        }
        else if (project.license == 'Mozilla Public License 2.0'){
            var licenseIMG = 'https://lh3.googleusercontent.com/proxy/mU6BzURBPA8fNX_H8gM3rr7hfWEOE4ZWg4kanGRo36FurfkNlJT0akqofKb5GKoVdMHceFtIs0waxXtn6MRSDeMwdhL-FbEXcuiOHGD_cPq9DJiArU5I-Y48kFUzvwP3gjIg3V2oAhA0fv4vOEw';
            var licenseURL= 'https://opensource.org/licenses/MPL-2.0';
        }
        else if (project.license == 'Apache License 2.0'){
            var licenseIMG = 'https://www.apache.org/foundation/press/kit/Badge_2_APACHE_20th_Anniversary.png';
            var licenseURL= 'https://opensource.org/licenses/Apache-2.0';
        }
        else if (project.license == 'Boost Software License 1.0'){
            var licenseIMG = 'https://www.google-melange.com/archive/gsoc/2015/orgs/boostcpp/logo-200.png';
            var licenseURL= 'https://opensource.org/licenses/BSL-1.0';
        }
        else {
            // the unlicense
            project.license = 'The Unlicense';
            var licenseIMG = 'https://unlicense.org/pd-icon.png';
            var licenseURL= 'https://opensource.org/licenses/unlicense';
        }


        const readme = 
        `# ${project.title}

[![License: ${project.license}](${licenseIMG})](${licenseURL})

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
This project is licensed under the ${project.license} license.
        
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
