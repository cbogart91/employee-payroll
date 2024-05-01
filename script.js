// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

addEmployeesBtn.addEventListener('click' , function() {

  // const userFirstName = prompt("Please enter first name");
  // const last = prompt("Please enter last name");
  // const salary = prompt("Please enter salary");

});

// Collect employee data

const collectEmployees = function() {

  // TODO: Get user input to create and return an array of employee objects

  const employees = [];
  let continueAdding = true;
  while (continueAdding) {
    let firstName = prompt(`Add First Name`);
    let lastName = prompt(`Add Last Name`);
    let salary = prompt(`Add Salary`);
    
    salary = (isNaN(salary) || salary === null) ? 0 : Number(salary);
    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
  });
    continueAdding = confirm(`Do you want to add another employee?`);
}
return employees;
}

// Display the average salary
  const displayAverageSalary = function(employeesArray) { 
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;
  const current = employeesArray.length;
  console.log(`The average employee salary between our ${current}
  employee(s) is ${averageSalary.toLocaleString("en-US" , {style: "currency" , currency: "USD"})}`);
  // TODO: Calculate and display the average salary
  }

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray [randomIndex];
  console.log(`Congratulations ${randomEmployee.firstName } you are the winner!!! `);
  // TODO: Select and display a random employee
}





/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
