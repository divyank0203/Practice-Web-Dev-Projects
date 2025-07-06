
const form = document.querySelector('form')
console.log(form)
const calc = document.querySelector('button')
console.log(calc)
calc.addEventListener('click', function(e){
    e.preventDefault() //to prevent default action of form i.e., to submit it

    const height = parseFloat(document.querySelector('#height').value) //get the value of the input height and parse the string to integer using parse
    const weight = parseFloat(document.querySelector('#weight').value)
    const result = document.getElementById('results')

    //if height and weight are not valid inputs
    if(height=='' || height<0 || isNaN(height)){
        result.innerHTML = "Please enter a valid height "
        return;
    }
    //if height and weight are not valid inputs
    if(weight=='' || weight<0 || isNaN(weight)){
        result.innerHTML = "Please enter a valid weight "
        return;
    }
    
    const ans = ((weight) / ((height/100)*(height/100))).toFixed(2)
    result.innerText = `Your BMI is ${ans}`

    return result
})