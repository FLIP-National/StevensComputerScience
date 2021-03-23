/*******************************************************************************
 * Name        : stairclimber.cpp
 * Author      : Cindy Zhang
 * Date        : 09/30/2020
 * Description : Lists the number of ways to climb n stairs.
 * Pledge      : I pledge my honor that I have abided by the Stevens Honor System.
 ******************************************************************************/
#include <iostream>
#include <vector>
#include <algorithm>
#include <sstream>
#include <iomanip>
#include <ctype.h>

using namespace std;

vector< vector<int> > get_ways(int num_stairs) {
	vector<vector<int>> ways;										// initialize a vector of vectors.
	if(num_stairs <= 0){											// if there are no more stairs.
		ways.push_back(vector<int>());								// push an empty vector of ints
	}
	else{
		for(int i = 1; i < 4; i++){
			if(num_stairs >= i){											// if there are stairs
				vector<vector<int>> result = get_ways(num_stairs - i);		// make another vector of vectors
				for(size_t j = 0; j < result.size(); ++j){					// and have it recurse.
					auto it = result[j].begin();							// initialize an iterator at the beginning
					result[j].insert(it, i);								// insert at the beginning
					ways.push_back(result[j]);								// push the results into ways.
				}
			}
		}
	}
	return ways;
}

int digit(int num) { //returns how many digits are in int num
	int counter = 0;
	while (num != 0){
		num /= 10;
		counter++;
	}

	return counter;
}

void display_ways(const vector< vector<int> > &ways, int stairs) {
	if(stairs == 1){
		cout << "1 way to climb 1 stair." << endl;  // base case
	}
	else{
		cout << ways.size() << " ways to climb " << stairs << " stairs." << endl; // other print out statements.
	}

	int width = digit(ways.size());						// find the number of digits the most ways have
	for(size_t i = 0; i < ways.size(); ++i){
		cout << setw(width) << i+1 << ". [";			// set width to the number of the max way's digits
		for(size_t j = 0; j < ways[i].size()-1; ++j){	// for the all value except the last one print the value
			cout << ways[i][j] << ", ";
		}
		cout << ways[i][ways[i].size()-1] << "]" << endl; // print last value
	}
}


int main(int argc, char * const argv[]) {
	if(argc != 2){
		cerr << "Usage: ./stairclimber <number of stairs>" << endl;
		return 1;
	}

	istringstream input;
	int stairs;
	input.str(argv[1]);

	if(!(input >> stairs) || stairs < 1) {
		cerr << "Error: Number of stairs must be a positive integer." << endl;
		return 1;
	}

	vector<vector<int>> ways = get_ways(stairs);
	display_ways(ways, stairs);

	return 0;
}
