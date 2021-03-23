package AssignmentFive;

public interface HashTable<HashedObj> {
	public boolean insert(HashedObj x);
    public boolean remove(HashedObj x);
    public boolean contains(HashedObj x);
    public int collisions();
    public int numberOfItems();
    public int sizeOfHashTable();
    public double loadFactor();
    public double averageNumberOfCollisions();
}
