// Cindy Zhang
// I pledge my honor that I have abided by the Stevens Honor System.

package AssignmentFour;

	/* Simply Explained Merge Sort:
	 * 
	 * 1. 
	 * 
	 */
	
public class Merge {
	public static int swaps = 0;
	
	public static void sort(@SuppressWarnings("rawtypes") Comparable [] a) {
		swaps = 0;
		sortHelp(a, 0, a.length-1);
	}
	
	public static void sortHelp(@SuppressWarnings("rawtypes") Comparable[] a, int left, int right) {
		if (left < right) {
			int middle = (left + right)/2;
			
			sortHelp(a, left, middle);
			sortHelp(a, middle + 1, right);
			
			merge(a, left, right, middle);
		}
	}
	
	@SuppressWarnings("unchecked")
	public static void merge(@SuppressWarnings("rawtypes") Comparable [] a, int left, int right, int middle) {
		
		// length of new arrays
		int lengthone = middle - left + 1;
		int lengthtwo = right - middle;
		
		// temporary arrays:
		@SuppressWarnings("rawtypes")
		Comparable [] L = new Comparable [lengthone];
		@SuppressWarnings("rawtypes")
		Comparable [] R = new Comparable [lengthtwo];
		
		// copying data to temp arrays:
		for(int i = 0; i < lengthone; i++) {
			L[i] = a[left + i];
		}
		
		for(int j = 0; j < lengthtwo; j++) {
			R[j] = a[middle + 1 + j];
		}
		
		// value holders:
		int i = 0;
		int j = 0;
		int k = left;
		
		// merging temp arrays
		while(i < lengthone && j < lengthtwo) {
			
			if(L[i].compareTo(R[j]) == 1) {
				a[k] = L[i];
				i++;
			}
			else {
				a[k] = R[j];
				j++;
			}
			k++;
			swaps++;
		}
		
		// copy rest of data:
		while(i < lengthone) {
			a[k] = L[i];
			i++;
			k++;
			swaps++;
		}
		
		while(j<lengthtwo) {
			a[k] = R[j];
			j++;
			k++;
			swaps++;
		}
	}
}