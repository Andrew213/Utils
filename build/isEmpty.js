"use strict";
// функция, которая проверяет, является ли переданный аргумент пустым.
/*
isEmpty(null); // => true
isEmpty(true); // => true
isEmpty(1); // => true
isEmpty([1, 2, 3]); // => false
isEmpty({ 'a': 1 }); // => false
isEmpty('123'); // => false
isEmpty(123); // => true
isEmpty(''); // => true
isEmpty(0); // => true
isEmpty(undefined) // => true
isEmpty(new Map([['1', 'str1'], [1, 'num1'], [true, 'bool1']])) // => false
isEmpty(new Set(['value1', 'value2', 'value3'])) // => false
*/
function isEmpty(value) {
    if (value) {
        if (typeof value === "object" && Object.keys(value).length) {
            return false;
        }
        if (Array.from(value).length) {
            return false;
        }
    }
    return true;
}
