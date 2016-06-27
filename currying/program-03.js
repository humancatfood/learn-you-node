module.exports = unary;

function unary (argA)
{
  return function (argB) {
    return argA + argB;
  };
}
