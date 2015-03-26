var n = 600851475143;

var rt = Math.sqrt(n);

var i = 1, prime = 0;

var isPrime = function(number)
{
    var j = 2, k = Math.sqrt(number);
    while (j < k)
    {
        if (number % j === 0)
        {
            return false;
        }
        j++;
    }
    return true;
};



while (i < rt)
{
    if (n % i === 0)
    {
        if (isPrime(i))
        {
            prime = i;
        }
    }
    i++;
}

console.log(prime);

