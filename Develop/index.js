// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?', 'Description', 'Installation', 'Usage', 'Contributing', 'Testing Information', 'Please choose a license.', 'Enter your GitHub username.', 'Enter your email address.'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('File Successfully Created!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
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
                choices: ['MIT', 'ISC', 'IBM', 'GNU GPL V3', 'No License']
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
        .then((data) => {
            const projectTitle = data.title;
            const projectDescription = data.description;
            const installationGuide = data.installation;
            const usageGuide = data.usage;
            const contributingGuide = data.contributing;
            const testingGuide = data.testing;
            const licenseMarkdown = generateMarkdown(data.license)
            const projectUsername = data.username;
            const userEmail = data.email;
            const theData = `# ${projectTitle}\n\n## Description\n\n${projectDescription}\n\n## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [License](#license)\n- [Questions](#questions)\n## Installation\n\n${installationGuide}\n\n## Usage\n\nUsage Information:${usageGuide}\n\n## Contributing\n\n${contributingGuide}\n\n## Tests\n\n${testingGuide}\n\n## License\n\n${licenseMarkdown}\n\n## Questions\n\nGitHub: [${projectUsername}](https://github.com/${projectUsername})\n\nContact me at ${userEmail}`
            writeToFile('youCanChangeThis.md', theData)
        })
}

// Function call to initialize app
init();
