const input = document.querySelector("#input");
const button = document.querySelector("#convert-button");
const output = document.getElementById('output-pound');
const outputounces = document.getElementById('output-ounces');
const outputgm = document.getElementById('output-grams');


button.addEventListener('click',()=>{
    //logic
    output.innerHTML = input.value* 2.20462;
    outputounces.innerHTML = input.value* 35.274;
    outputgm.innerHTML = input.value* 1000;
})