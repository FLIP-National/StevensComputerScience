#Cindy Zhang 09/05/2019 I pledge my honor that I have abided by the Stevens Honor System

from functools import reduce

def gauss(N):
    def add(x,y):
        return x+y;
    return reduce(add, list(range(N+1)))

def sumOfSquares(N):
    def square(x):
        return x*x;
    def add(x,y):
        return x+y;
    return reduce(add, list(map(square, range(N+1))))

def longestWord(s):
    return reduce(max, list(s))
