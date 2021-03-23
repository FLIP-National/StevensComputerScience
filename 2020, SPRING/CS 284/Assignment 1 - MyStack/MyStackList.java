package MyStack;

public class MyStackList {
    private Node first;
    
    private class Node
    {
        Object item;
        Node next; }
    
    public void push(Object item){
        Node oldFirst = first;
        first = new Node();
        first.item = item;
        first.next = oldFirst;
    }
    public Object pop (){
        Object stuff = first.item;
        first = first.next;
        return stuff;
        
    }
    
    public boolean isEmpty()
    {
        return first == null;
    }    
    
    public static void main(String[] args) {
        MyStackList L = new MyStackList();
        for( int i = 0; i< 5; i++)
        {
            L.push(i);
        }
        for( int i = 0; i< 5; i++)
        {
            System.out.println("num :" + L.pop());
        }
    }
        
}