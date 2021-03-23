# Name   : Cindy Zhang
# Pledge : I pledge my honor that I have abided by the Stevens Honor System.   
#-----------------------------------------------------------------------------
import random
POINTS_TO_WIN = 100
AI_ROUND_TARGET = 20

#---------------------------main game material---------------------------------

def main():
  welcome()
  while True:
    # Extra Credit: Choose whether or not to AI for each game, and do the rest.
    Computer = False
    Computer = ComputerIntelligence()
    playGame(Computer)
    if not wantsPlayAgain():
      print('Bye!')
      return
#--------------------------------Test if the user wants a computer opponent------------------------------------

def ComputerIntelligence():
  CS = input("Would you like to play aginst an opponent?(Player 2 is going to be replace by an AI) Y for yes and N for no ")
  if( CS =="N"):
    return False
  elif(CS =="Y"):
    return True
  else:
    print("User invalid input, assume no computer opponent")
    return False
#--------------------------------swap turns------------------------------------
  
def otherplayer(player):
    if player==1:
      return 2
    else:
      return 1

#----------------one game, two players, prints scores for players--------------
   
def playGame(Computer):
  player = 1
  scores = initScores()
  while not gameOver(scores):
    print()
    print('Current Scores:')
    printScore(scores)
    getMove(scores, player,Computer)
    player = otherplayer(player)

#--------------------------------sets score to zero----------------------------

def initScores():
  return ['scores',0,0]

#-----see if anyone reached the max points, then game over, if not, game on----

def gameOver(scores):
  if scores[1]>=POINTS_TO_WIN:
    printWinMessage(1, scores)
    return True
  elif scores[2]>=POINTS_TO_WIN:
    printWinMessage(2, scores)
    return True
  return False

#---gets player's move, prints round+overall score, ask if they want to cont.---
  
def getMove(scores, player,Computer):
  printPlayerMessage(player)
  roundScore = 0
  while True:
    printCurrentPlayerScore(scores, player, roundScore)
    if(not wantsRollAgain(player,Computer,roundScore)):
      printScore(scores)
      break
    roll = rollDice()
    showRoll(roll)
    rollsum = sum(roll)
    if roll.count(1)==4:
      print("Rolled four 1s... Game over")
      printWinMessage(otherplayer(player),scores)
      wantsPlayAgain()
      break
    elif roll.count(1)==3:
      print("Rolled three 1s. Score reset!")
      scores[player]=0
      printScore(scores)
      break
    elif roll.count(1)==2:
      print("Rolled two 1s! Round ended, no score added")
      rollsum = 0
      printScore(scores)
      break
    elif roll.count(1)==1:
      print("Rolled one 1! Round ended, score added")
      roundScore=roundScore+rollsum
      break
    else:
      roundScore +=rollsum
      
  scores[player] = scores[player] + roundScore    
  return printCurrentPlayerScore(scores, player, roundScore)

#-------------------------------aha rolling a die--------------------------------

def rollDie():
  return random.randint(1,6)

#------------getting four rolls and put em in a list-----------------------------

def rollDice():
  return [rollDie(), rollDie(), rollDie(), rollDie()]
   
#-------------------------checking if we want to [X] again----------------------
#------------------------------yes or no to continue----------------------------
def wantsContinue(response):
  ans = input(response)
  if ans == "Y" or ans == "N":
    return ans
  wantsContinue()
#-----------------------------yes or no to play again---------------------------

def wantsPlayAgain():
  return wantsContinue()

#-------------------------yes or no to roll again-------------------------------

def wantsRollAgain(player,Computer,roundScore):
  '''For Part 2, also handle the Computer's decision'''
  if Computer &(player==2):
    if(roundScore >= AI_ROUND_TARGET):
      return False
    else:
      return True
  if wantsContinue('Would you like to roll? Y for yes, N for no: ')=="Y":
    return True
  return False

    

#--------------------------------------------------------------------------------   
#                               Printing Things                                 |
#--------------------------------------------------------------------------------

def welcome():
  print('Welcome to Pig!')
  '''print("                                           )\   /|")
  print("                                        .-/'-|_/ |")
  print("                     __            __,-' (   / \/")          
  print("                 .-'"  "'-..__,-'""                -o.`-._")   
  print("                /                                   '/")
  print("        *--._ ./                                 _.-- ")
  print("              |                              _.-' ")
  print("              :                           .-/")   
  print("               \                       )_ /")
  print("                \                _)   / \(")
  print("                  `.   /-.___.---'(  /   \\")
  print("                   (  /   \\       \(     L\ ")
  print("                    \(     L\       \\")
  print("                     \\              \\")
  print("                      L\              L\ ")'''
                        
  
def printScore(scores):
  '''prints the current game score for each player'''
  print('Player 1: ' + str(scores[1]) + '& Player 2: ' + str(scores[2]))

def printWinMessage(winningPlayer, scores):
  print()
  print('***********************Player ' + str(winningPlayer) + ' Won!************************')
  print('***********************Final Score:*************************')
  printScore(scores)

def showRoll(roll):
  print('Roll: ' + str(roll))

def printPlayerMessage(player):
  print()
  print('--------------------------------------------------------------')
  print('-------------------Player ' + str(player) + '\'s turn----------------------------')
  print('--------------------------------------------------------------')
  print()

def printCurrentPlayerScore(scores, player, roundScore):
  print('Player '+str(player)+' has a round score of '+str(roundScore)+' and an overall score of '+str(scores[player]))

if __name__ == '__main__':
  main()



'''
4-Dice Pig (Acknowledgements)
Adapted from Java to Python by Justin Barish,  11/2018
Modified nov '19 by Toby Dalton
~ ~ ~
To exercise your looping ability, we're going to be filling in a bunch
of blanks. yay! Pig is a game where players take turns rolling dice.
Traditionally, it's only 2, but this is a variant.
The goal is to have their total score reach a certain # of points.
Players take turns earning points by rolling dice.
Each roll adds that sum onto a round score, which my or may not be added
to their total score, dictated as below:
A person's turn lasts until they want to stop rolling or roll some 1s.
1. If at any point during the player's turn they roll one 1:
their round ends and their round score is added to their total score.
2. If they roll two 1s:
they lose all points for the round, and their turn is over.
3. Three 1s:
they lose all of their points in the game, and their turn is over.
4. If they recieve the luck of four 1s (four-eyed snake ::S):
they immediately lose the game.
Whenever the player decide to stop their turn, their round points are 
added to their total points.
When a player's total points reach 100 (controllable below), they win.
------------------------------------------------------------------------------
This Homework has 2 parts:

Part 1 (100 pts): Complete the game for two human players.
That is, fill in all of the methods below

Part 2 (15 pts Extra Credit):
Add in an "AI" as the second player, so you will play against the computer.
The AI takes the place of player 2, and will continue rolling until
it reaches its AI_ROUND_TARGET. NOTE: You *will* need to change some of the
function paramaters (I.E. pass in additional values) and other parts of
functions.
'''



  
