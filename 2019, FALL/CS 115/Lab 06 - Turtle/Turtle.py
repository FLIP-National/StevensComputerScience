#
#
# Cindy Zhang
#
# turtle
#
# September 27 2019
#
# I pledge my honor that I have abided by the Stevens Honor System
#
#


import turtle

def svTree(trunkLength,depth):
    if depth ==0:
        return 
    else:
        #draw the original trunk
        turtle.forward(trunkLength)

        #turn a lil 
        turtle.left(20)

        #recur w/ smaller subtree
        svTree(trunkLength/2, depth-1)

        #turn the otherway
        turtle.right(40)

        #recur again
        svTree(trunkLength/2,depth-1)

        #turn/backward
        turtle.left(20)
        turtle.backward(trunkLength)


svTree(100,8)
