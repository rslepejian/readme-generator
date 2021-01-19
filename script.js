const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

async function getInfo() {
    try {
        // const {variable names to assign based on object properties} = (object we are assigning from);
        // we can then do: name instead of user.name if we instead had:
        // const user = await inquirer.prompt( [{
        const {name, bio, linkedin, location, github} = await inquirer.prompt( [{
            type: 'input',
            message: 'What is your name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is your bio?',
            name: 'bio'
        },
        {
            type: 'input',
            message: 'What is your linkedin?',
            name: 'linkedin'
        },
        {
            type: 'input',
            message: 'What is your github?',
            name: 'github'
        },
        {
            type: 'input',
            message: 'What is your location?',
            name: 'location'
        }
    
        ]);


        const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>${name}</h1>
            <p>${location}</p>
            <a href = "${linkedin}">Linkedin</a>
            <a href = "${github}">Github</a>
            <p>${bio}</p>
        </body>
        </html>`;

        await writeFileAsync('index.html', html);
        console.log("Success!");
    } catch (err){
        console.log("Error: ");
        console.log(err);
    }

}

getInfo();

