// Check whether a number is even ("chan") or odd ("le") and pass the answer to the callback
function check(a, callBack) {
    if (a % 2 == 0)
        return callBack(a, "chan");

    return callBack(a, "le");
}

// The callback: prints the number and its type
function displayInfo(a, result) {
    console.log(`the number ${a} is ${result}`);
}

check(4, displayInfo);
