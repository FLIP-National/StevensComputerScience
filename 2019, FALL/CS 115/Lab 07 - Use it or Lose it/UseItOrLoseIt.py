
'''

Name: Cindy Zhang

Date: 27 September 2019

~ CS115 HW 2 ~

RecursionPledge: I pledge my honor that I have
abided by the Stevens Honor System

'''

## Part 1 ~ Change

def makeChange(val, coins):
    if val == 0:
        return [0,[]]
    if coins == [] or val < 0:
        return [float('inf'),[]]
    if coins[0] > val:
        return makeChange(val, coins[1:])
    else:
        '''useit'''
        u = makeChange(val-coins[0], coins)

        ''' first val returns the amount of coins used'''
        c = [u[0] + 1, [coins[0]] + u[1]]

        '''lose it'''
        l = makeChange(val, coins[1:])
        
        if c[0] < l[0]:
            return c
        return l
        

## Part 2 ~ Least Common Substrings


def LCS(a, b):

    '''basecases'''
    if not (a and b):
        return ""

    '''if they equal'''
    if(a[0]==b[0]):
        return a[0] + LCS(a[1:], b[1:])

    '''length is less than'''
    if(len(LCS(a[1:],b)) < len(LCS(a,b[1:]))):
        return LCS(a,b[1:])
    else:
        return LCS(a[1:],b)

def PLCS(a, b):
    '''helper function'''
    def helpPLCS(s1, s2, index):
        if s1 =='' or s2 == '':
            return []
        elif s1[0] == s2[0]:
            return [index] + helpPLCS(s1[1:], s2[1:], index +1)
        else:
            return helpPLCS(s1[1:],s2, index + 1)
    '''common word'''
    commonSub = LCS(a,b)
    if commonSub == '':
        return[[-1], [-1]]
    
    return [helpPLCS(a,commonSub, 0)] + [helpPLCS(commonSub,b,0)]


            


