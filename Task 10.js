function sort_descending(arr) {       // Function to sort an array in descending order
    return arr.sort(function(a, b) {
        return b - a;
    });
}

let numbers_array = [10, 5, 20, 8, 15];    // Example:-
let sorted_array = sort_descending(numbers_array);

console.log("Array sorted in descending order:", sorted_array);
