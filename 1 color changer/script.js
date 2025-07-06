const boxes = document.querySelectorAll('.box')
const body = document.querySelector("body")
boxes.forEach(function (colorr){
    colorr.addEventListener('click', function(button){
        if(button.target.id === 'white'){
            body.style.backgroundColor = button.target.id
        }
           if(button.target.id === 'red'){
            body.style.backgroundColor = button.target.id
        }
           if(button.target.id === 'blue'){
            body.style.backgroundColor = button.target.id
        }
           if(button.target.id === 'green'){
            body.style.backgroundColor = button.target.id
        }
           if(button.target.id === 'yellow'){
            body.style.backgroundColor = button.target.id
        }
    })

})

const head = document.querySelector('.ann')
head.innerText = head.innerText.toUpperCase()