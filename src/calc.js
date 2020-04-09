function calc(operation, arg1, arg2) {
  //Check if we have all needed arguments
  if (arguments.length !== 3) {
    console.log('Function calc require 3 parameter:' +
      '\n 1. Operation name - one of type: "add", "subtract", "multiply", "divide"' +
      '\n 2. Number' +
      '\n 3. Number');
    return
  }

  const numb1 = Number(arg1);
  const numb2 = Number(arg2);
  //Check if arguments are numbers
  if (isNaN(numb1) || isNaN(numb2)) {
    console.log('Please enter correct numbers');
    return;
  }

  let message = '';
  switch (operation.toLowerCase()) {
    case 'add':
      message = numb1 + numb2;
      break;
    case 'subtract':
      message = numb1 - numb2;
      break;
    case 'multiply':
      message = numb1 * numb2;
      break;
    case 'divide':
      if (numb1 === 0) {
        message = "0 can't be divided";
      } else {
        message = numb1 / numb2;
      }
      break;
    default:
      message = 'Please put correct operation name: "add", "subtract", "multiply", "divide"';
  }
  console.log(message);
}
module.exports = calc;
