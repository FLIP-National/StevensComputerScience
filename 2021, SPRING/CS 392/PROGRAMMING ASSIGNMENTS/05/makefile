###############################################################################
# Author: Jack Schneiderhan and Cindy Zhang
# Date: April 11th 2021
# Pledge: I pledge my honor that I have abided by the Stevens Honor System
# Description: Makefile for minishell.c, shell.c and shell.h
###############################################################################

minishell: minishell.o shell.o
		gcc minishell.o shell.o -o minishell
minishell.o: minishell.c
		gcc -Wall -Werror -pedantic-errors -c minishell.c
shell.o: shell.c shell.h
		gcc -Wall -Werror -pedantic-errors -c shell.c
clean:
		rm -f *.o minishell minishell.exe