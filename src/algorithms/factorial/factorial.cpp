#include <iostream>
using namespace std;

int main()
{
    unsigned int n = 1000;
    unsigned long long factorial = 1;

    for(int i = 1; i <=n; ++i)
    {
        factorial *= i;
    }

    cout << "Factorial of " << n << " = " << factorial;
    return 0;
}