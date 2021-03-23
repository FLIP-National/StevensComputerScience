// Cindy Zhang
// I pledge my honor that I have abided by the Stevens Honor System.

package AssignmentTwo;
import java.util.Random;

public class SingleLinkedList {
	//instantiate the head
	private Node head;
	private int visitedNodes;
	//
	private static class Node{
		int item;
		Node next;
		public Node(int item) {
			this.item = item; 
			next = null;
		}
	}
	
	// sinleLinkedList definition
	public SingleLinkedList() {
		head = null;
	}
	public int getVisitedNodes() {
		return visitedNodes;
	}
	
	public boolean insert(int value) {
		if(head == null) {
			head = new Node(value);
			return true;
		}
		
		Node current = new Node(value);
		Node indx = head;
		
		if(current.item <= head.item) {
			Node oldfirst = head;
			head = current;
			head.next = oldfirst;
			return true;
		}
		
		while(indx.next != null) {
			if(current.item > indx.item && (current.item <= indx.next.item)) {
				current.next = indx.next;
				indx.next = current;
				return true;
			}
			indx = indx.next;
			
		}
		indx.next = current;
		return true;
	}
	
	public boolean find(int value) {
		
		if(head == null) return false;
		
		Node current = head;
		
		while(current.next != null && current.item != value) {
			current = current.next;
			visitedNodes++;
		}
		if(current.item == value) return true;
		else return false;
	}
	
	public boolean delete(int value) {
		if(head == null) return false;
		if(head.item == value) {
			head = head.next;
			return true;
		}
		Node current = head;
		while(current.next != null && current.next.item != value) {
			current = current.next;
		}
		if(current.next == null ) return false;
		current.next = current.next.next;
		return true;
		
	}
	public void print() {
		if(head == null) System.out.println("");
		StringBuilder s = new StringBuilder();
		Node current = head;
		while(current.next != null) {
			s.append(current.item + "->");
			current = current.next;
		}
		s.append(current.item+"->");
		System.out.println(s.toString());
	}
	public static void main(String[] args) {
		Random r = new Random();	
		SingleLinkedList l = new SingleLinkedList();
		SingleLinkedList SLL = new SingleLinkedList();
		for(int i = 0; i<8; i++) {
			int rr = r.nextInt(20);
			System.out.println(rr);
			l.insert(rr);
			System.out.println("added");
			l.print();
		}
		l.print();
		
		
		l.insert(200);
		l.print();
		
		System.out.println("200? "+l.find(200));
		System.out.println(l.visitedNodes);
		System.out.println("500? "+l.find(500));
		
		System.out.println("200? " + l.delete(200));
		l.print();
		
		for(int i = 0; i < 10; i++) {
			SLL.insert(i);
			SLL.print();
		}
		
	}	
}