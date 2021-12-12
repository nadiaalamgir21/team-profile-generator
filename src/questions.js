const engineerQuestionArr = [
      
    {
      type: "input",
      name: "engineerName",
      message: "What is the engineer's name?"
    },

    {
      type: "input",
      name: "engineerId",
      message: "What is the engineer's employee ID number?" 
    },

    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineer's email address?"
    },

    {
      type: "input",
      name: "engineerGithub",
      message: "What is the engineer's GitHub username?"
    }

  ]

const managerQuestionsArr = [
    
    {
      type: "input",
      name: "managerName",
      message: "What is the manager's name?"
    },

    {
      type: "input",
      name: "managerId",
      message: "What is the manager's ID number?"
    },

    {
      type: "input",
      name: "managerEmail",
      message: "What is the manager's email address?"
    },

    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the manager's office number?"
    }

  ]
  
const internQuestionsArr = [
    {
      type: "input",
      name: "internName",
      message: "What is the intern's name?"
    },

    {
      type: "input",
      name: "internId",
      message: "What is the intern's employee ID number?"
    },

    {
      type: "input",
      name: "internEmail",
      message: "What is the intern's email address?"
    },

    {
      type: "input",
      name: "internSchool",
      message: "What school does the intern attend?"
    }

  ]

  module.exports = {
    engineerQuestionArr,
    managerQuestionsArr,
    internQuestionsArr
  }