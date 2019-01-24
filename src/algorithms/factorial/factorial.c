#include <stdio.h>
int main()
{
    int i;
    int n = 1000;
    unsigned long long factorial = 1;

    for(i=1; i<=n; ++i)
    {
        factorial *= i;              // factorial = factorial*i;
    }

    printf("Factorial of %d = %llu", n, factorial);
    return 0;
}