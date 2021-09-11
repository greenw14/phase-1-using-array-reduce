const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function totalBatteries(array){
    const total = array.reduce(function(accumulator, currentValue){
       return accumulator + currentValue
    }, 0)
    return total
};