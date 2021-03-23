// Cindy Zhang
// I pledge my honor that I have abided by the Stevens Honor System.

package AssignmentFour;

	/* Simply Explained Bubble Sort:
	 * 
	 * 1. Transverse through array, compares the elements next to eachother.
	 * 
	 * 2. Set Left element to arr[i].
	 * 
	 * 3. Set Right element to arr[j].
	 * 
	 * 4. If right element is less than left then swap, if not do nothing.
	 * 
	 * 5. Repeat but limit right value each time. 
	 * 		a. for example: if length is 9, allow j to go to 7
	 * 
	 * 6. End when Right element and Limit is at 1.
	 * 
	 */


public class Bubble {
	public static int swaps = 0;
	
	@SuppressWarnings("unchecked")
	public static void sort(@SuppressWarnings("rawtypes") Comparable [] a) {
		int limit = a.length-1;
		
		for(int right = 0; right < limit; right++) {
			for(int left = 0; left < (limit-right); left++) {
				if(a[left].compareTo(a[left+1]) == -1) {
					
					//swap the left and right values
					@SuppressWarnings("rawtypes")
					Comparable temp = a[left];
					a[left] = a[left+1];
					a[left+1] = temp;
					
					swaps++;
				}
			}
		}
	}
}