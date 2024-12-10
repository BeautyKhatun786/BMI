// function cal()
// {
//     var pass = parseFloat(document.getElementById("pass").value)

//     if(pass==40)
//     {
//         document.getElementById("gauge").style.rotate="45deg"
//         alert("over weight")
//     }
//     return false;
// }


function calculateBMI(){
    //get input
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value)/100;


    if (isNaN(weight) || isNaN(height) || height<=0){
        alert("Please enter valid values. ");
    }

    //calculate bmi

    const bmi = weight / (height * height);
    //determine bmi catagory

    let category='';
    if(bmi < 18.5){
        document.getElementById("gauge").style.rotate = "60deg";
        category = 'Underweight';
    }
    else if(bmi > 18.5 && bmi < 24.9 ){
        document.getElementById("gauge").style.rotate = "45deg";
        category = 'Normal Weight';
    }
    else if(bmi > 24.9 && bmi < 29.9){
        
        document.getElementById("gauge").style.rotate = "30deg";
        category = 'Overweight';
    }
    else{
        document.getElementById("gauge").style.rotate = "15deg";
        category = 'Obesity';
    }

    document.getElementById('bmiResult').textContent = `Your BMI is ${bmi.toFixed(2)}`;
    document.getElementById('bmiCategory').textContent = category;
}