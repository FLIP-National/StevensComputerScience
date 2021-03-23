// Cindy Zhang
// I pledge my honor that I have abided by the Stevens Honor System.

package AssignmentFour;

	/* Simply Explain Shell Sort:
	 * 
	 * 1. Start with the middle point also known as arr[n/2], where n is the length
	 * 
	 * 2. Then Insertion Sort Basically!
	 * 
	 */

public class Shell {
	public static int swaps;
	public static void sort(@SuppressWarnings("rawtypes") Comparable [] a) {
		int length = a.length;
		swaps = 0;
		
		int holder = 1;
		while(holder < length) {
			holder = (3 * holder) + 1;
		}
		while(holder >= 1) {
			for(int i = holder; i < length; i++) {
				for(int j = i; j >= holder && lessThan(a[j], a[j-holder]); j-=holder) {
					swap(a, j, j-holder);
					swaps++;
				}
			}
			
			holder = holder/3;
		}
	}
	
	@SuppressWarnings("unchecked")
	public static boolean lessThan(@SuppressWarnings("rawtypes") Comparable x, @SuppressWarnings("rawtypes") Comparable y) {
		return (x.compareTo(y) == 1);
	}
	
	public static void swap(@SuppressWarnings("rawtypes") Comparable[] a, int i, int j) {
		@SuppressWarnings("rawtypes")
		Comparable temp = a[i];
		a[i] = a[j];
		a[j] = temp;
	}
}