var names;
var feelings;
var emails;

function setEmail(email)
{
    this.emails = email;
}

function setName(name)
{
    this.names = name;
}

function setFeeling(feeling)
{
    this.feelings = feeling;
}

function getEmail()
{
    return emails;
}

function getName()
{
    return names;
}


function getFeeling()
{
    return feelings;
}

function greeting()
{
    setName(document.getElementById("names").value);
    setFeeling(document.getElementById("feelings").value);

    document.getElementById("welcome").innerHTML = "The Cerulean Xerus welcomes you, " + getName()
     + "! We're glad you are doing " + getFeeling() + "!";
}

function showMenu()
{
    document.getElementById("menu").innerHTML = "Menu: <li>Croissant</li> <li>Soft Pretzels</li> <li>Cake Pops</li> <li>Donuts</li>";

}

function showSpecial()
{
    document.getElementById("special").innerHTML = "Daily Special: Chocolate Croissants";

}

function showPrices()
{
    document.getElementById("price").innerHTML = "Menu: <li>Croissant - $3.99</li> <li>Soft Pretzels - $3.99</li> <li>Cake Pops - $1.99</li> <li>Donuts - $1.99</li>";

}

function addEmail()
{
    setEmail(document.getElementById("emails").value);
    document.getElementById("added").innerHTML = "We have added " + getEmail() + " to our email list. We will notify you of any changes.";

}


function doneShopping()
{
    document.getElementById("finish").innerHTML = "Thank you for coming. Come again next time";

}
