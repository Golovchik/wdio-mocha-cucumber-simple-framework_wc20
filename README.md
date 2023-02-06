# wdio-mocha-cucumber-simple-framework_WC20

# Steps and commands was completed

## [TA] add TAF structure (empty folder)

1. npm init
2. created file ".gitignore"
3. created folder "configs" - for files(Configs, Utilities, Runner, Logger, Reporter, Extensions, Wrappers, and etc)
4. created folder "po" - for Page objects
5. created folder "steps" and "support" - for Step definitions
6. created folder "tests" - it is Tests Layer (Tests, Feature files, Test data)
7. created folder "features" - for Feature files

## [TA] add linter to TAF (eslint or pritier, cucmber - gerkin lint)

### eslint

1. npm install eslint
2. npx eslint --init
3. How would you like to use ESLint? - To check syntax, find problems, and enforce code style
4. What type of modules does your project use? - CommonJS (require/exports)
5. Which framework does your project use? - None of these
6. Does your project use TypeScript? - No
7. Where does your code run? - Browser and Node
8. How would you like to define a style for your project? - Use a popular style guide
9. Which style guide do you want to follow? - Google: https://github.com/google/eslint-config-google
10. What format do you want your config file to be in? - JSON
11. as result, automatically was created file ./.eslintrc.json
12. the line "type": "commonjs" , was added in file ./package.json
13. the line "lint": "eslint ./ --fix" , was added in file ./package.json , in object "scripts".
14. we can use "npm run lint", for fix our problem with formatting code.
15. created file ".eslintignore"

### gherkin-lint

1. npm install gherkin-lint
2. created file ".gherkin-lintrc.json" and filled out his rules.
3. the line "gherkin-lint": "gherkin-lint -c .gherkin-lintrc ./tests/features/" , was added in file ./package.json , in object "scripts".
4. we can use "npm run gherkin-lint", for to see our problem with formatting code with gherkin syntax.

## [TA] add WDIO to TAF

1. npm init wdio
2. Where should your tests be launched? -local > for e2e testing of web and mobile applications
3. Where is your automation backend located? > On my local machine
4. Which framework do you want to use? > Mocha (https://mochajs.org/)
5. Do you want to use a compiler? > No!
6. Do you want WebdriverIO to autogenerate some test files? > n
7. Which reporter do you want to use? > spec
8. Do you want to add a plugin to your test setup? > wait-for
9. Do you want to add a service to your test setup? ❯ chromedriver
10. What is the base url? > https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard
11. Do you want me to run `npm install`? > Y

## [TA] add allure config

1. npm install @wdio/allure-reporter --save-dev
2. npm i allure-commandline
3. "allureReport": "allure generate --clean ./allure-results -o ./allure-report && allure open ./allure-report"

## [TA] add winston

1. npm i winston --save-dev.

## [TA] add dotenv module to TAF

1. npm install dotenv --save
2. Created file ".env"
3. Created file ".env.example"
4. Used dotenv in file wdio.conf.js
5. Added ".env" in file wdio.conf.js

## [TA] add husky module to TAF

1. npm set-script prepare "husky install"
2. npm run prepare
3. npx husky add .husky/pre-commit “npm run lint”
4. added a line in file .husky/ pre-commit: npm run gherkin-lint

## [TA] add cucumber-framework module to TAF

1. npm install @wdio/cucumber-framework --save-dev
2. created file wdio.cucumber.conf.js
3. moved files wdio.\*\conf.js to configs

## [TA] add multibrowser supporting

1. npm install yargs --save-dev
2. npm install geckodriver --save-dev
3. npm install wdio-geckodriver-service --save-dev
4. npm install edgedriver --save-dev
5. npm install wdio-edgedriver-service --save-dev
