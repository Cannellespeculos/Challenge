import './style.css'


// export function premier() {
//   const prem = [1, 2, 3, 5];
//   let index = 1;
//   let counter = prem.length;
//   let trueorfalse = false;

//   while (counter < 100) {
//     for (let i = 0; i < prem.length; i++) {
//       if (index % prem[i] != 0) {
//         prem.push(index)
//       } else {
//         index++;
//         i = 0;
//       }

//     }
//     counter++;
//     index++;
//   }

//   console.log(prem)

//   return prem


// }

// premier()


// export function positive(num) {

//   if (num > 0) {
//     return true
//   } else {
//     return false
//   }

// }

// console.log(positive(0))


// first challenge
// Print numbers from 1 to 10
function ten(params) {
  let index = 1
  while (index <= 10) {
    console.log(index)
    index++;
  }
}


// second challenge
// Print the odd numbers less than 100
function odd() {
  for (let i = 0; i < 100; i++) {
    if (i % 2 != 0) {
      console.log(i)
    }

  }
}

// third challenge
// Print the multiplication table with 7
function seven() {
  for (let i = 0; i <= 70; i++) {
    if (i % 7 === 0) {
      console.log(i)
    }

  }
}

// fourth challenge
// Print all the multiplication tables with numbers from 1 to 10
function name(params) {

}

// fifth challenge
// Calculate the sum of numbers from 1 to 10
function sum() {
  let total = 0;
  for (let i = 0; i <= 10; i++) {
    total += i

  }

  console.log(total)
}

// sixth challenge
// Calculate 10!
function idk() {
  let total = 1
  for (let i = 2; i <= 10; i++) {
    total *= i

  }
  return total
}

// console.log(idk())


// seventh challenge
// Calculate the sum of even numbers greater than 10 and less than 30
function sumEven() {
  let total = 0;
  for (let i = 10; i < 30; i++) {
    if (i % 2 === 0) {
      total += i
    }

  }
  console.log(total)
}

// eight challenge
// Create a function that will convert from Celsius to Fahrenheit
function Fahrenheit(C) {
  let fahrenheit = C * 1.8 + 32

  return fahrenheit

}

// console.log(Fahrenheit(18))


// challenge nine
// Create a function that will convert from Fahrenheit to Celsius
function Celsius(F) {
  let celsius = (F - 32) / 1.8;

  return celsius
}

// console.log(Celsius(101.3))


// challenge 10
// Calculate the sum of numbers in an array of numbers
function sumArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i]

  }

  return total
}

// console.log(sumArray([56, 54]))


// challenge ten
// Calculate the average of the numbers in an array of numbers
function averageArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i]

  }

  total /= array.length

  return total
}

// console.log(averageArray([18, 15]))


// challenge eleven 
// Create a function that receives an array of numbers as argument and returns an
// array containing only the positive numbers
function positive(array) {
  let positif = []
  for (let index = 0; index < array.length; index++) {
    if (array[index] > 0) {
      positif.push(array[index])
    }

  }

  return positif
}

// console.log(positive([12, -36, 36, -52]))


// challenge twelve
// Find the maximum number in an array of numbers
export function maxNum(array) {
  let max = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }

  }

  return max

}

// console.log(maxNum([15, 69, 35, 45, 12, 65, 75, 98]))


// challenge thirdteen 
// Print the first 10 Fibonacci numbers without recursion
export function Fibonacci() {
  let lastNumber = 0;

  for (let i = 1; i <= 10; i++) {
    console.log(i + lastNumber)
    lastNumber = i + lastNumber
  }

}

// Fibonacci()


// challenge sixteen
// Create a function that will return a Boolean specifying if a number is prime
function prime(n) {
  if (n % 2 != 0) {
    return true
  } else if (n % 2 === 0) {
    return false
  }
}

// console.log(prime(27))


// challenge seventeen
// Calculate the sum of digits of a positive integer number
function sumDigits(num) {
  let numString = num.toString()
  let total = 0;
  for (let i = 0; i < numString.length; i++) {
    let firstDigit = numString[i]
    total += parseInt(firstDigit)

  }

  return total
}

// console.log(sumDigits(86))


// let bruh = parseInt("33")
// console.log(bruh)


// challenge eighteen
// Print the first 100 prime numbers

export function premier() {
  const prem = [1, 2, 3, 5];
  let index = 1;
  let counter = prem.length;
  let trueorfalse = false;

  while (counter < 100) {
    for (let i = 0; i < prem.length; i++) {
      if (index % prem[i] != 0) {
        prem.push(index)
      } else {
        index++;
        i = 0;
      }

    }
    counter++;
    index++;
  }


  return prem


}

// console.log(premier())



// challenge nineteen
// Create a function that will return in an array the first “p” prime numbers
// greater than “n”

function greaterPrime(n) {
  let p = 0

  for (let i = n; p === 0; i++) {
    if (i != n) {
      if (i % 2 != 0) {
        p += i

      }
    }
  }
  return p
}

// console.log(greaterPrime(89))


// challenge twenty-two
// Reverse an array
function reverseArray(array) {
  let voidArray = [];
  for (let i = 1; i < array.length; i++) {
    voidArray.push(array[array.length - i])

  }

  return voidArray
}

// console.log(reverseArray([556, 48, 98, 23, 45, 456]))


// challenge twenty-three
// reverse a string
function reverseString(string) {
  let voidString = ""
  for (let i = 1; i < string.length + 1; i++) {
    voidString += string[string.length - i]

  }


  return voidString
}

// console.log(reverseString("cannelle"))


// challenge twenty-four
//  Create a function that will merge two arrays and return the result as a new
// array

function mergeArray(firstArr, secondArr) {
  const bigArray = firstArr;
  for (let i = 0; i < secondArr.length; i++) {
    bigArray.push(secondArr[i])

  }

  return bigArray
}

// console.log(mergeArray([5, 6, 8], [9, 56, 23]))


// challenge twenty-five
// Create a function that will receive two arrays of numbers as arguments and
// return an array composed of all the numbers that are either in the first array
// or second array but not in both

function JustOne(firstArr, secondArr) {
  let bigArray = firstArr;
  for (let i = 0; i < secondArr.length; i++) {
    if (!bigArray.includes(secondArr[i])) {
      bigArray.push(secondArr[i])
    }

  }

  return bigArray
}

// console.log(JustOne([5, 6, 9], [2, 5, 3]))


// challenge twenty-six
// Create a function that will receive two arrays and will return an array with
// elements that are in the first array but not in the second

function name(params) {

}


// challenge twenty-seven
// Create a function that will receive an array of numbers as argument and will return a
// new array with distinct elements