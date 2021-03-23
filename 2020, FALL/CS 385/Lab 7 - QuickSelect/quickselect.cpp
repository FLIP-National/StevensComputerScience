/*******************************************************************************
 * Name          : quickselect.cpp
 * Author        : Cindy Zhang
 * Pledge        : I pledge my honor that I have abided by the Stevens Honor System.
 * Date          : 10/22/2020
 * Description   : Implements the quickselect algorithm found on page 160 in
 *                 Algorithms, 3e by Anany Levitin.
 ******************************************************************************/
#include <iostream>
#include <sstream>
#include <algorithm>
#include <vector>

using namespace std;

void swap(int &a, int &b){
	int temp = a;
	a = b;
	b = temp;
}

size_t lomuto_partition(int array[], size_t left, size_t right) {
	int p = array[left];
	size_t s = left;

	for(size_t i = left + 1; i <= right; i++){
		if(array[i] < p){
			s++;
			swap(array[s], array[i]);
		}
	}
	if(left != s){
		swap(array[left], array[s]);
	}
    return s;
}

/*
 *
 */

int quick_select(int array[], size_t left, size_t right, size_t k) {
	size_t s = lomuto_partition(array, left, right);

	if(right >= 10000){		// helps runtime
		while(true){
			if(s > (left + k - 1)){
				right = s - 1;
			}
			else{
				left = s + 1;
			}
			s = lomuto_partition(array, left, right);
			if(s == (k-1)){
			   return array[s];
			}
		}
	}

	while(true){
		if(s > (left + k - 1)){
			s = lomuto_partition(array, left, s - 1);
		}
		else{
			s = lomuto_partition(array, s + 1, right);
		}

		if(s == (k-1)){
		   return array[s];
		}
	}
}

int quick_select(int array[], const size_t length, size_t k) {
	//cout << "HELLO?" << endl;
    return quick_select(array, 0, length - 1, k);
}

int main(int argc, char *argv[]) {
    if (argc != 2) {
        cerr << "Usage: " << argv[0] << " <k>" << endl;
        return 1;
    }

    int k;
    istringstream iss;
    iss.str(argv[1]);
    if ( !(iss >> k) || k <= 0 ) {
        cerr << "Error: Invalid value '" << argv[1] << "' for k." << endl;
        return 1;
    }

    cout << "Enter sequence of integers, each followed by a space: " << flush;
    int value, index = 0;
    vector<int> values;
    string str;
    str.reserve(11);
    char c;
    iss.clear();
    while (true) {
        c = getchar();
        const bool eoln = c == '\r' || c == '\n';
        if (isspace(c) || eoln) {
            if (str.length() > 0) {
                iss.str(str);
                if (iss >> value) {
                    values.push_back(value);
                } else {
                    cerr << "Error: Non-integer value '" << str
                         << "' received at index " << index << "." << endl;
                    return 1;
                }
                iss.clear();
                ++index;
            }
            if (eoln) {
                break;
            }
            str.clear();
        } else {
            str += c;
        }
    }

    int num_values = values.size();
    if (num_values == 0) {
        cerr << "Error: Sequence of integers not received." << endl;
        return 1;
    }
    if(num_values < k && num_values == 1) {
    	cerr << "Error: Cannot find smallest element " << k
    			<< " with only " << num_values << " value." << endl;
    	return 1;
    }
    if(num_values < k) {
		cerr << "Error: Cannot find smallest element " << k
				<< " with only " << num_values << " values." << endl;
		return 1;
	}

    cout << "Smallest element " << k << ": ";

    if(num_values == 1 && k == 1){
    	cout << values[0] << endl;
    	return 0;
    }

    cout << quick_select(&values[0], values.size(), k) << endl;

    return 0;
}
