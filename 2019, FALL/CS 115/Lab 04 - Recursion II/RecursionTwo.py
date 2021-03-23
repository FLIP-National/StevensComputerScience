##############################################################################
#
#   Cindy Zhang
#
#   CS115-B/C LAB 4
#
#   Due : September 19, 2019
#
#   Pledge: I pledge my honor that I have abided by the Stevens Honor System
#
#############################################################################

coincount = 0

def change(amount, coins):
    '''base cases of amount'''
    if amount <= 0 : return 0
    '''base cases of coins'''
    if coins == []: return float("inf")
    '''if you have more amount in the first coin'''
    if coins[0] > amount: return change(amount, coins[1:])
    '''create two variable one called useit and loseit'''

    '''this uses the coin and maybe will use it again'''
    useit = change(amount - coins[0], coins) + 1
    '''this does not use the coin and removes it'''
    loseit = change(amount, coins[1:])

    '''returns the least amounts of coins'''
    return min(useit, loseit)


        
        
    
