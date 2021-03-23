# Recursion Lab
#
# Cindy Zhang
#I pledge my honor that I have abided by the Stevens Honor System -CZ
#
# 09/12/2019

from functools import reduce


def dotProduct(L,K):
    head1, tail1 = L[0],L[1]
    head2, tail2 = K[0],K[1]

    product1 = head1 * head2
    product2 = tail1* tail2

    summ = product1 + product2

    return summ

def expand(S):

    if S == "":
        return []
    else:
        return [S[0]] + expand(S[1:])

"spam" == 'spam'

def deepMember(e,L):

    
    '''if you have an empty list'''
    if L == []:
        return False
    
    else:
        if e == L[0]:
            return True
        elif isinstance(L[0], list):
            return deepMember(e, L[0]) or deepMember(e, L[1:])
        else:
            return deepMember(e, L[1:])


def removeAll(e,L):
    '''if you have an empty list return an empty list'''
    if L == []:
        return []
    else:
        '''if e is equal to the first value of the list'''
        if e == L[0]:
            return removeAll(e, L[1:])
        return [L[0]] + removeAll(e, L[1:])

def even(X):
    if X%2 == 0: return True
    else: return False

def deepReverse(L):
    if L == []:
        return []
    elif isinstance(L[0], list):
        return deepReverse(L[1:]) + [deepReverse(L[0])]
    return deepReverse(L[1:]) + [L[0]]


