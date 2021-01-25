const figlet = require('figlet');
const fs = require('fs');
const config = require('./global-config.json');
const local = process.argv.indexOf('clear') === -1;
// extract and define application config for the file content
const content = local 
? Object.entries(config).map(([variable, value]) => `var ${variable} = ${typeof value === 'string' ? `"${value}"` : `${value}`};`).join('\n')
: `// Replace with environment specific config\n\n${Object.entries(config).map(([variable]) => `var ${variable} = '';`).join('\n')}`;

const writeToConfigFile = content => {
  const filePath = './public/config.js';
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, error => {
      if (error) {
        reject(error);
      }
      resolve(content);
    });
  });
}

const displayInformation = () => {
    figlet('iress', (error, name) => {
        if (error) {
          console.error(`error occurred when tried to display info`, error);
          return;
        }
        console.log(name)
        if (local) {
            console.log(`\n\nGLOBAL CONFIGURATION`);
            console.table(config);
        } else {
            console.log(`\n Environment specific config will be added to the build by the deployment process.`);
            console.table(Object.keys(config));
        }
  });
}

  writeToConfigFile(content).then(() => {
    displayInformation();
  }).catch(error => {
    console.error(`error occurred when tried to write to config file`, error);
  });