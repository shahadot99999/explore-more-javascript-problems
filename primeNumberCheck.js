//২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 
let result;
let result1;
function isPrimeNumber(n) {
    let i = 2;
    if (n % i === 0)
        // console.log(result);
        console.log("Your number is not prime")
    else {
        //console.log(result1);
        console.log("Your number is  prime")
    }
    return;
}
isPrimeNumber(7);

// const yourPrime = isPrimeNumber(7);
// console.log("Your number is not prime", yourPrime.result);
// console.log("Your number is  prime", yourPrime.result1);