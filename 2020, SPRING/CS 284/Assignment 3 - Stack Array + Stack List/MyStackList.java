package AssignmentThree;

public class MyStackList {
	private Node first;
	
	public class Node{
		String item;
		Node next;
	}
	
	public MyStackList() {
		first = null;
	}
	
	public void push(String item) {
		Node oldfirst = first;
		first = new Node();
		first.item = item;
		first.next = oldfirst;
	}
	public String pop() {
		String thing = first.item;
		first = first.next;
		return thing;
	}
	
	public boolean isEmpty() {
		return first==null;
	}
	
	public String print() {
		Node first = this.first;
		System.out.println("Your stack: ");
		if(first == null) {
			System.out.println("[null]");
			return "\n";
		}
		while(first != null) {
			System.out.println("[" + first.item + "]");
			first = first.next;
		}
		return "\n";
	}
	
	public static void main(String[] args) {
		MyStackList Stacks = new MyStackList();
		Stacks.print();
		Stacks.push("pleaseprintme");
		Stacks.push("pleaseprintmetoo");
		Stacks.print();
		System.out.println(Stacks.pop());
		System.out.println(Stacks.isEmpty());
	}
}
