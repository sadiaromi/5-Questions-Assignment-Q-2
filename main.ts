// write  javascript function that accepts a number as a parameter and checks whether its a prime or not using recursion

function isPrime(number, divisor= 2) {
    // Base cases
    if (number <= 1) {
        return false;     // Not prime
    }
    if(divisor * divisor > number) {
        return true; //Prime 
    };

    // Recursive case 
    if (number % divisor === 0) {
        return false;       //Not prime

    }

 // Increment the divisor and call recursively
 return isPrime(number, divisor + 1);   
}

//..................Example.............
const num = 2;
if (isPrime(num)) {
    console.log(`${num} is a prime number.`);
} else{
    console.log(`${num} is not a prime number.`);
}