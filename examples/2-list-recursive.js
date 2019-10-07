function createList(a, b) {
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

const myList = createList(1, createList(2, createList(3, 4)));
const a = first(myList);
const b = first(second(second(second(myList))));
console.log(a, b); // 1, 4
