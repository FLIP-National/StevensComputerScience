/*******************************************************************************
 * Name        : unique.cpp
 * Author      : Cindy Zhang
 * Date        : 09/22/2020
 * Description : Determining uniqueness of chars with int as bit vector.
 * Pledge      : I pledge my honor that I have abided by the Stevens Honor System.
 ******************************************************************************/
#include <iostream>
#include <cctype>

using namespace std;

bool is_all_lowercase(const string &s) {
	bool lowercase = true; // instantiate lower case as a bool

	for(unsigned int i = 0; i < s.length(); ++i) { 	//interate through the string
		if(s.at(i) >= 97 && s.at(i) <= 122){ 		// char is not between 97 to 122
			lowercase = true; 						//keep true
		}
		else {
			return false; 							//otherwise false
		}
	}

	return lowercase;
}

bool all_unique_letters(const string &s) {
	bool unique = true;								// new bool

	unsigned int vector = 0;						// initializing vector
	unsigned int setter = 0;						// initializing setter

	for(unsigned int i = 0; i < s.length(); ++i){ 	// looping through the string
		setter = 1 << (s.at(1) - s.at(0));			// setting setter

		if((vector & setter) == 0){					// and vector and setter, if they
			unique = true;							// equal zero, then it doesn't repeat
			vector = vector | setter;				// and set new vector
		}
		else {
			return false;							// otherwise false
		}
	}

	return unique;

}

int main(int argc, char * const argv[]) {
	if (argc != 2) { 								// if it doesn't have 2 arguments
		cerr << "Usage: ./unique <string>" << endl; // print error
		return 1;
	}

	if (!is_all_lowercase(argv[1])) {		// if it doesn't pass lowercase print error
		cerr << "Error: String must contain only lowercase letters." << endl;
		return 1;
	}

	if (!all_unique_letters(argv[1])) {
		cout << "Duplicate letters found." << endl;	// print this if unique letters returned false
	}
	else {
		cout << "All letters are unique." << endl; // // print this if unique letters returned true
	}
}
