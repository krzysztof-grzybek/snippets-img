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

const list = (a, b) => f => f(a, b);
const first = l => l((a, b) => a);
const second = l => l((a, b) => b);

const range = (from, to) => from <= to ? list(from, range(from + 1, to)) : null;
const foreach = (l, f) => l !== null && (f(first(l)), foreach(second(l), f));
const map = (l, f) => l !== null ? list(f(first(l)), map(second(l), f)) : l;
const reverse = (l, parent = null) =>
  second(l) === null
    ? list(first(l), parent)
    : reverse(second(l), list(first(l), parent));

let numbers = range(1, 10);
numbers = map(numbers, function (n) { return n * n });
numbers = reverse(numbers);
foreach(numbers, (n) => console.log(`${n} \n`));

