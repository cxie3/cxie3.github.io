//declare two empty arrays: one for person and one for salaries.
var person = [];
var salaries = [];

//Derive the avg salary and the highest from array and display the results
function displayResult()
{
    var avg = 0;
    var sum = 0;
    var position;
    var highest = 0;
    //Loops through salaries array to add up all salaries
    for(i = 0; i < salaries.length; i++)
    {
        sum = sum + salaries[i];
    }
    //Calculates average
    avg = Math.round(sum/salaries.length);

    //Loops through salaries array to find highest salary
    for(j = 0; j < salaries.length; j++)
    {
        if(salaries[j] > highest)
        {
            highest = salaries[j];
            position = j;
        }
    }
    //Writes information onto the page
    document.getElementById("results").innerHTML = "<h4>Results</h4>" + "Average Salary: $" + avg
    + "<br>Highest Salary: " + person[position] + " - $" + highest;
}

//Get the names and values from the arrays and display them as rows
function displaySalary()
{
    var table = "<table><tr><th>Name</th> <th>Salary</th></tr>";
    //loop to add each person and thier salary
    for(i = 0; i < salaries.length; i++)
    {
        table = table + "<tr><td>" + person[i] + "</td><td> $" + salaries[i] + "</td></tr>";
    }
    table = table + "</table>"
    document.getElementById("result_table").innerHTML = table;
}

//Add a person and salary to the arrays
function addSalary()
{
    var name = document.getElementById("name").value;
    var salary = parseInt(document.getElementById("salary").value);

    //The entries must not be empty, and value has to be numeric
    if(name == "" || typeof name != 'string' ||
     salary == "" || salary <= 0 || salary == "$NaN" || typeof salary != 'number')
    {
        alert("Please enter a valid name/salary for your user.");
    }
    
    else
    {
        person.push(name);
        salaries.push(salary);
    }

    //Move the cursor to the name field when the app starts
    // and after a name and salary have been added
    // or when the the user clicks the add button
    document.getElementById("name").focus();
}