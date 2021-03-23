// Cindy Zhang
// I pledge my honor that I have abided by the Stevens Honor System.

package AssignmentFour;

public class Firstnames implements Comparable<Firstnames>{
	
	String name;
	
	public Firstnames(String names) {
		this.name = names;
	}
	
	public int compareTo(Firstnames that) {
		if(this.name.compareTo(that.name) < 0 ) {
			return 1;
		}
		else if(this.name.compareTo(that.name) > 0 ) {
			return -1;
		}
		else {
			return 0;
		}
	}

	public String toString(){
		return name;
	}
	
	public void print() {
		System.out.println(name);
	}
}