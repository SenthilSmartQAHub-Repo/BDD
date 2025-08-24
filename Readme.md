
npm init -y






Open the HTML report =>  start reports/cucumber-report.html  /   open reports/cucumber-report.html (Mac/Linux)


Reporter:
=========
npm install --save-dev allure-cucumberjs allure-js-commons @cucumber/cucumber @cucumber/messages allure-commandline


 Update cucumber.json
=====================


{
  "default": {
    "require": [
      "src/steps/*.ts",
      "src/*/*.ts"
    ],
    "paths": [
      "src/features/*.feature"
    ],
    "requireModule": ["ts-node/register"],
    "format": [
      "html:reports/cucumber-report.html",
      "json:reports/cucumber-report.json",
      "allure-cucumberjs/reporter"
    ],
    "publish": true,
    "parallel": 2,
    "tags": "@smoke"
  }
}

Run Tests Locally
==================
npx cucumber-js

Generate & View Allure Report
=============================
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report

Github open report:
===================
npx allure open allure-report