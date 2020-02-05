//asks user for sum or average and displays
let myNumbers = [34, 56, 117, 324, 183, 231, 72, 111, -10, 207]
let question1 = prompt("Do you want to sum or average the numbers?")
let sumNumbers = 34 + 56 + 117 + 324 + 183 + 231 + 72 + 111 + -10 + 207
let averageNumbers = (34 + 56 + 117 + 324 + 183 + 231 + 72 + 111 + -10 + 207) / 10
switch (question1) {
  case 'sum' :
    alert(`The sum of the 10 numbers is ${sumNumbers}.`)
    break
  case 'average' :
    alert(`The average of the 10 numbers is ${averageNumbers}.`)
    break
  default :
    alert("Please select sum or average.")
    break;
    }

//asks user for additional numbers and adds 10 to the last number
//asks for first number and then adds 10
let getANumber = prompt("Please enter a number: ")
myNumbers.push(getANumber)
let numberTen = 10
lastNum = myNumbers.slice(-1)
alert(`The last number in the array plus 10 is ${lastNum + numberTen}.`)

//asks for second number and then adds 10
let getANumber2 = prompt("Please enter another number: ")
myNumbers.push(getANumber2)
lastNum2 = myNumbers.slice(-1)
alert(`The last number in the array plus 10 is ${lastNum2 + numberTen}.`)

//asks for third number and then adds 10 
let getANumber3 = prompt("Please enter another number: ")
myNumbers.push(getANumber3)
lastNum3 = myNumbers.slice(-1)
alert(`The last number in the array plus 10 is ${lastNum3 + numberTen}.`)