// Cindy Zhang
// I pledge my honor that I have abided by the Stevens Honor System.

package AssignmentFour;

	/* Simply Explained Insertion Sort:
	 * 
	 * 1. Select your first element and declare it is 'sorted'
	 * 
	 * 2. Move to the next element and find a spot for it in the sorted array.
	 * 
	 * 3. Reallocate the elements to move the rest of the elements in that spot
	 * 
	 * 4. Increase the Counter by One
	 * 
	 * 4. Repeat until Counter is equal to the length subtracted by 1.
	 * 
	 */


public class Insertion {
	public static int swaps = 0;
	
	@SuppressWarnings("unchecked")
	public static void sort(@SuppressWarnings("rawtypes") Comparable [] a) {
		int length = a.length;
		swaps = 0;
		
		for(int i = 0; i < length; i++) {
			for(int j = i; j > 0; j--) {
				if(a[j].compareTo(a[j-1]) == 1) {
					swap(a, j, j-1);
					swaps++;
				}
				else {
					break;
				}
			}
		}
	}
	
	public static void swap(@SuppressWarnings("rawtypes") Comparable[] a, int i, int j) {
		@SuppressWarnings("rawtypes")
		Comparable temp = a[i];
		a[i] = a[j];
		a[j] = temp;
	}
	
	
}

