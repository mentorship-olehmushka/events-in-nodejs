function timer(seconds) {
  if (!seconds) {
    console.log('Function timer require 1 parameter - Number more then 0');
    return;
  }

  const number = Number(seconds);

  if (isNaN(number) || Math.ceil(number) <= 0) {
    console.log('Function timer accept only Number that bigger than 0');
    return;
  }

  let s = Math.ceil(number);
  const interval = setInterval(() => {
    console.log(s--);
    if (s < 0) {
      clearInterval(interval);
    }
  }, 1000)
}

module.exports = timer;


