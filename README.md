Steps and summary on how to execute:

Step 1: Extract the attached zip file ‘CypressAutomationFramework’

Step 2: Import the project to your IDE

Step 3: Prerequisites - Download and Install Node.js and then run the following commands in the package folder: 
npm init
npm install - -save-dev cypress@9.5.4

Step 4: To run the scripts, please use the command: npm run test

Description: 

I have added or modified the following packages to automate the Wikipedia “Advanced Search Functionality’

1)	fixtures
2)	integration
3)	reports
4)	support
5)	cypress. json and
6)	package. json

All the required ‘Selectors’ are in ‘webelements. json’ under cypress/fixtures. It contains all object IDs as web elements that help in performing operations. It acts as a Page Object Model.

All test or spec files are located under /cypress/integration.

Individual spec file json report and the consolidated html reports can be viewed under /ui-test-automation-playground/cypress/reports.

All the common methods are under /support/command.js

The reports configuration for ‘Mochawesome’ and the ‘base URL’ are added in ‘cypress. json’ file.

I have the pretest and posttest scripts in the ‘package. json’ to clear the previously generated reports and to create a consolidated html report.


Used Technologies, Libraries and Version:

•	Cypress Package version		- 9.5.4
•	Programming language 		- JavaScript
•	Framework			- Mochawesome (Cypress Inbuilt Framework)
•	Design Pattern 			- Page Object Model
•	IDE				- Visual Studio Code
•	Operating System		- Windows
•	Node.js				- 16.13.0
•	Web Browser			- Google Chrome


