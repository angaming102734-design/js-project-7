// alert('ji')

// var look = ('')

let inputValue=document.getElementById('input-box');
// console.log(inputValue);

let buttons = document.querySelector('button');
// console.log(buttons);

let result ="";

let buttonArr =Array.from(buttons);
// console.log(buttonArr);

// buttonArr.forEach(buttons => {
//     buttons.adde
// });

buttonArr.forEach(buttons => {
    buttonArr.addEventistener('click', (e) =>{
     if(e.target.innerHTML == "="){
        result = eval(result)
        inputValue,value = result
     }else{
        result += e.target.innerHTML;
        inputValue.value = result;
     }
    }) 
});