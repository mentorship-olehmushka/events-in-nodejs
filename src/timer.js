//check if functions argument exist
if (process.argv.length !== 3) {
  console.log('Function timer require 1 parameter - Number more then 0');
} else {
  const number = Number(process.argv[2]);

  //check if it's number
  if (isNaN(number)) {
    console.log('Function timer accept only Number');
  } else if(Math.ceil(number) <= 0) {
    console.log('Number should be more then 0');
  } else {
    timer(Math.ceil(number));
  }
}

function timer(seconds) {
  let s = seconds;
  const interval = setInterval(() => {
    console.log(s--);
    if (s < 0) {
      clearInterval(interval);
    }
  }, 1000)
}


