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

const myList = list(1, list(2, list(3, list(4, list(5, 6)))));
const a = first(myList);
const b = first(second(second(second(myList))));
console.log(a, b); // 1, 4
