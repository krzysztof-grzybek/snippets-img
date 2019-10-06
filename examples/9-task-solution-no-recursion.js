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

const list = a => b => f => f(a)(b);
const first = l => l(a => b => a);
const second = l => l(a => b => b);
const Y = f => (x => f(y => (x(x))(y)))(x => f(y => (x(x))(y)));

const range = from => to => Y(f => from => from <= to ? list(from)(f(from + 1)) : null)(from);
const foreach = l => g => Y(f => l => l !== null && (g(first(l)), f(second(l))))(l);
const map = l => g => Y(f => l => l !== null ? list(g(first(l)))(f(second(l))) : l)(l);
const reverse = l => Y(f => l => parent =>
  second(l) === null
    ? list(first(l))(parent)
    : f(second(l))(list(first(l))(parent)))(l)(null);

let numbers = range(1)(10);
numbers = map(numbers)(n => n * n);
numbers = reverse(numbers);
foreach(numbers)(console.log);

