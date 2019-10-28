const Z = f => (x => f(y => (x(x))(y)))(x => f(y => (x(x))(y)));

const COUNTDOWN = Z(f => i => i >= 0 && (console.log(i), f(i - 1)));
COUNTDOWN(10);
