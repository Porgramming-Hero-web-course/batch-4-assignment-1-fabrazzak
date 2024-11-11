"use strict";
{
    const numberArray = [1, 2, 3, 4, 5];
    const sumArray = (value) => {
        const sum = value.reduce((elem, sum) => elem + sum, 0);
        console.log(sum);
        return sum;
    };
    sumArray(numberArray);
}
