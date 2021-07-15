const arguments = process.argv.slice(2);

showPrimeNumbers = (lowNumber, highNumber) => {
    for (let i = lowNumber; i <= highNumber; i++) {
        let isPrime = true;
        for (let j = 2; j <= i; j++) {
            if(i % j === 0 && j !== i) {
                isPrime = false;
            }
        }

        if (isPrime) {
            console.log(i);
        }
    }
}

showPrimeNumbers(arguments[0], arguments[1]);
//console.log(process.argv.slice(1));