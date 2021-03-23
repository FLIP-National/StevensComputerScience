package AssignmentFour;

import java.util.Arrays;
import java.util.Random;

public class MyTest {

	public static void main(String[] args) {

		// FIRST NAMES:
		@SuppressWarnings("rawtypes")
		Comparable[] names = new Comparable[500];
		final String characters = "abcdefghijklmnopqrstuvwxyzABCDEF";
		Random r = new Random();

		for (int i = 0; i < 500; i++) {
			int length = r.nextInt(16) + 4;
			String string = "";

			for (int j = 0; j < length; j++) {
				string += characters.charAt(r.nextInt(characters.length()));
			}

			names[i] = new Firstnames(string);
		}

		// TIMING (NAMES):
		int SortType = 0;
		switch (SortType) {
		case 0:
			System.out.println("---------------SELECTION SORT------------------");
			long selectiontime1 = System.nanoTime();
			Selection.sort(names.clone());
			long selectiontime2 = System.nanoTime();
			System.out.println("Selection Sort Time: " + (selectiontime2 - selectiontime1) + "ns");
		case 1:
			System.out.println("---------------INSERTION SORT------------------");
			long insertiontime1 = System.nanoTime();
			Insertion.sort(names.clone());
			long insertiontime2 = System.nanoTime();
			System.out.println("Insertion Sort Time: " + (insertiontime2 - insertiontime1) + "ns");
		case 2:
			System.out.println("------------------BUBBLE SORT-------------------");
			long bubbletime1 = System.nanoTime();
			Bubble.sort(names.clone());
			long bubbletime2 = System.nanoTime();
			System.out.println("Bubble Sort Time: " + (bubbletime2 - bubbletime1) + "ns");
		case 3:
			System.out.println("------------------SHELL SORT--------------------");
			long shelltime1 = System.nanoTime();
			Shell.sort(names.clone());
			long shelltime2 = System.nanoTime();
			System.out.println("Shell Sort Time: " + (shelltime2 - shelltime1) + "ns");
		case 4:
			System.out.println("------------------MERGE SORT--------------------");
			long mergetime1 = System.nanoTime();
			Merge.sort(names.clone());
			long mergetime2 = System.nanoTime();
			System.out.println("Merge Sort Time: " + (mergetime2 - mergetime1) + "ns");
		case 5:
			System.out.println("------------------QUICK SORT--------------------");
			long quicktime1 = System.nanoTime();
			Quick.sort(names);
			long quicktime2 = System.nanoTime();
			System.out.println("Quick Sort Time: " + (quicktime2 - quicktime1 + "ns"));
		}

		//DATES:
		@SuppressWarnings("rawtypes") Comparable [] dates = new Comparable [500];
		for(int i = 0; i < 500; i++) { 
			int year = (int)(Math.random()*9999 + 1);
			int month = (int)(Math.random()*12 + 1); 
			int day = (int)(Math.random()*29 + 1);
			
			String thedate = String.format("%04d%02d%02d", year, month, day);
			dates[i] = new Dates(thedate); 
		}
	  
		// TIMING (DATES):
		switch (SortType) {
		case 0:
			System.out.println("---------------SELECTION SORT------------------");
			long selectiontime1 = System.nanoTime();
			Selection.sort(dates.clone());
			long selectiontime2 = System.nanoTime();
			System.out.println("Selection Sort Time: " + (selectiontime2 - selectiontime1) + "ns");
		case 1:
			System.out.println("---------------INSERTION SORT------------------");
			long insertiontime1 = System.nanoTime();
			Insertion.sort(dates.clone());
			long insertiontime2 = System.nanoTime();
			System.out.println("Insertion Sort Time: " + (insertiontime2 - insertiontime1) + "ns");
		case 2:
			System.out.println("------------------BUBBLE SORT-------------------");
			long bubbletime1 = System.nanoTime();
			Bubble.sort(dates.clone());
			long bubbletime2 = System.nanoTime();
			System.out.println("Bubble Sort Time: " + (bubbletime2 - bubbletime1) + "ns");
		case 3:
			System.out.println("------------------SHELL SORT--------------------");
			long shelltime1 = System.nanoTime();
			Shell.sort(dates.clone());
			long shelltime2 = System.nanoTime();
			System.out.println("Shell Sort Time: " + (shelltime2 - shelltime1) + "ns");
		case 4:
			System.out.println("------------------MERGE SORT--------------------");
			long mergetime1 = System.nanoTime();
			Merge.sort(dates.clone());
			long mergetime2 = System.nanoTime();
			System.out.println("Merge Sort Time: " + (mergetime2 - mergetime1) + "ns");
		case 5:
			System.out.println("------------------QUICK SORT--------------------");
			long quicktime1 = System.nanoTime();
			Quick.sort(dates);
			long quicktime2 = System.nanoTime();
			System.out.println("Quick Sort Time: " + (quicktime2 - quicktime1 + "ns"));
		}  
		 
		System.out.println(Arrays.deepToString(dates));
		System.out.println(Arrays.deepToString(names));
		
		//Selection Sort!
		int totalswaps = 0;
		long total = 0;
		for(int i = 0; i < 100; i++) {
			dates = datess(500);
			long selectiontime1 = System.nanoTime();
			Selection.sort(dates.clone());
			long selectiontime2 = System.nanoTime();
			long time = selectiontime2 - selectiontime1;
			total += time;
			totalswaps += Selection.swaps;
		}
		System.out.println("Selection Average Time: " + (total/100) +"ns");
		System.out.println("Selection Average Swaps: " + (totalswaps/100) + " swaps");
		
		totalswaps = 0;
		total = 0;
		for(int i = 0; i < 100; i++) {
			names = namess(500);
			long selectiontime1 = System.nanoTime();
			Selection.sort(names.clone());
			long selectiontime2 = System.nanoTime();
			long time = selectiontime2 - selectiontime1;
			total += time;
			totalswaps += Selection.swaps;
		}
		System.out.println("Selection Average Time: " + (total/100) +"ns");
		System.out.println("Selection Average Swaps: " + (totalswaps/100) + " swaps");
		
		//Insertion Sort!
		totalswaps = 0;
		total = 0;
		for(int i = 0; i < 100; i++) {
			names = namess(500);
			long insertiontime1 = System.nanoTime();
			Insertion.sort(names.clone());
			long insertiontime2 = System.nanoTime();
			long time = insertiontime2 - insertiontime1;
			total += time;
			totalswaps += Insertion.swaps;
		}
		System.out.println("Insertion Average Time: " + (total/100) +"ns");
		System.out.println("Insertion Average Swap: " + (totalswaps/100) + " swaps");
		
		totalswaps = 0;
		total = 0;
		for(int i = 0; i < 100; i++) {
			dates = datess(500);
			long insertiontime1 = System.nanoTime();
			Insertion.sort(dates.clone());
			long insertiontime2 = System.nanoTime();
			long time = insertiontime2 - insertiontime1;
			total += time;
			totalswaps += Insertion.swaps;
		}
		System.out.println("Insertion Average Time: " + (total/100) +"ns");
		System.out.println("Insertion Average Swaps: " + (totalswaps/100) + " swaps");
		
		//Bubble Sort!
		totalswaps = 0;
		total = 0;
		for(int i = 0; i < 100; i++) {
			names = namess(500);
			long bubbletime1 = System.nanoTime();
			Bubble.sort(names.clone());
			long bubbletime2 = System.nanoTime();
			long time = bubbletime2 - bubbletime1;
			total += time;
			totalswaps += Bubble.swaps;
		}
		System.out.println("Bubble Average Time: " + (total/100) +"ns");
		System.out.println("Bubble Average Swaps: " + (totalswaps/100) + " swaps");
		
		totalswaps = 0;
		total = 0;
		for(int i = 0; i < 100; i++) {
			dates = datess(500);
			long bubbletime1 = System.nanoTime();
			Bubble.sort(dates.clone());
			long bubbletime2 = System.nanoTime();
			long time = bubbletime2 - bubbletime1;
			total += time;
			totalswaps += Bubble.swaps;
		}
		System.out.println("Bubble Average Time: " + (total/100) +"ns");
		System.out.println("Bubble Average Swaps: " + (totalswaps/100) + " swaps");
		
		//Shell Sort!
		totalswaps = 0;
		total = 0;
		for(int i = 0; i < 100; i++) {
			names = namess(500);
			long shelltime1 = System.nanoTime();
			Shell.sort(names.clone());
			long shelltime2 = System.nanoTime();
			long time = shelltime2 - shelltime1;
			total += time;
			totalswaps += Shell.swaps;
		}
		System.out.println("Shell Average Time: " + (total/100) +"ns");
		System.out.println("Shell Average Swaps: " + (totalswaps/100) +" swaps");
		
		totalswaps = 0;
		total = 0;
		for(int i = 0; i < 100; i++) {
			dates = datess(500);
			long shelltime1 = System.nanoTime();
			Shell.sort(dates.clone());
			long shelltime2 = System.nanoTime();
			long time = shelltime2 - shelltime1;
			total += time;
			totalswaps += Shell.swaps;
		}
		System.out.println("Shell Average Time: " + (total/100) +"ns");
		System.out.println("Shell Average Swaps: " + (totalswaps/100) +" swaps");
		
		//Merge Sort!
		totalswaps = 0;
		total = 0;
		for(int i = 0; i < 100; i++) {
			names = namess(500);
			long mergetime1 = System.nanoTime();
			Merge.sort(names.clone());
			long mergetime2 = System.nanoTime();
			long time = mergetime2 - mergetime1;
			total += time;
			totalswaps += Merge.swaps;
		}
		System.out.println("Merge Average Time: " + (total/100) +"ns");
		System.out.println("Merge Averge Swaps: " + (totalswaps/100) + " swaps");
		
		totalswaps = 0;
		total = 0;
		for(int i = 0; i < 100; i++) {
			dates = datess(500);
			long mergetime1 = System.nanoTime();
			Merge.sort(dates.clone());
			long mergetime2 = System.nanoTime();
			long time = mergetime2 - mergetime1;
			total += time;
			totalswaps += Merge.swaps;
		}
		System.out.println("Merge Average Time: " + (total/100) +"ns");
		System.out.println("Merge Averge Swaps: " + (totalswaps/100) + " swaps");
		 
		
		//Quick Sort!
		totalswaps = 0;
		total = 0;
		for(int i = 0; i < 100; i++) {
			names = namess(500);
			long quicktime1 = System.nanoTime();
			Quick.sort(names.clone());
			long quicktime2 = System.nanoTime();
			long time = quicktime2 - quicktime1;
			total += time;
			totalswaps += Quick.swaps;
		}
		System.out.println("Quick Average Time: " + (total/100) +"ns");
		System.out.println("Quick Average Swaps: " + (totalswaps/100) + " swaps");
		
		totalswaps = 0;
		total = 0;
		for(int i = 0; i < 100; i++) {
			dates = datess(500);
			long quicktime1 = System.nanoTime();
			Quick.sort(dates.clone());
			long quicktime2 = System.nanoTime();
			long time = quicktime2 - quicktime1;
			total += time;
			totalswaps += Quick.swaps;
		}
		System.out.println("Quick Average Time: " + (total/100) +"ns");
		System.out.println("Quick Average Swaps: " + (totalswaps/100) + " swaps");
		
		
		System.out.println("aha done!");
	}
	
	
	
	@SuppressWarnings("rawtypes")
	public static Comparable [] datess(int length) {
		Comparable [] dates = new Comparable [length];
		for(int i = 0; i < length; i++) { 
			int year = (int)(Math.random()*9999 + 1);
			int month = (int)(Math.random()*12 + 1); 
			int day = (int)(Math.random()*29 + 1);
			
			String thedate = String.format("%04d%02d%02d", year, month, day);
			dates[i] = new Dates(thedate); 
		}
		
		return dates;
	}
	
	@SuppressWarnings("rawtypes")
	public static Comparable [] namess(int length) {
		Comparable[] names = new Comparable[length];
		final String characters = "abcdefghijklmnopqrstuvwxyzABCDEF";
		Random r = new Random();

		for (int i = 0; i < length; i++) {
			int l = r.nextInt(16) + 4;
			String string = "";

			for (int j = 0; j < l; j++) {
				string += characters.charAt(r.nextInt(characters.length()));
			}

			names[i] = new Firstnames(string);
		}
		
		return names;
	}
}