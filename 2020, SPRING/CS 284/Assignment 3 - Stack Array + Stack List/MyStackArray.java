package AssignmentThree;

public class MyStackArray {
	private String[] Stack;
	private int N = 0;
	
	public MyStackArray(int capacity) {
		Stack = new String[capacity];
	}
	
	public boolean isEmpty() {
		return N==0;
	}
	
	public void push(String item) {
		if(N == Stack.length) {
			resize(2*Stack.length);
		}
		Stack[N++] = item;
	}
	
	private void resize(int capacity) {
		String[] copy = new String[capacity];
		for(int i = 0; i < N; i++) {
			copy[i] = Stack[i];
		}
		Stack = copy;
	}
	
	public String pop() {
		String item = Stack[--N];
		Stack[N] = null;
		if(N>0 && N == Stack.length/4) {
			resize(Stack.length/2);
		}
		return item;
	}
	
	public void print() {
		System.out.println("Your Stack: ");
		for(int i = 0; i<this.Stack.length; i++) {
			System.out.println("[" + this.Stack[i] + "]");
		}
	}
	
	public static void main(String[] args) {
		MyStackArray S = new MyStackArray(1);
		S.print();
		S.push("hewo");
		S.push("uwu");
		S.print();
		System.out.println(S.pop());
		System.out.println(S.isEmpty());
	}
}
