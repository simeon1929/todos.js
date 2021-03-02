const form = document.querySelector('form');
const textAdd = document.querySelector('.textWarp');
const del = document.querySelectorAll('.addText span');

form.addEventListener('submit',function(e){
    e.preventDefault();
    let textBoxVal = form.textBoxfll.value;
    textAdd.innerHTML += `<div class="addText"> ${textBoxVal}<span>x</span></div>`;
    textBoxVal.reset();
})


// del.addEventListener('click', function(e){
//     console.log(e);
//     // if(textAdd == del ) {
//     //     console.log('buble');
//     // }
// });


