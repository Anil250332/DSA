let num = 10;
    while (num >= 10) {
        let sum = 0;

        while (num > 0) {
            let digit = num % 10;
            sum = sum + digit;
            num = Math.floor(num / 10);
        }

        num = sum;
    }

    console.log(num) ;