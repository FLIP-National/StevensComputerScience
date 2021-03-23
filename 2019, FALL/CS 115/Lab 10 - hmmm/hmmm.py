# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Name    : Cindy Zhang 
# Pledge  : I pledge my honor that I have abided by the Stevens Honor System.
# Purpose : Write Max, Power, and Fibonacci in an assembly.
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# Max:
#  Write a hmmm function that gets two numbers,
#   then prints the larger of the two.
#  Assumptions: Both inputs are any integers
Max = """
00 read r1          # get # from user to r1
01 read r2          # get # from user to r2
02 sub r3 r1 r2     # assign r3 = r1 - r2
03 sub r4 r2 r1     # assign r4 = r2 * r1
04 jeqzn r3 04      # if r3 == 0, jumps to line 4
05 jltzn r3 06      # if r3 is less than zero (r1<r2) jumps 06
06 jltzn r4 08      # if r4 is less than zero (r2>r1) jumps 08
07 write r2         # prints out r2 because it's greater
08 jumpn 09         # jumps to the last number
09 write r1         # prints out r1 because it's greater
10 halt             # stop.
"""


# Power:
#  Write a hmmm function that gets two numbers,
#   then prints (No.1 ^ No.2).
#  Assumptions: No.1 is any integer, No.2 ≥ 0
Power = """
00 read r1         # get # from user to r1
01 read r2         # get # from user to r2
02 mul r3 r1 r1    # multiple r1 by r1 put it in r3
03 addn r2 -1      # sub 1 from r2
04 jnezn r2 02     # jump back to 2 if r2 doesnt equal zero
05 write r3        # prints answer
06 halt            # stop.
"""


# Fibonacci
#  Write a hmmm function that gets one numner,
#   then prints the No.1st fibonacci number.
#  Assumptions: No.1 ≥ 0
#  Hint: You really don't want to implement
#   recursion in hmmm, try to find an
#   iterative method to compute your goal.
#  Tests: f(2) = 1
#         f(5) = 5
#         f(9) = 34
Fibonacci = """
00 read r1        # get the counter
01 jeqzn r1 08    # jump to 7
02 addn r3 1      # add this
03 add r4 r2 r3   # add r2 to r3 and keeps it in r4
04 copy r2 r3     # set r2 to r3
05 copy r3 r4     # set r3 to r4
06 addn r1 -1     # sub from counter
07 jnezn r1 02    # jumps to 02 if its not zero
08 write r2       # prints answer
09 halt           # stop.
"""


# ~~~~~ Running ~~~~~~
import hmmm
import importlib

runThis = Fibonacci # Change to the function you want to run
doDebug = False # Change to turn debug mode on/off

# call main() from the command line to run the program again
def main(runArg = runThis, debugArg = doDebug):
    importlib.reload(hmmm)
    hmmm.main(runArg, debugArg)

if __name__ == "__main__" : 
    main()


