package AssignmentFive;

import java.util.ArrayList;

/**
 * Hashtable that implements Quadratic probing for Assigment 5 of CS 284
 * @author Max Shi
 * @param <HashedObj> The type of the object that the hash table holds
 */
public class QuadraticProbingTable<HashedObj> implements HashTable<HashedObj> {
    public static int ccounter;
    public int collisions(){ // C
        return ccounter;
    }
    public int numberOfItems(){ // N
        return currentSize;
    }
    public int sizeOfHashTable(){ // T
        return size;
    }
    public double loadFactor(){
        return ((1.0 * currentSize) / size);
    }
    public double averageNumberOfCollisions(){
        return ((1.0 * ccounter) / currentSize);
    }
    
    private int findPos(HashedObj x){
        int offset = 1;
        int current_pos = InternalHash(x); 
        while(array_.get(current_pos).info_ != EntryType.EMPTY &&
                !array_.get(current_pos).element_.equals(x)){
            current_pos += offset;
            offset += 2;
            ccounter++;
            if (current_pos >= size) current_pos -= size;
        }
        return current_pos;
    }
    
    
    private int InternalHash(HashedObj x){
        return Math.abs(x.hashCode()) % size;
    }
    /*
     *  Boiler plate code below, read through it if you like.
     */
    private static boolean isPrime(int n){
        if (n==2 || n==3)
            return true;
        else if( n == 1 || n % 2 == 0 )
            return false;
        for( int i = 3; i * i <= n; i += 2 )
            if( n % i == 0 )
                return false;
        return true;
    }
    private static int nextPrime(int n){
        if (n % 2 == 0)
            ++n;
        while (!isPrime(n)) n += 2;
        return n;
    }

    enum EntryType{
        ACTIVE,
        EMPTY,
        DELETED
    }
    private class HashEntry{
        HashedObj element_;
        EntryType info_;
        HashEntry(HashedObj e, EntryType i){
            element_ = e;
            info_ = i;
        }
    }
    private int size; // T
    private int currentSize; // N
    private ArrayList<HashEntry> array_;
    public QuadraticProbingTable(int size){
        this.size = size;
        array_ = new ArrayList<>(size);
        makeEmpty();
    }
    public QuadraticProbingTable(){
        size = 101;
        array_ = new ArrayList<>(size);
        makeEmpty();
    }
    private void makeEmpty(){
        currentSize = 0;
        for(int i = 0; i<size; i++){
            if (i <= array_.size())
                array_.add(new HashEntry(null , EntryType.EMPTY));
            if (array_.get(i) != null){
                array_.get(i).info_ = EntryType.EMPTY;
            }
            else{
                array_.set(i, new HashEntry(null , EntryType.EMPTY));
            }

        }
    }
    public boolean insert(HashedObj x){
        int currentPos = findPos(x);
        if(isActive(currentPos))
            return false;
        array_.get(currentPos).element_ = x;
        array_.get(currentPos).info_ = EntryType.ACTIVE;
        if(++currentSize > size / 2){
            rehash();
        }
        return true;
    }
    public boolean remove(HashedObj x){
        int currentPos = findPos(x);
        if (!isActive(currentPos))
            return false;
        array_.get(currentPos).info_ = EntryType.DELETED;
        return true;
    }
    public boolean contains(HashedObj x){
        return isActive(findPos(x));
    }

    private boolean isActive(int i){ return array_.get(i).info_ == EntryType.ACTIVE; }

    private void rehash(){
        ArrayList<HashEntry> oldArray = array_;
        int newsize = nextPrime(size * 2);
        ArrayList<HashEntry> newArray = new ArrayList<>(newsize);
        size = newsize;
        array_ = newArray;
        makeEmpty();
        currentSize = 0;
        for(HashEntry h : oldArray){
            if (h.info_ == EntryType.ACTIVE){
                insert(h.element_);
            }
        }
    }

}
