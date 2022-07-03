# Project Plato Tech Assignment Project

###Tech Stack
 - Cypress TA framework, JS
 - Cucumber and Cucumber reporter for BDD Gherkin layer

###Project Structure
 - BDD Gherkin TC descriptions - ./cypress//integration/MainFlows.feature
 - Step definitions - ./cypress/integration/MainFlows/MainFlow.js
 - Page Object models - ./cypress/support/PageObjects/DocumentationPage.js
 - Test data - ./cypress/support/TestData.js
 - Scripts for test execution and reporting - ./package.json

###Install
 - Open the project_plato_tech_assignment_project library
 - Run 'npm install' for download and setup the necessary dependencies

###Test Execution
Run the following scripts form package.json or from terminal using the following format:
npm run {related script}

 - Scripts for test execution:
   - execution with opened browser / detailed test steps 
     - execute-on-chrome-detailed-report 
     - execute-on-firefox-detsiled-report 
     - execute-on-edge-detiled-report 
     
   - execution with opened browser
     - execute-on-chrome
     - execute-on-firefox
     - execute-on-edge
     
   - execution with headless browser
     - execute-on-chrome-headless
     - execute-on-firefox-headless
     - execute-on-edge-headless
     
   - generating html report 
     - generate-html-report
     
   - test execution and report generation 2 in 1
     - execute-on-chrome-report-cucumber
     - execute-on-firefox-report-cucumber
     - execute-on-edge-report-cucumber

   - Scripts for test execution:
     - execute one test execution script, after that the reporting script. If you use execution scripts from the first group, before the report creation you have to close the browser instance which was opened during the test execution.
       - for exampre:
         - npm run execute-on-edge
         - npm run generate-html-report
     - or, use the scripts from the last group which will execute the tests and create the reports as well
       - for exampre:
           - execute-on-chrome-report-cucumber

After the report creation you will find the BDD Cucumber HTML report in the ./cypress/reports/cucumber-html directory

###Limitations
I recommend to use Chrome or Edge for testing, new tab handling does not work correctly in case of Firefox in the current Cypress version.

###Bugs ang Questions
Bugs and questions are in the ./BugsAndQuestions.md file