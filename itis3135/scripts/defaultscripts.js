function scriptTest()
{
    alert("Hey my script is running");
}

var numSides;

function setSides(numSide)
{
    this.numSides = numSide;
}

function getSides()
{
    return numSides;
}

function getShape()
{

    setSides(document.getElementById("sides").value);

    validateEntry();

    var sides = Math.abs(Math.round(getSides()));
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
    if (Math.abs(Math.round(getSides())) > 10 || Math.abs(Math.round(getSides())) < 1)
    {
        document.getElementById("polygon").innerHTML = "This number is invalid. Try again.";
    }
}