// 
const generateTeam = team => {

    // function below creates the manager html
    const createManager = manager => {
        return `
            <div class="employee-card">
                <div class="card-head text-white">
                    <h3 class="card-title"><i class="fa fa-eye mr-2"></i>${manager.getDesignation()}</h3>
                    <h2 class="card-title">${manager.getEmployeeName()}</h2>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.getEmployeeId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmployeeEmail()}">${manager.getEmployeeEmail()}</a></li>
                        <li class="list-group-item">Phone number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        `;
    };

    // function below creates the html for engineers
    const generateEngineer = engineer => {
        return `
            <div class="employee-card">
                <div class="card-head text-white">   
                    <h3 class="card-title"><i class="fa fa-wrench mr-2"></i>${engineer.getDesignation()}</h3>
                    <h2 class="card-title">${engineer.getEmployeeName()}</h2>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.getEmployeeId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmployeeEmail()}">${engineer.getEmployeeEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
        `;
    };

    // function below creates the html for interns
    const generateIntern = intern => {
        return `
            <div class="employee-card">
                <div class="card-head text-white">
                    <h3 class="card-title"><i class="fa fa-id-card mr-2"></i>${intern.getDesignation()}</h3>
                    <h2 class="card-title">${intern.getEmployeeName()}</h2>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.getEmployeeId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmployeeEmail()}">${intern.getEmployeeEmail()}</a></li>
                        <li class="list-group-item">College: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getDesignation() === "Manager")
        .map(manager => createManager(manager))
    );
    html.push(team
        .filter(employee => employee.getDesignation() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getDesignation() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// function below that generates the complete page
module.exports = team => {
    return `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Team Generator App</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
                <link rel="stylesheet" href="style.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            </head>

            <body>
                <div class="container-fluid">
                    <div class="row">
                        <div class="main-heading col-12 mb-3">
                            <h1 class="text-light text-center">Team</h1>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="row col-12 d-flex justify-content-center">
                            ${generateTeam(team)}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `;
};