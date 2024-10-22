// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function generateMarkdown(license) {
  let licenseBadge;
  if (license === 'MIT') {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'ISC') {
    licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else if (license === 'IBM') {
    licenseBadge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  } else if (license === 'GNU GPL V3') {
    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    licenseBadge = ``
  }
  return licenseBadge;
}

let testLicense = 'MIT'
console.log(generateMarkdown(testLicense));
export default generateMarkdown;
