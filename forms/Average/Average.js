//asks user for sum or average and displays the sum or average 
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

//asks user for additional numbers
//asks for first number
let getANumber = prompt("Please enter a number: ")
  myNumbers.push(getANumber)

//asks for second number
let getANumber2 = prompt("Please enter another number: ")
  myNumbers.pop(getANumber2)

//asks for third number
let getANumber3 = prompt("Please enter another number: ")
  myNumbers.push(getANumber3)

//shows last number + 10
let lastNum = Number(myNumbers.pop())
  alert(`The current last number in the array plus 10 is ${lastNum + 10}.`)


