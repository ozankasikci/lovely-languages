def factorial(x):
    result = 1
    for i in xrange(2, x + 1):
        result *= i
    return result

factorial(1000)