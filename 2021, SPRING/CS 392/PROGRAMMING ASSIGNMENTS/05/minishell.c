/***
 * Name          : minishell.c
 * Author        : Jack Schneiderhan and Cindy Zhang
 * Pledge        : I pledge my honor that I have abided by the Stevens Honor System.
 * Date          : April 11 2021
 * Description   : Write basic shell program in C with a few built-in commands.
 **/

#include <signal.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include <getopt.h>
#include <pwd.h>
#include <string.h>
#include <sys/stat.h>
#include <dirent.h>
#include <unistd.h>
#include <wait.h>
#include "shell.h"

#define BRIGHTBLUE "\x1b[34;1m"
#define DEFAULT    "\x1b[0m"
#define BUFSIZE	   256
#define LISTSIZE   100

volatile sig_atomic_t signal_val = 0;

void catch_signal(int sig) {
	signal_val = sig;
}

int main(){
	/*
	 * 	num_commands   : number of commands in this assignment
	 * 	inputString    : string of the user input.
	 * 	pathToMiniShell: string of the path to this c program.
	 * 	argv		   : array of strings of the inputString
	 *
	 */

	char pathToMiniShell[PATH_MAX];
	int argc = 0;

	struct sigaction action;
	memset(&action, 0, sizeof(struct sigaction));
	action.sa_handler = catch_signal;

	if (sigaction(SIGINT, &action, NULL) == -1) {
		fprintf(stderr, "Error: Cannot register signal handler. %s.\n",
				strerror(errno));
		return EXIT_FAILURE;
	}

	while(1){
		char *argv[LISTSIZE];
		getcwd(pathToMiniShell, sizeof(pathToMiniShell));
		if(pathToMiniShell == NULL){
			fprintf(stderr, "Error: Cannot get current working directory. %s.\n", strerror(errno));
		}
		char inputString[BUFSIZE] = "";
		printf("[%s%s%s]$ ", BRIGHTBLUE, pathToMiniShell, DEFAULT);
		fflush(stdout);

		//printf("im reading in something but i haven't finished?\n");
		if(read(STDIN_FILENO, inputString, sizeof(inputString)) == -1){
			if(signal_val == SIGINT){
				signal_val = 0;
				printf("\n");
				continue;
			}
			//printf("ok so like signal DID NOT(?) f up the syntax.\n");
			fprintf(stderr, "Error: Failed to read from stdin. %s.\n", strerror(errno));
			continue;
		}

		// exit base case:
		//printf("Input String: %s\n", inputString);
		if(strcmp(inputString, "exit\n") == 0){
			return EXIT_SUCCESS;
		}

		if((argc = parseArgs(inputString, argv)) == 0){
			continue;
		}

		// cd base case:
		int c;
		uid_t uid = getuid();
		struct passwd* pwd = getpwuid(uid);

		if(strcmp(argv[0], "cd") == 0){
			if(argc > 2){
				fprintf(stderr,"Error: Too many arguments to cd.\n");
				continue;
			}
			if(!pwd){
				fprintf(stderr, "Error: Cannot get passwd entry. %s.\n",
						strerror(errno));
				continue;
			}
			if(argc == 1 || strcmp(argv[1], "~") == 0){
				if((c = chdir(getenv("HOME")) == -1)) {
					fprintf(stderr, "Error: Cannot change directory to home. %s.\n",
							strerror(errno));
					continue;
				}
				continue;
			}
			else if((c = chdir(argv[1])) == -1) {
				fprintf(stderr, "Error: Cannot change directory to '%s'. %s.\n",
						argv[1], strerror(errno));
				continue;
			}
			continue;
		}
		else{
			pid_t pid;
			if((pid = fork()) < 0){
				fprintf(stderr, "Error: fork() failed. %s.\n", strerror(errno));
				continue;
			}
			else if ((pid == 0)){
				// child
				if(argc ==1){
					if(execlp(argv[0], argv[0], NULL) == -1){
						fprintf(stderr, "Error: exec() failed. %s.\n", strerror(errno));
						exit(1);
					}
				}
				//printf("im argv 1: %s\n", argv[1]);
				if(execvp(argv[0], argv) == -1){
					fprintf(stderr, "Error: exec() failed. %s.\n", strerror(errno));
					exit(1);
				}
			}
			else{
				int status;
				pid_t w = waitpid(pid, &status, 0);
				if(w == -1){
					if(signal_val == SIGINT){
						signal_val = 0;
						printf("\n");
						continue;
					}
					fprintf(stderr, "Error: wait() failed. %s.\n", strerror(errno));
				}
				continue;
			}
		}
	}
	return EXIT_SUCCESS;
}
