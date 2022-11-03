function calculate() {
    var height =
   parseFloat(document.getElementById("height").value);
    var weight =
   parseFloat(document.getElementById("weight").value);
    var bmi = weight /(height*height);
    if(bmi < 18.5) {
    document.getElementById("result").innerHTML =
   "Underweight : " + bmi.toFixed(2);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById("result").innerHTML =
   "Healthy Weight : " + bmi.toFixed(2);
    } else if (bmi >= 25.0 && bmi <= 29.9) {
    document.getElementById("result").innerHTML =
   "Overweight : " + bmi.toFixed(2);
    } else if (bmi >= 30.0) {
    document.getElementById("result").innerHTML =
   "Obesity : " + bmi.toFixed(2);
    }
    }