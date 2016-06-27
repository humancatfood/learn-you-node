module.exports = curry;

function curry (arg)
{
  var result = arg;
  return inner;

  function inner (innerArg) {
    if (innerArg === undefined)
    {
      return result;
    }
    else
    {
      result += innerArg;
      return inner;
    }
  }
}
