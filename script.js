function hamburg(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// ---------------- CALCULATOR ----------------
function addNum() {
            var a = parseFloat(document.getElementById("no1").value);
            var b = parseFloat(document.getElementById("no2").value);

            document.getElementById("result").value = a + b;
        }

function subNum() {
            var a = parseFloat(document.getElementById("no1").value);
            var b = parseFloat(document.getElementById("no2").value);

            document.getElementById("result").value = a - b;
        }

function mulNum() {
            var a = parseFloat(document.getElementById("no1").value);
            var b = parseFloat(document.getElementById("no2").value);

            document.getElementById("result").value = a * b;
        }

function divNum() {
            var a = parseFloat(document.getElementById("no1").value);
            var b = parseFloat(document.getElementById("no2").value);

            document.getElementById("result").value = a / b;
        }

function clearAll() {
            document.getElementById("no1").value = "";
            document.getElementById("no2").value = "";
            document.getElementById("result").value = "";
        }

// ---------------- BMI ----------------
function calculateBMI(){
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    height = height / 100;

    var bmi = weight / (height * height);

    document.getElementById("bmiResult").innerHTML = bmi.toFixed(2);

    if(bmi < 18.5){
        document.getElementById("bmiStatus").innerHTML = "Underweight";
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        document.getElementById("bmiStatus").innerHTML = "Normal";
    }
    else if(bmi >= 25 && bmi <= 29.9){
        document.getElementById("bmiStatus").innerHTML = "Overweight";
    }
    else{
        document.getElementById("bmiStatus").innerHTML = "Obese";
    }
}

// ---------------- INCOME TAX ----------------
function calculateTax(){
    var income = parseFloat(document.getElementById("income").value);
    var tax = 0;

    if (income <= 5000) {
        tax = 0;
    }
    else if (income <= 20000) {
        tax = (income - 5000) * 0.01;
    }
    else if (income <= 35000) {
        tax = 150 + (income - 20000) * 0.03;
    }
    else if (income <= 50000) {
        tax = 600 + (income - 35000) * 0.08;
    }
    else if (income <= 70000) {
        tax = 1800 + (income - 50000) * 0.13;
    }
    else if (income <= 100000) {
        tax = 4400 + (income - 70000) * 0.21;
    }
    else if (income <= 250000) {
        tax = 10700 + (income - 100000) * 0.24;
    }
    else if (income <= 400000) {
        tax = 46700 + (income - 250000) * 0.245;
    }
    else if (income <= 600000) {
        tax = 83450 + (income - 400000) * 0.25;
    }
    else if (income <= 1000000) {
        tax = 133450 + (income - 600000) * 0.26;
    }
    else if (income <= 2000000) {
        tax = 237450 + (income - 1000000) * 0.28;
    }
    else {
        tax = 517450 + (income - 2000000) * 0.30;
    }

    document.getElementById("result").innerHTML = 
    "Tax Amount:RM " + tax.toFixed(2);

}

// ---------------- UNIT CONVERTER ----------------
function cmToM(){
    var value = parseFloat(document.getElementById("unitInput").value);
    document.getElementById("convertResult").innerHTML = (value / 100) + " metre";
}

function mToCm(){
    var value = parseFloat(document.getElementById("unitInput").value);
    document.getElementById("convertResult").innerHTML = (value * 100) + " cm";
}

function mToKm(){
    var value = parseFloat(document.getElementById("unitInput").value);
    document.getElementById("convertResult").innerHTML = (value / 1000) + " km";
}

function kmToM(){
    var value = parseFloat(document.getElementById("unitInput").value);
    document.getElementById("convertResult").innerHTML = (value * 1000) + " metre";
}