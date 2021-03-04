// const form = document.querySelector('form');
// const textAdd = document.querySelector('.textWarp');
// const del = document.querySelectorAll('.addText span');

// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     let textBoxVal = form.textBoxfll.value;
//     textAdd.innerHTML += `<div class="addText"> ${textBoxVal}<span>x</span></div>`;
//     textBoxVal.reset();
// })


// del.addEventListener('click', function(e){
//     console.log(e);
//     // if(textAdd == del ) {
//     //     console.log('buble');
//     // }
// });


// class Details {
//     constructor(x, y, z){
//         this.name = x
//         this.age = y
//         this.gender = z
//     }
// }

// let simeon = new Details('simeon', 20, 'male')
// let Joe = new Details('Joe', 20, 'female')
// console.log(simeon, Joe);

var ctx = document.getElementById('myChart').getContext('2d');
ctx.height(300);
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

