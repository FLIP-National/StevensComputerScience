############################################################
#
#   Cindy Zhang
#
#   CS115-B/C HW1 ~ Applications of Map & Reduce
#
#   Due : Sep. 20th, 2019
#
#   Pledge: I pledge my honor that I have abided by the Stevens Honor System.
#
############################################################

from functools import reduce
from math import factorial, sqrt

############################################################

'''the suitable docstring'''
def taylorApproxE(lastIter):  #this will add factorials of x
    return reduce(lambda x, y: x + y, \
                  list(map(lambda x: 1/factorial(x), list(range(lastIter + 1)))))

def vectorNorm(vect1): #sqr x then add all x's then sqrt x
    def sqr(x):
        return x*x
    return sqrt(reduce(lambda x,y: x + y, list(map(sqr, vect1))))

def arithMean(vect1):
    #take all values then divides by amount of values
    return (reduce(lambda x,y: x+y, vect1))/len(vect1)

    
    
