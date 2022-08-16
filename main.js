const submitBtn = document.getElementById('submitBtn');
const input = document.getElementById('inputText');
const img = document.getElementById('img');

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    var inputValue = input.value;
    img.src = inputValue;

    //remove text in input
    input.value = "";
});