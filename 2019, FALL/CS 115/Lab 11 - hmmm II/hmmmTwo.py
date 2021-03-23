# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Name     : Cindy Zhang
# Pledge   : I pledge my honor that I have abided by the Stevens Honor System
# Purpose  : Write recursive hmmm functions.
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# Power:
#  - Write a RECURSIVE hmmm function that gets two numbers,
#   then prints (No.1 ^ No.2).
#  - Assumptions: No.1 is any integer, No.2 ≥ 0
#  - 0 ^ 0 can either be 0 or 1.
#  - Your function MUST be recursive.
#   No points will be given for solutions that
#   do not use the hmmm recursive/stack structure
#   See week9.pdf for more insight into that.
Power = """
00 read r1
01 read r2
02 setn r15 42
03 calln r14 06
04 write r13
05 halt

# BASE CASES

06 jgtzn r2 09
07 setn r13 1
08 jumpr r14

# RECURSIVE CASES

09 pushr r2 r15
10 pushr r14 r15
11 addn r2 -1
12 calln r14 06
13 popr r14 r15
14 popr r2 r15
15 mul r13 r1 r13
16 jumpr r14

"""



# ~~~~~ Running ~~~~~~
import hmmm
import importlib

runThis = Power  # Change to the function you want to run
doDebug = False # Change to turn debug mode on/off

# call main() from the command line to run the program again
def main(runArg = runThis, debugArg = doDebug):
    importlib.reload(hmmm)
    hmmm.main(runArg, debugArg)

if __name__ == "__main__" : 
    main()
