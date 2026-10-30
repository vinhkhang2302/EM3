// Do the work, then hand the result to the callback function
function calculateSum(a, b, callBack) {
    const sum = a + b;
    callBack(sum);
}

// The callback: prints the result
function displaySum(result) {
    console.log('Tong cua hai so la: ', result);
}

calculateSum(1, 2, displaySum);
