// forEach()
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
}); 

// filter()
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})

// Map()


let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers); 
// EXEMPLE.COM handle event demo 
var h1 = document.querySelector(h1);
var arr = ['Example Domain', 'First Click', 'Second Click', 'Third Click'];
function handleClicks() {
switch (h1.innerText) {
    case arr[0]: 
    h1.inerText = arr[1]        
        break
    case arr[1]: 
    h1.inerText = arr[2]
        break
    case arr[2]: 
    h1.inerText = arr[3]

    default: 
    h1.inerText = arr[0]
}
}
h1 = h1.addEventListener('click', handleClicks); 

