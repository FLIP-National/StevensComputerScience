/*******************************************************************************
 * Name        : sieve.cpp
 * Author      : Cindy Zhang
 * Date        : 09/13/2020
 * Description : Sieve of Eratosthenes
 * Pledge      : I pledge my honor that I have abided by the Stevens Honor System.
 ******************************************************************************/
#include <cmath>
#include <iomanip>
#include <iostream>
#include <sstream>

using namespace std;

class PrimesSieve {
public:
    PrimesSieve(int limit);

    ~PrimesSieve() {
        delete [] is_prime_;
    }

    int num_primes() const {
        return num_primes_;
    }

    void display_primes() const;

private:
    // Instance variables
    bool * const is_prime_;
    const int limit_;
    int num_primes_, max_prime_;

    // Method declarations
    int count_num_primes() const;
    void sieve();
    static int num_digits(int num);
};

PrimesSieve::PrimesSieve(int limit) :
        is_prime_{new bool[limit + 1]}, limit_{limit} {
    sieve(); //runs sieve
}

void PrimesSieve::display_primes() const {
	const int max_prime_width = num_digits(max_prime_),
			  prime_per_row = 80 / (max_prime_width + 1);
	int row = 0; // number of primes in a row.

	if (num_primes_ <= prime_per_row){ // if there is only 1 row
		for (int i = 0; i < limit_ + 1; ++i) {
			if (is_prime_[i]) {
				if (i == 2) {    // two should be in
					cout << i;   // front when on one line.
				}
				else {
					cout << " " << i;
				}
			}
		}
	}
	else {
		for (int i = 0; i < limit_ + 1; ++i) {
			if (row == prime_per_row) { // number of primes reach
				cout << endl;           // the max number of primes per row
				row = 0;                // then print new line and reset row.
			}
			if (is_prime_[i]) {
				if (row == 0) {                          // if it's the first prime number
					cout << setw(max_prime_width) << i;  // you don't want an extra space
				}                                        // bc: you're not separating it
				else {
					cout << setw(max_prime_width + 1) << i; // other wise, space the number
				}
				row++; // increment the number of prime numbers
			}
		}
	}

}

int PrimesSieve::count_num_primes() const {
	int primecounter = 0;
	for (int i = 0; i < limit_ + 1; ++i) {  // goes through limit array
		if(is_prime_[i] == true) {          // increase counter when boolean
			primecounter++;                 // is true.
		}
	}
    return primecounter;
}

void PrimesSieve::sieve() {
	is_prime_[0] = false; // 0 and 1 are
	is_prime_[1] = false; // base cases

	int i = 2; // start at 2

	while (i < limit_+1){
		is_prime_[i] = true;  // make the
		i++;                  // whole array true.
	}

	i = 2; // reset i at 2
	while (i < sqrt(limit_)){
		if (is_prime_[i]){                          // iterates through
			for(int j = i*i; j <= limit_; j+=i) {   // array and marks false
				is_prime_[j] = false;               // if algorithm is true
			}
		}
		i++;
	}

	for (int j = limit_; j > 0; --j) { // starts at end of the
		if(is_prime_[j]){              // array and finds
			max_prime_ = j;            // the biggest prime
			break;                     // stops when true.
		}
	}
	num_primes_ = count_num_primes(); // finds the number of primes
}

int PrimesSieve::num_digits(int num) {
	int digitcounter = 0;
	do {
		num /= 10;        // divides by 10
		digitcounter++;   // until it hits 0
	}
	while (num != 0);
    return digitcounter;
}

int main() {
    cout << "**************************** " <<  "Sieve of Eratosthenes" <<
            " ****************************" << endl;
    cout << "Search for primes up to: ";
    string limit_str;
    cin >> limit_str;
    int limit;

    // Use stringstream for conversion. Don't forget to #include <sstream>
    istringstream iss(limit_str);

    // Check for error.
    if ( !(iss >> limit) ) {
        cerr << "Error: Input is not an integer." << endl;
        return 1;
    }
    if (limit < 2) {
        cerr << "Error: Input must be an integer >= 2." << endl;
        return 1;
    }

    PrimesSieve s(limit); // instantiates
	cout << endl << "Number of primes found: " << s.num_primes() << endl;
	cout << "Primes up to " << limit << ":" << endl;
	s.display_primes();

    return 0;
}
