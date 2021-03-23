package AssignmentFive;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.Scanner;

public class CreateAndTestHash {
    public static void testFunctionForHashTable(HashTable<String> hashTable, String textFileName, String queryFileName){
        System.out.println("Test Function for Hash Tables...");
        System.out.printf("Words filename: %s\n", textFileName);
        System.out.printf("Query filename: %s\n", queryFileName);

        // BUFFER READERS WOOOOOO
        BufferedReader reader1;
        BufferedReader reader2;
        
        try {
        	reader1 = new BufferedReader(new FileReader("C:\\Users\\cindy\\eclipse-workspace\\School Code\\src\\AssignmentFive\\"  + textFileName + ".txt"));
        	reader2 = new BufferedReader(new FileReader("C:\\Users\\cindy\\eclipse-workspace\\School Code\\src\\AssignmentFive\\" + queryFileName + ".txt"));
        	
        	
        	while(reader1.ready()) {
        		hashTable.insert(reader1.readLine());
        	}
        	
        	while(reader2.ready()) {
        		if(hashTable.contains(reader2.readLine())) {
        			System.out.println("Found and Probing Number: " + hashTable.collisions());
        			System.out.println("Word Found: " + reader2.readLine());
        		}
        		else {
        			System.out.println("Not Found and Probing Number: " + hashTable.collisions());
        			System.out.println("Word Not Found: " + reader2.readLine());
        		}
        	}
        	
        	
        }
        catch(Exception e) {
        	e.printStackTrace();
        }
        
        

        System.out.printf("Collisions: %d\n", hashTable.collisions());
        System.out.printf("Number of items: %d\n", hashTable.numberOfItems());
        System.out.printf("Size of hash table: %d\n", hashTable.sizeOfHashTable());
        System.out.printf("Load factor: %.02f\n", hashTable.loadFactor());
        System.out.printf("Avg. number of collisions: %.02f\n", hashTable.averageNumberOfCollisions());
    }
    
    public static void main(String[] args){
        Scanner s = new Scanner(System.in);
        String filename, query, param;
        System.out.println("Please input text filename: ");
        filename = s.nextLine();
        System.out.println("Please input query filename: ");
        query = s.nextLine();
        System.out.println("Please input linear, quadratic, or double for type of hashing: ");
        param = s.nextLine();
        if (param.equals("linear")){
            HashTable<String> hash = new LinearProbingTable<>();
            testFunctionForHashTable(hash, filename, query);
        }
        else if (param.equals("quadratic")){
            HashTable<String> hash = new QuadraticProbingTable<>();
            testFunctionForHashTable(hash, filename, query);
        }
        else if (param.equals("double")){
        	HashTable<String> hash = new DoubleProbingTable<>();
        	testFunctionForHashTable(hash, filename, query);
        }
        else{
            System.out.println("Unknown table type.");
        }
        
        
        
    }


}
