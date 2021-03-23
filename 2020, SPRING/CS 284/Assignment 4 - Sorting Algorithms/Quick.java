// Cindy Zhang
// I pledge my honor that I have abided by the Stevens Honor System.

package AssignmentFour;
import java.util.Random;


public class Quick {
	public static int swaps = 0;
	
	public static void shuffling(@SuppressWarnings("rawtypes") Comparable[] a) {
		int length = a.length;
		
		for(int i = 0; i < length; i++) {
			int random = new Random().nextInt(i+1);
			swap(a, i, random);
		}
	}

	
	public static void sort(@SuppressWarnings("rawtypes") Comparable[] a) {
		swaps = 0;
		sortHelp(a, 0, a.length -1);
	}
	
	public static void sortHelp(@SuppressWarnings("rawtypes") Comparable[] a, int low, int high) {
		if(low < high) {
			int part = partition(a, low, high);
			
			sortHelp(a, low, part - 1);
			sortHelp(a, part + 1, high);
			
		}
	}
	
	
	@SuppressWarnings("unchecked")
	public static int partition(@SuppressWarnings("rawtypes") Comparable[] a, int low, int high) {
		@SuppressWarnings("rawtypes")
		Comparable pivot = a[high];
		int i = low -1; 
		
		
		for(int j = low; j < high; j++) {
			
			if(a[j].compareTo(pivot) == 1) {
				i++;
				swap(a, i,j);
				swaps++;
			}
		}
		
		swap(a,i+1,high);
		swaps++;
		
		return i+1;
	}
	
	
	public static void swap(@SuppressWarnings("rawtypes") Comparable[] a, int i, int j) {
		@SuppressWarnings("rawtypes")
		Comparable temp = a[i];
		a[i] = a[j];
		a[j] = temp;
	}
}