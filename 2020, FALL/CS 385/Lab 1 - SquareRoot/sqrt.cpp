/*******************************************************************************
 *         Name: sqrt.cpp
 *       Author: Cindy Zhang
 *      Version: 1.0
 *         Date: September 2nd, 2020
 *  Description: Computes the square root of two command-line arguments using newton's equation.
 *       Pledge: I pledge my honor that I have abided by the Stevens Honor System.
 ******************************************************************************/

#include <iostream>
#include <sstream>
#include <limits>
#include <iomanip>

using namespace std;

// squareroot function
double sqrt(double num, double epsilon)
{
	double last, next; //instantiating values.

	if (num == 0 || num == 1) // return num if 0 or 1
	{
		return num;
	}
	if(num < 0) // return that when its less than 0
	{
		return numeric_limits<double>::quiet_NaN();
	}

	last = num;
	next = ((last + num) / last ) / 2;


	while (abs(last - next) > epsilon) //while the difference is not
	{                                  // greater than the epsilon.
		last = next;
		next = (last + (num/last)) / 2; // test: cout << next << ", " << last << endl;
	}

	return next; // returns the last value of next
}

// main where it asks for the arguments(*argv []) and get the number of arguments. (argc)
int main(int argc, char *argv[])
{
	istringstream inputt, input; // instantiating a string
	double one;
	double two = 1e-7;

	if (argc > 3 || argc < 2) // if its less than 2 greater than three
	{
		cerr << "Usage: " << argv[0] << " <value> [epsilon]" << endl;
		return 1;
	}

	inputt.str(argv[1]); // holds first argument in inputt
	if(!(inputt >> one))
	{
		cerr << "Error: Value argument must be a double." << endl;
		return 1;
	}

	if (argc == 3) // two numbers
	{
		input.str(argv[2]); // holds second argument in inputt
		if(!(input >> two) || two <= 0)
		{
			cerr << "Error: Epsilon argument must be a positive double." << endl;
			return 1;
		}
	}
	cout << fixed << setprecision(8) << sqrt(one, two) << endl;
	return 0;
}
