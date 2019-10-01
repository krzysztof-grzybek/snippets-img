const TRUE = t => f => t;
const FALSE = t => f => f;
const IF_ELSE = c => t => f => c(t)(f)();

const SMILE = () => console.log(':)');
const CRY = () => console.log(';(');

IF_ELSE(TRUE)
(SMILE)
(CRY); // :)

IF_ELSE(FALSE)
(SMILE)
(CRY); // ;(
