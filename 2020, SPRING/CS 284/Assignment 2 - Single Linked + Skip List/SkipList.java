// Cindy Zhang
// I pledge my honor that I have abided by the Stevens Honor System.
// Disclaimer: I did attempt to submit on bonus day. I've rewritten my insert code 5 times....

package AssignmentTwo;
import java.util.Random;

public class SkipList {
	//-----------------------controlled variables--------------------------------------------------
	private Node head;
	private static int MAX_NODES=1000;
	private static int maxLevel=(int)(Math.ceil((Math.log(MAX_NODES)/Math.log(2)))-1);
	//-------------------------respective variables------------------------------------------------
	private int maxListLevel;
	private int numberOfNodes;
	private int visitedNodes;
	//------------------------------Node Class-----------------------------------------------------
	private static class Node{
		public int item; 					// node item
		public Node[] next; 				// array inside the node 
		
		public Node(int level, int data) {
			next = new Node[level +1]; 		// the next one after this one should have a level of 1
			item = data;					// define item in the node
		}					
	} 
	//--------------------------------SkipList------------------------------------------------------
	public SkipList() {
	        head = new SkipList.Node(maxLevel,0);	// starting at 0 goes to 9 for maxLevel
	        maxListLevel = 0;						// instantiate maxListLevel for null
	        numberOfNodes = 0;						// instantiate numberOfNodes for null
	        visitedNodes = 0;						// instantiate visitedNodes for null
	}
	//------------based on the number of nodes return the max number of list possible--------------
	public int getMaxListLevel() {
		this.maxListLevel = (int)Math.floor((Math.log(this.numberOfNodes)/Math.log(2)));
		return this.maxListLevel;
	}
	//------------------------visitedNodes is equivalent to index--------------------
	public int visitedNodes() {
		return visitedNodes;  
	} 
	//----------------------------------------reset----------------------------------
	public void resetVisitedNodes() {
		visitedNodes = 1;           
	}
	//----------------------get the level based on the visited numNodes--------------
	public int getLevel(int numNodes) {
		int level = 0;									// start at zero
		while(numNodes%2 == 0) {						// if the remainder of numNode = 0 then
			level++;									// add a level
			numNodes=numNodes/2;						// divide the numNodes by 2
		}
		return level;									// get level
	}
	//------------------find: is there a value in this skip list? --------------------
	public boolean find(int value) {
		Node header = head;
		
		if(head.next[0] == null) {
			return false;
		}
		for(int i = maxLevel; i >= 0; i--) {
			while(header.next[i] != null && (value > header.next[i].item)) {
				header = header.next[i];
			}
			if(header.item == value) {
				return true;
			}
		}
		return false;
	}
	//-----------------------insert: put in a value in order -------------------------
	public boolean insert(int value) {
		Node header = head;																	// header = 0														
		Node ho; 																			// ho = null
		Node h;																				// headerNext = null
		
		int hold = value;																	// variable one (to swap items around)
		int holder;																			// variable two (to swap items around)
		
		resetVisitedNodes();																// visitedNode = 1
		numberOfNodes++;																	// increase the numberOfNodes by 1
		maxListLevel = getLevel(numberOfNodes);												// receive the maxListLevel 
		
		if(head.next[0] == null)  {															// Level [0]: --> null  
			head.next[0] = new Node(0, value);												// Level [0]: Node(0, value)
			System.out.println("I should've reached here....");								// checkpoint
			return true;
		}
		else if(value <= head.next[0].item) {												// value replaces the first item
			holder = header.next[0].item;													// holder = first item
			header.next[0].item = hold;														// first item = value
			fixtheList();																	// rearrange the list
			return true;
		}
		
		while(header.next[0] != null) {														// Level [0]: ---> not null
			if((hold > header.item) && (hold <= header.next[0].item)) {						// send help :(
				holder = header.next[0].item;
				header.next[0].item = hold;
				hold = holder;
				visitedNodes++;
			}
			else {
				visitedNodes++;
				header.next[0].next[0] = new Node(getLevel(visitedNodes), value);
				fixtheList();
				return true;
			}
			header = header.next[0];
		}
		fixtheList();
		return true;
	}
	
	//-------------delete: erase and push or pull the other items to be in order and right order-------
	public boolean delete(int value) {
		Node header = head;
		
		if(!find(value)) {
			return false;
		}
		else {
			while(header.next[0] != null) {
				if(header.item == value) {
					header.next[0] = header.next[0].next[0];
					numberOfNodes--;
					maxListLevel = getLevel(numberOfNodes);
					fixtheList();
					return true;
				}
				header = header.next[0];
			}
		}
		
		return false;
	}
	// re-implement the list
	public void fixtheList() {
		Node header = head;
		Node holdd = head;
		resetVisitedNodes();
		int hold;
		
		while(visitedNodes < numberOfNodes+1) {
			holdd = header.next[0].next[0];
			hold = header.next[0].item;
			if(holdd == null) {
				header.next[0] = new Node(getLevel(visitedNodes),hold);
				break;
			}
			else {
				header.next[0] = new Node(getLevel(visitedNodes),hold);
			}
			visitedNodes++;
			header = header.next[0];
		}
	}
	//-----------------------prints all levels of the SkipList--------------------
	public void print() {
		Node header = head;
		
		if(header==null) {
			for(int i = maxLevel; i >= 0; i--) {
				System.out.println("Level [" + i + "]: --> null");
			}
		}
		else {
		for(int i = maxLevel; i >= 0; i--) {
			header = head;
			System.out.print("Level [" + i + "]: -->");
			while(header.next[i] != null) {
				System.out.print(header.item + " --> ");
				header = header.next[i];
			}
			System.out.print(header.item + "\n");
		}}
	}
	
	//--------------------------prints one level of the skipList------------------
	public void print(int level) {
		Node header = head;
		
		if((level <= -1) && (level > maxLevel)) {
			throw new IllegalArgumentException("Level is out of Bound");
		}
		else {
			System.out.print("Level [" + level + "]: ");
			while(header.next[level] != null) {
				System.out.print(header.next[level].item + " --> ");
			}
			System.out.print("null");
		}
	}
	
	
	
	//------------------------------testing public void main-----------------------
	public static void main(String[] args) {
		System.out.println("helollsodadaos");
		
		SkipList One = new SkipList();
		One.print();
		One.insert(1);
		System.out.println(One.find(1));
		
		System.out.println(One.insert(1));
		One.print();
		One.insert(1);
		One.print();
	}
}