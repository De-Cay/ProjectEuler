var sum = 0;
var minuend = 0;

for (var i = 3; i < 1000; i++)
{
    if (i % 3 === 0)
    {
        sum += i;
    }
    
    if (i % 5 === 0)
    {
        sum += i;
    }
    
    if (i % 15 === 0)
    {
        minuend += i;
    }
}

console.log (sum -= minuend);