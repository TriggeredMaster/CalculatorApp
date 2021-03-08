Addition = 0;
Subtraction = 0;
Multiplication = 0;
Division = 0;

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
    var x = document.getElementById("Go");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
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
    if (test == Addition) {

        addone = Number(document.getElementById("numone").value);
        addtwo = Number(document.getElementById("numtwo").value);

        answeradd = Number(addone) + Number(addtwo);

        document.getElementById("operation").innerHTML = "+";

        document.getElementById("result").innerHTML = "Answer = " + answeradd;
    }

    if (test == Subtraction) {

        subtractone = Number(document.getElementById("numone").value);
        subtracttwo = Number(document.getElementById("numtwo").value);

        if (subtracttwo > subtractone) {
            document.getElementById("result").innerHTML = "Please reduce the second number. If you dont want to reduce it. Click the button.";
            document.getElementById("Go").innerHTML = "Click me to get the answer";
        } else if (subtracttwo < subtractone) {
            answersubtract = Number(subtractone) - Number(subtracttwo);
            document.getElementById("Go").innerHTML = "";
            document.getElementById("operation").innerHTML = "-";
            document.getElementById("result").innerHTML = "Answer = " + answersubtract;
        }
    }

    if (test == Multiplication) {

        multiplyone = Number(document.getElementById("numone").value);
        multiplytwo = Number(document.getElementById("numtwo").value);

        answermultiply = Number(multiplyone) * Number(multiplytwo);

        document.getElementById("operation").innerHTML = "x";

        document.getElementById("result").innerHTML = "Answer = " + answermultiply;
    }

    if (test == Division) {

        divisionone = Number(document.getElementById("numone").value);
        divisiontwo = Number(document.getElementById("numtwo").value);

        answerdiv = Number(divisionone) / Number(divisiontwo);

        document.getElementById("operation").innerHTML = "/";

        document.getElementById("result").innerHTML = "Answer = " + answerdiv;
    }


}

function Go() {
    subtractone = Number(document.getElementById("numone").value);
    subtracttwo = Number(document.getElementById("numtwo").value);
    answersubtract = Number(subtractone) - Number(subtracttwo);
    document.getElementById("Go").innerHTML = "";
    document.getElementById("operation").innerHTML = "-";
    document.getElementById("result").innerHTML = "Answer = " + answersubtract;
}

function back() {
    window.location = "fouroperations.html";
}

function back1() {
    window.location = "index.html";
}