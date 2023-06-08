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

sumEven()