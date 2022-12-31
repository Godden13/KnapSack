let maxWeight = document.getElementById('weight');
let itemList = document.getElementById('items')
let doneButtonElement = document.getElementById('done');
let display = document.getElementById('showscreen');
let displayWeight = document.getElementById('calc');
const reset = document.getElementById('reset')
let count = 0;

let knapsack = {
    capacity: 0,
    weight: 0,
    value: 0,
    items: []
}

console.log(knapsack)

doneButtonElement.addEventListener('click', () => {
    if (maxWeight.value == "") {
        maxWeight.style.border = "2px solid red"

        maxWeight.placeholder = '⚠️ please enter a value';
    } else {
        knapsack.capacity = maxWeight.value
        maxWeight.disabled = true
        console.log(knapsack.capacity)

        itemList.addEventListener('change', () => {
            for (let i = 0; i < arr.length; i++) {
                if (itemList.value == arr[i].name) {
                    if (knapsack.weight + arr[i].weight <= knapsack.capacity) {
                        let itemSelected = itemList.selectedIndex
                        itemSelected.disabled = true;
                        knapsack.items.push(arr[i])
                        knapsack.weight += arr[i].weight
                        knapsack.value += arr[i].value
                        console.log(knapsack)
                        display.innerHTML = knapsack.weight + ' ' + 'is the weight' + ', ' + knapsack.value + ' ' + 'is the value'
                    } if (knapsack.weight + arr[i].weight > knapsack.capacity) {
                        alert('The Knapsack will be full by adding this item')
                    }
                } if (knapsack.weight == knapsack.capacity) {
                    document.querySelector("#showscreen").style.background = "red";
                    document.querySelector("#showscreen").style.color = "#fff";
                }
                console.log(arr[i], itemList.value)
            }
        })
    }
})

function refreshPage(){
    window.location.reload();
}

reset.addEventListener('click', refreshPage)

var arr = [
    { name: "item 1", weight: 4, value: 100 },
    { name: "item 2", weight: 1, value: 200 },
    { name: "item 3", weight: 3, value: 400 },
    { name: "item 4", weight: 6, value: 200 },
    { name: "item 5", weight: 8, value: 300 },
    { name: "item 6", weight: 7, value: 800 },
    { name: "item 7", weight: 8, value: 600 },
    { name: "item 8", weight: 5, value: 700 }
]
