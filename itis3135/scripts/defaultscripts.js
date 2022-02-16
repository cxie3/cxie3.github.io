function scriptTest()
{
    alert("Hey my script is running");
}

var numSides;

//getter and setter for numSide
function setSides(numSide)
{
    this.numSides = numSide;
}

function getSides()
{
    return numSides;
}

// gets the shape based off of the number of sides
function getShape()
{

    //sets the num of sides based off of user input
    setSides(document.getElementById("sides").value);

    //makes sure the user input is a valid input
    validateEntry();

    //set sides to equal the absolute value and round the user input
    var sides = Math.abs(Math.round(getSides()));
    //switch case is easiest to print out the type of polygon
    switch(sides)
    {
        case 1:
            document.getElementById("polygon").innerHTML = "A polygon with 1 side is called a henagon.";
            break;
        case 2:
            document.getElementById("polygon").innerHTML = "A polygon with 2 side is called a digon.";
            break;
        case 3:
            document.getElementById("polygon").innerHTML = "A polygon with 3 side is called a trigon.";
            break;
        case 4:
            document.getElementById("polygon").innerHTML = "A polygon with 4 side is called a tetragon.";
            break;
        case 5:
            document.getElementById("polygon").innerHTML = "A polygon with 5 side is called a pentagon.";
            break;
        case 6:
            document.getElementById("polygon").innerHTML = "A polygon with 6 side is called a hexagon.";
            break;
        case 7:
            document.getElementById("polygon").innerHTML = " A polygon with 7 side is called a heptagon.";
            break;
        case 8:
            document.getElementById("polygon").innerHTML = "A polygon with 8 side is called a octagon.";
            break;
        case 9:
            document.getElementById("polygon").innerHTML = "A polygon with 9 side is called a enneagon.";
            break;
        case 10:
            document.getElementById("polygon").innerHTML = "A polygon with 10 side is called a decagon.";
            break;

    }
}

function validateEntry()
{
    //make sure the user input put a number that was between the rounded and absolute val of 1 and 10
    if (Math.abs(Math.round(getSides())) > 10 || Math.abs(Math.round(getSides())) < 1)
    {
        document.getElementById("polygon").innerHTML = "This number is invalid. Try again.";
    }
}