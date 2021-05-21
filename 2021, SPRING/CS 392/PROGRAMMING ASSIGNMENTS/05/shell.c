/*******************************************************************************
 * Name        : shell.c
 * Author      : Jack Schneiderhan and Cindy Zhang
 * Date        : April 11th 2021
 * Pledge      : I pledge my honor that I have abided by the Stevens Honor System.
 ******************************************************************************/

#include <ctype.h>
#include <dirent.h>
#include <errno.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <unistd.h>
#include <wait.h>
#include "shell.h"

int parseArgs(char* input, char** argv){
	input[strlen(input)-1] = '\0';

	char *token = strtok(input, " ");
	int counter = 0;

	while(token != NULL){
		argv[counter] = token;
		token = strtok(NULL, " ");
		counter++;
	}
	argv[counter] = NULL;
	return counter;
}
/*
void validDirectory(char** argv){
	int counter = 0, iter = 0;
	if(argv[1] == '"'){
		printf("quote found");
	}

	char* newdir[]
}
*/
