//Polyfill for Debouncing

let myDebounce = function (cb, d) {
  let timer;
  return (...args) => {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

// polyfill for Throttle

let myThrottle = function (cb, d) {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};

const debouncingInput = myThrottle((e) => {
  console.log(e.target.value);
}, 1000);
document
  .getElementById("search-input")
  .addEventListener("input", debouncingInput);
