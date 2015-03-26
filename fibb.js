var fibb = 1, prev = 0, curr = 1, sum = 0;

while (fibb < 4000000)
{
    prev = curr;
    curr = fibb;
    fibb = prev + curr;
    
    if (fibb % 2 === 0)
    {
        sum += fibb;
    }
}

console.log(sum);