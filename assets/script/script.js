let maxWeight = document.getElementById('weight');
let itemList = document.getElementById('items')
let doneButtonElement = document.getElementById('done');
let display = document.getElementById('showscreen');
let displayWeight = document.getElementById('calc');
let reset = document.getElementById('reset').reset();
let calculateWeight = 0;
let count = 0;

doneButtonElement.addEventListener('click', () =>{
    if (maxWeight.value == ""){
        maxWeight.style.border = "2px solid red"

        maxWeight.placeholder = 'please enter a value';
    } else {
        itemList.addEventListener('change', () => {
            if(calculateWeight <= maxWeight.value){
                display.innerHTML += itemList.value + "<hr>" + "<br> ";
                for(let i = 0; i < arr.length; i++) {
                    if(itemList.value == arr[i].name) {
                        calculateWeight += arr[i].weight;
                        displayWeight.innerHTML = "<p>The sum of the Weight</p>" + calculateWeight;
                }
                }
            } if (calculateWeight + arr[i] > maxWeight) {
                if(itemList[i].value == arr[i].name){
                    itemlist[i].disabled = true;
                    if (itemlist[i].disabled == true) {
                        count++;
                    }
                }
               
            }
        })
    }
})

var arr = [
    {name: "item 1", weight: 4, value: 100},
    {name: "item 2", weight: 9, value: 200},
    {name: "item 3", weight: 3, value: 400},
    {name: "item 4", weight: 6, value: 200},
    {name: "item 5", weight: 8, value: 300},
    {name: "item 6", weight: 7, value: 800},
    {name: "item 7", weight: 8, value: 600},
    {name: "item 8", weight: 5, value: 700}
]
