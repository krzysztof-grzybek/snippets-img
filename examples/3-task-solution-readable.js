// Zdefiniuj funkcje:
// range, map, reverse i foreach
// uwzględniając poniższe ograniczenia tak, aby program działał poprawnie.
//
// - nie możesz używać tablic. Kwadratowe nawiasy [ ] i konstruktor Array  są zabronione.
// - nie możesz używać obiektów. Nawiasy klamrowe { } i używanie kropki . są zabronione
// - funkcje muszą być generyczne
// - nie możesz używać "iterator statements", czyli:
//      do...while
//      for
//      for...in
//      for...of
//      for await...of
//      while
//
// Źródło: http://lisperator.net/blog/a-little-javascript-problem


const createList = (a, b) => f => f(a, b);
const first = l => l((a, b) => a);
const second = l => l((a, b) => b);

function range(from, to) {
  if (from <= to) {
    return createList(from, range(from + 1, to));
  } else {
    return null;
  }
}

function foreach(list, fn) {
  if (list !== null) {
    fn(first(list));
    foreach(second(list), fn);
  }
}

function map(list, fn) {
  if (list !== null) {
    return createList(fn(first(list)), map(second(list), fn));
  } else {
    return list;
  }
}

function reverse(list) {
  return function _reverse(list, parent) {
    if (second(list) === null) {
      return createList(first(list), parent);
    } else {
      return _reverse(second(list), createList(first(list), parent));
    }
  }(list, null);
}

let numbers = range(1, 10);
numbers = map(numbers, function (n) { return n * n });
numbers = reverse(numbers);
foreach(numbers, (n) => console.log(`${n} \n`));
