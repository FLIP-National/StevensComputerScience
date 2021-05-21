/*******************************************************************************
 * Name        : lab2.c
 * Author      : Cindy Zhang
 * Date        : 02/19/2021
 * Description : Practice with pointers and strings.
 * Pledge : I pledge my honor that I have abided by the Stevens Honor System.
 ******************************************************************************/
#include <stdio.h>
#include <stdlib.h>
#define BUFLEN 128

size_t my_strlen(char *src);
char *my_strcpy(char *dst, char *src);

int main() {
    char src[BUFLEN];
    src[0] = '\0';

    printf("Enter a string: ");

    if (scanf("%[^\n]", src) < 0) {
        fprintf(stderr, "Error: Failed to get a string from standard in.\n");
        return EXIT_FAILURE;
    }
    /* 1. Using malloc, allocate enough space in 'copy' to fit 'src'.
          (man 3 malloc) */
    char* copy = malloc(my_strlen(src));
    free(copy);

    my_strlen(NULL);
    if (my_strcpy(copy, NULL)) {
    	free(copy);
        fprintf(stderr, "Error: This line should not have executed!\n");
    }

    /* 2. Call my_strcpy to make a copy of src, stored in copy. */
    copy = my_strcpy(copy, src);
    /*
     * 3. Print out the following, matching the format verbatim:
     * Duplicated string: some_string
     * Length: some_length
     */

    printf("Duplicated string: %s\n", copy);
    printf("Length: %li\n", my_strlen(copy));

    /* 
     * 4. Deallocate (free) any memory allocated with malloc/calloc/realloc/etc.
     */

    free(copy);


    return EXIT_SUCCESS;
}

size_t my_strlen(char *src) {
	if(src == NULL){
		return 0;
	}
    const char *s;
    size_t size = 0;
    for(s = src; *s != '\0'; s++){
    	size++;
    }
    return size;
}

char *my_strcpy(char *dst, char *src) {
	if(src == NULL){
		return NULL;
	}
	size_t len = my_strlen(src) + 1;
	dst = (char * )malloc(len * sizeof(char));
	if(dst == NULL){
		return NULL;
	}

	char *csrc = (char *)src;
	char *cdst = (char *)dst;

	for(size_t i = 0; i < len; i++){
		cdst[i] = csrc[i];
	}

	return cdst;
}
