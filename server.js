const inquirer = require('inquirer');
const db = require('./db/connection');



//Start server after DB connection
db.connect((err) => {
  if (err) throw err;
  console.log('Database connected.');
  
  // excute separate function that asks the user question

  askQuestions();

});

// Ask questions function
const askQuestions = () => {
  inquirer.prompt({
    name: 'choice',
    type: 'list',
    message: 'What would you like to do?',
    choices: [
      'View Departments',
      'View Roles',
      'View Employees',
      'Add a Department', 
      'Add a role',
      'Add an employee',
      'Update and employee role',
      'Exit'
    ] 
  })
    .then((userResponse)=> {
      console.log(userResponse);
      // NEED TO EVALUATE THE KEY IN THIS OBJECT
      // userResponse.choice is the KEY and 'View Departments' is the VALUE!!!!!!! :>(
      if(userResponse.choice === 'View Departments') {
          db.query(
            'SELECT * FROM department', 
            (err, res) => {
              if (res) {
                // console.log('department information')
                // I just want to log the name of each department. Not all the other stuff. 'name' is the key I want to access
                res.forEach((response) => 
                // db.query(
                //   'SELECT * FROM department'
                // ))
                console.log(response.db_department))
                //console.log(res)
              } else {
                console.log('Error!')
              }
            }
          )
      } else if (userResponse.choice === 'View Roles') {
        db.query(
          'SELECT * FROM roles', 
          (err, res) => {
            if (res) {
              // console.log('roles information')
              // I just want to log the title of each role. Not all the other stuff. 'name' is the key I want to access
              res.forEach((response) => console.log(response.title))
              //console.log(res)
            } else {
              console.log('Error!')
            }
          }
        )
    } else if (userResponse.choice === 'Exit') {
      // closing database connection
      console.log('Closing database connection')
      db.end();
    }
  }); 
    
};

// db.query(
//   'SELECT * FROM roles', 
//   (err, res) => {
//     if (res) {
//       console.log('roles information')
//       //res.forEach((response) => console.log(response))
//       console.log(res)
//     } else {
//       console.log('Error!')
//     }
//   }
// )
