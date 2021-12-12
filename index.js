
const { engineerQuestionArr,
  managerQuestionsArr, internQuestionsArr } = require("./src/questions")
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const FINAL_OUTPUT_DIR = path.resolve(__dirname, "dist");
const finalOutputPath = path.join(FINAL_OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js")
teamArr = [];

function init() {
  function createTeam() {
    inquirer.prompt([{
      type: "list",
      message: "What type of employee would you like to add to your team?",
      choices: ["Manager", "Engineer", "Intern", "Thats it."],
      name: "addEmployeePrompt",
    }]).then(function (userInput) {
      switch (userInput.addEmployeePrompt) {
        case "Manager":
          insertManager();
          break;
        case "Engineer":
          insertEngineer();
          break;
        case "Intern":
          insertIntern();
          break;

        default:
          buildFinalHtmlFile();
      }
    })
  }


  function insertManager() {
    inquirer.prompt(managerQuestionsArr).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamArr.push(manager);
      createTeam();
    });

  }


  function insertEngineer() {
    inquirer.prompt(engineerQuestionArr).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArr.push(engineer);
      createTeam();
    });

  }

  function insertIntern() {
    inquirer.prompt(internQuestionsArr).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArr.push(intern);
      createTeam();
    });
  }


  function buildFinalHtmlFile() {
    console.log("Successfully created your team hurray!")

    fs.writeFileSync(finalOutputPath, generateTeam(teamArr), "UTF-8")
  }

  createTeam();

}


init()

