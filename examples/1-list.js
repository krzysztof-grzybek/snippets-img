function list(a, b) {
  return function(f) {
    return f(a, b);
  };
}

function first(list) {
  return list(function(a, b) {
    return a;
  });
}

function second(list) {
  return list(function(a, b) {
    return b;
  });
}

const myList = list(1, 2);
const a = first(myList);
const b = second(myList);
console.log(a, b);
