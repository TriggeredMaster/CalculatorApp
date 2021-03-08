Addition = 0;
Subtraction = 0;
Multiplication = 0;
Division = 0;

fraconenumerator = 0;
fraconedenominator = 0;

fractwonumerator = 0;
fractwodenominator = 0;

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown() {
    document.getElementById("Dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function addition() {
   Addition = document.getElementById("Dropdown").value = "#addition";
}

function subtraction() {
    Subtraction = document.getElementById("Dropdown").value = "#subtraction";
}

function multiplication() {
    Multiplication = document.getElementById("Dropdown").value = "#multiplication";
}

function division() {
    Division = document.getElementById("Dropdown").value =  "#division";
}

function calculate() {
    test = document.getElementById("Dropdown").value;

    fraconenumerator = Number(document.getElementById("fraconenumerator").value);
    fraconedenominator = Number(document.getElementById("fraconedenominator").value);

    fractwonumerator = Number(document.getElementById("fractwonumerator").value);
    fractwodenominator = Number(document.getElementById("fractwodenominator").value);

    if (test == Addition) { 
        if (fraconedenominator != fractwodenominator) {
            document.getElementById("Go").innerHTML = "Click me for the answer";
            document.getElementById("result").innerHTML = "Please make the denominators equal. If you dont want to change it, click this button";
        } else if (fraconedenominator == fractwodenominator) {
            Answeradd = Number(fraconenumerator) + Number(fractwonumerator);
            document.getElementById("result").innerHTML = Answeradd+"/"+fraconedenominator;
            document.getElementById("operation").innerHTML = "+";
        }
    }

    if (test == Subtraction) {
        if (fraconedenominator != fractwodenominator) {
            document.getElementById("Go").innerHTML = "Click me for the answer";
            document.getElementById("result").innerHTML = "Please make the denominators equal. If you dont want to change it, click this button";
        } else if (fraconedenominator == fractwodenominator) {
            Answeradd = Number(fraconenumerator) - Number(fractwonumerator);
            document.getElementById("result").innerHTML = Answeradd+"/"+fraconedenominator;
            document.getElementById("operation").innerHTML = "-";
        }
    }

    if (test == Multiplication) {
        if (fraconedenominator != fractwodenominator) {
            document.getElementById("Go").innerHTML = "Click me for the answer";
            document.getElementById("result").innerHTML = "Please make the denominators equal. If you dont want to change it, click this button";
        } else if (fraconedenominator == fractwodenominator) {
            Answeradd = Number(fraconenumerator) * Number(fractwonumerator);
            document.getElementById("result").innerHTML = Answeradd+"/"+fraconedenominator;
            document.getElementById("operation").innerHTML = "x";
        }
    }

    if (test == Division) {
        if (fraconedenominator != fractwodenominator) {
            document.getElementById("Go").innerHTML = "Click me for the answer";
            document.getElementById("result").innerHTML = "Please make the denominators equal. If you dont want to change it, click this button";
        } else if (fraconedenominator == fractwodenominator) {
            Answeradd = Number(fraconenumerator) / Number(fractwonumerator);
            document.getElementById("result").innerHTML = Answeradd+"/"+fraconedenominator;
            document.getElementById("operation").innerHTML = "/";
        }
    }
}

function Go() {
    test = document.getElementById("Dropdown").value;

    fraconenumerator = Number(document.getElementById("fraconenumerator").value);
    fraconedenominator = Number(document.getElementById("fraconedenominator").value);

    fractwonumerator = Number(document.getElementById("fractwonumerator").value);
    fractwodenominator = Number(document.getElementById("fractwodenominator").value);

    if (test == Addition) {
        Answer1Numerator = fraconenumerator * fractwodenominator;
        Answer1Denominator = fraconedenominator * fractwodenominator;

        Answer2Numerator = fractwonumerator * fraconedenominator;
        Answer2Denominator = fractwodenominator *fraconedenominator;

        Answeradd1 = Number(Answer1Numerator) + Number(Answer2Numerator); 
        
        document.getElementById("result").innerHTML = Answeradd1+"/"+Answer1Denominator;
        document.getElementById("operation").innerHTML = "+";

        document.getElementById("Go").innerHTML = "";
    }

    if (test == Subtraction) {
        Answer1Numerator = fraconenumerator * fractwodenominator;
        Answer1Denominator = fraconedenominator * fractwodenominator;

        Answer2Numerator = fractwonumerator * fraconedenominator;
        Answer2Denominator = fractwodenominator *fraconedenominator;

        Answersub1 = Number(Answer1Numerator) - Number(Answer2Numerator); 
        
        document.getElementById("result").innerHTML = Answersub1+"/"+Answer1Denominator;
        document.getElementById("operation").innerHTML = "-";

        document.getElementById("Go").innerHTML = "";
    }

    if (test == Multiplication) {
        Answer1Numerator = fraconenumerator * fractwodenominator;
        Answer1Denominator = fraconedenominator * fractwodenominator;

        Answer2Numerator = fractwonumerator * fraconedenominator;
        Answer2Denominator = fractwodenominator *fraconedenominator;

        Answersub1 = Number(Answer1Numerator) * Number(Answer2Numerator); 
        
        document.getElementById("result").innerHTML = Answersub1+"/"+Answer1Denominator;
        document.getElementById("operation").innerHTML = "x";

        document.getElementById("Go").innerHTML = "";
    }

    if (test == Division) {
        Answer1Numerator = fraconenumerator * fractwodenominator;
        Answer1Denominator = fraconedenominator * fractwodenominator;

        Answer2Numerator = fractwonumerator * fraconedenominator;
        Answer2Denominator = fractwodenominator *fraconedenominator;

        Answersub1 = Number(Answer1Numerator) / Number(Answer2Numerator); 
        
        document.getElementById("result").innerHTML = Answersub1+"/"+Answer1Denominator;
        document.getElementById("operation").innerHTML = "/";

        document.getElementById("Go").innerHTML = "";
    }
}

function back() {
    window.location = "fractions.html";
}
 
function back1() {
    window.location = "index.html";
}