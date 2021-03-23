# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Name     : Cindy Zhang
# Pledge   : I pledge my honor that I have abided by the Stevens Honor System
# Purpose  : Write recursive fibonacci function.
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

from importlib import reload as Rfrsh
import hmmm

# Fibonacci! You've already done it in Lab 9
# Now however, you are to do hmmmonacci with
# recursion, & you MUST do so for any credit
# The tests are still the same as from Lab 9
# Tests: f(2) = 1 ■■■ f(5) = 5 ■■■ f(9) = 34
RecFibSeq = """      # You may not need all lines
00 read r1           # gets the counter
01 setn r15 42       # this is a stack point
02 calln r14 05      # r14 = 3
03 write r11         # r13 is the final value
04 halt

# BASE CASES

05 jeqzn r1 17       # if the input is equal to zero
06 setn r13 1
07 jgtzn r1 09       # if not then jump to 9
08 jumpr r14         # jumps to 02 but the one after

# RECURSIVE CASES

09 pushr r1 r15      # pushes the value r1 to r15
10 pushr r14 r15     # pushes the value r14 to r15
11 addn r1 -1        # subtracts one from the counter
12 add r12 r11 r13   # adds r12 = r(11+13)
13 copy r11 r13      # r11 = r13
14 copy r13 r12      # r13 = r13
15 calln r14 07      # r14 = 16 and jumps to 7
16 popr r14 r15      # 
17 popr r1 r15
18 jumpr r14
"""

# Change doDebug to false to turn off debugs
runThis = RecFibSeq
doDebug = False


# Note: main() in the shell to easily reload
def main(runArg=runThis,  debugArg=doDebug):
    Rfrsh(hmmm); hmmm.main(runArg, debugArg)

if __name__ == "__main__" :
    main()
