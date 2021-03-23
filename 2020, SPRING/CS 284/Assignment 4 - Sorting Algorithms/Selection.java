// Cindy Zhang
// I pledge my honor that I have abided by the Stevens Honor System.

package AssignmentFour;
	/* Simply Explained Selection Sort:
	 * 
	 * 1. Select the lowest value of the array:
	 * 
	 * 2. Swap it with the value at the beginning
	 * 
	 * 3. Add one to your counter.
	 * 
	 * 4. Start at your counter number.
	 * 
	 * 5. Repeat steps but your counter is the beginning now.
	 * 
	 * 6. End when counter is equal to the length -1.
	 * 
	 */
public class Selection {
	public static int swaps = 0;

	@SuppressWarnings("unchecked")
	public static void sort(@SuppressWarnings("rawtypes") Comparable [] a) {
		int length = a.length;
		swaps = 0;
		
		
		for(int left = 0; left < length; left ++) {
			int lowest = left;
			for(int right = left + 1; right < length; right++) {
				if(a[right].compareTo(a[lowest]) == 1) {
					lowest = right; 
				}
			}
			swap(a, left, lowest);
			swaps++;
		}
		
	}
	
	public static void swap(@SuppressWarnings("rawtypes") Comparable[] a, int left, int right) {
		@SuppressWarnings("rawtypes")
		Comparable temp = a[left];
		a[left] = a[right];
		a[right] = temp;
	}
}