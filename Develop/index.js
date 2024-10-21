// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?', 'Description', 'Installation', 'Usage', 'Contributing', 'Testing Information', 'Please choose a license.', 'Enter your GitHub username.', 'Enter your email address.'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('File Successfully Created!')
)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt ([
        {
            type: 'input',
            message: `${questions[0]}`,
            name: 'title'
        },
        {
            type: 'input',
            message: `${questions[1]}`,
            name: 'description'
        },       
        {
            type: 'input',
            message: `${questions[2]}`,
            name: 'installation'
        },       
        {
            type: 'input',
            message: `${questions[3]}`,
            name: 'usage'
        },       
        {
            type: 'input',
            message: `${questions[4]}`,
            name: 'contributing'
        },        
        {
            type: 'input',
            message: `${questions[5]}`,
            name: 'testing'
        },        
        {
            type: 'list',
            message: `${questions[6]}`,
            name: 'license',
            choices: ['MIT', 'ISC', 'IBM', 'GNU GPL V3', 'Apache 2.0'] 
        },        
        {
            type: 'input',
            message: `${questions[7]}`,
            name: 'username'
        },        
        {
            type: 'input',
            message: `${questions[8]}`,
            name: 'email'
        },
        ])
        .then((response) => {
            const projectTitle = response.title;
            const projectDescription = response.description;
            const installationGuide = response.installation;
            const usageGuide = response.usage;
            const contributingGuide = response.contributing;
            const testingGuide = response.testing;
            //licenses figure this one out
            const projectUsername = response.username;
            const userEmail = response.email;
            const theData =`# ${projectTitle}\n\n## Description\n\n${projectDescription}\n\n

## Table of Contents\n\n

- [Installation](#installation)\n
- [Usage](#usage)\n
- [Contributing](#contributing)\n
- [Tests](#tests)\n
- [License](#license)\n
- [Questions](#questions)\n

## Installation\n\n

${installationGuide}\n\n

## Usage\n\n

Usage Information:
${usageGuide}\n\n

## Contributing\n\n

Contributing\n\n

## Tests\n\n

Testing Information\n\n

## License\n\n

License here\n\n

## Questions\n\n

GitHub: [${projectUsername}](https://github.com/${projectUsername})\n
Contact me at (email)
`
            writeToFile('SAMPLE.md', theData)
    })
   

}

// Function call to initialize app
init();
