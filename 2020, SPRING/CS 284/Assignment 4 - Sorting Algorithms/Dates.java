// Cindy Zhang
// I pledge my honor that I have abided by the Stevens Honor System.

package AssignmentFour;

public class Dates implements Comparable<Dates>{
	
	String date;
	int data;
	
	public Dates(String dates) {
		this.date = dates;
		this.data = Integer.parseInt(date);
	}
	
	public int compareTo(Dates that) {
		
		if(NumberDigits() != 8 || that.NumberDigits() != 8) {
			throw new IllegalArgumentException("Not a valid Date!");
		}
		if(!isDate() || !that.isDate()) {
			throw new IllegalArgumentException("Not a valid Date!");
		}
		
		if(this.data > that.data) {
			return -1;
		}
		else if(this.data < that.data) {
			return 1;
		}
		else {
			return 0;
		}
	}
	
	public int NumberDigits() {
		return date.length();
	}
	
	public boolean isDate() { 
		String number = date;
		
		// get year
		String y = "";
		for(int i = 0; i < 4; i++) {
			y += number.charAt(i);
		}
		int year = Integer.parseInt(y);
		
		// get month
		String m = "";
		for(int j = 4; j < 6; j++) {
			m += number.charAt(j);
		}
		int month = Integer.parseInt(m);
		
		// get day
		String d = "";
		for(int k = 6; k < number.length(); k++) {
			d += number.charAt(k);
		}
		int day = Integer.parseInt(d);
		
		/*
		 *  base cases...
		 */
		
		if(year <= 0 || month <= 0 || day <= 0 || day > 31 || month > 12) { 
			return false;
		}
		if(month == 2) {
			if(day > 29) {
				return false;
			}
		}
		if(month == 4 || month == 6 || month == 9 || month == 11) {
			if(day > 30) {
				return false;
			}
		}
		
		return true;
	}
	
	public void print() {
		System.out.println(date);
	}
	
	public String toString() {
		return date;
	}
}