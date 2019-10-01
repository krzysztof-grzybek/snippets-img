const IDENTITY       = x => x;

const TRUE    = t => f => t;
const AND     = p => q => p(q)(p);
const NOT     = c => c(FALSE)(TRUE);
const IF_ELSE = c => t => f => c(t)(f)();

const SUCCESSOR      = n => f => x => f(n(f)(x));
const PREDECESSOR    = n => f => x => n(g => h => h(g(f)))(_ => x)(u => u);
const ADDITION       = m => n => n(SUCCESSOR)(m);
const SUBTRACTION    = m => n => n(PREDECESSOR)(m);
const MULTIPLICATION = m => n => f => m(n(f));

const IS_ZERO               = n => n(_ => FALSE)(TRUE);
const IS_LESS_THAN          = m => n => NOT(IS_LESS_THAN_EQUAL(n)(m));
const IS_LESS_THAN_EQUAL    = m => n => IS_ZERO(SUBTRACTION(m)(n));
const IS_EQUAL              = m => n => AND(IS_LESS_THAN_EQUAL(m)(n))(IS_LESS_THAN_EQUAL(n)(m));

const $zero  = f => IDENTITY;
const $one   = SUCCESSOR($zero);
const $two   = SUCCESSOR($one);
const $three = SUCCESSOR($two);
const $four  = MULTIPLICATION($two)($two);

const SUCCESS = () => console.log('GREAT SUCCESS!!!');
const FAIL = () => console.log('HUGE FAIL...');


// GREAT SUCCESSS X3 !!!
IF_ELSE(IS_EQUAL(SUCCESSOR($one))(ADDITION($one)($one)))
  (SUCCESS)
  (FAIL);

IF_ELSE(IS_EQUAL($zero)(SUBTRACTION($one)($one)))
  (SUCCESS)
  (FAIL);

IF_ELSE(IS_EQUAL($four)(MULTIPLICATION($two)($two)))
  (SUCCESS)
  (FAIL);
