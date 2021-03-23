package AssignmentFive;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.Scanner;
import java.util.*; 

public class SpellCheck {  
   
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
        	
        	//insert the dictionary into the hash table
        	while(reader1.ready()) {
        		hashTable.insert(reader1.readLine());
            }
            
        	while(reader2.ready()) {
                String k = reader2.readLine();
                String[] ksplit =k.split(" ");
                for ( int i = 0; i< ksplit.length; i++)
                { String word = ksplit[i].trim();
                    if(word .equals(""))
                {
                    int l = 0;
                }
                else if(hashTable.contains(word)) {
        			int l = 0;
        		}
        		else {
                    correction(word, hashTable);
                    
        		}
        	}
        }
    }
        catch(Exception e) {
        	e.printStackTrace();
        }

       
    }
    public static void correction( String word, HashTable<String> hashTable)
    {
        StringBuilder words = new StringBuilder(word);
        char[] alphabet = {'a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n', 'o','p', 'q', 'r', 's', 't','u', 'v', 'w', 'x', 'y','z'};
        StringBuilder corrections = new StringBuilder("");
        // first method: adding letter
        for( int i = 0; i< alphabet.length; i++)
        { 

            for( int j = 0; j<words.length();j++)
            {
                
                StringBuilder word1 =  new StringBuilder (words);
                word1.insert(j,alphabet[i] );
                if(hashTable.contains(word1.toString()))
                {
                   corrections.append("["+word1+"]");
                }

            }
        }
        //second method: removing letters
        for( int j = 0; j<words.length();j++)
        {
            StringBuilder word2 = new StringBuilder(words);
            word2.deleteCharAt(j);
            if(hashTable.contains(word2.toString()))
                {
                   corrections.append("["+word2+"]");
                }

        }
        // third method: swaping letter
        for( int j = 0; j<words.length()-1; j++)
        {
            StringBuilder word3 = new StringBuilder(words);
            char a = word3.charAt(j);
            word3.deleteCharAt(j);
            word3.insert(j+1, a);
            if(hashTable.contains(word3.toString()))
                {
                   corrections.append("["+word3+"]");
                }
        }
        String finalPhrase = corrections.toString();
        if(!finalPhrase.equals(""))
        {
            System.out.println("This word is misspelled: ["+ word + "] it's probably one of these: " + finalPhrase + "!");
        }


    }
    public static void main(String[] args){
        Scanner s = new Scanner(System.in);
        String dictionary, document;
        /*System.out.println("Please input dictionary filename: ");
        dictionary = s.nextLine();
        System.out.println("Please input the document you want to spell check: ");
        document = s.nextLine();*/
        dictionary = "wordsEn";
        document = "document1_short";
        HashTable<String> hash = new DoubleProbingTable<>();
        testFunctionForHashTable(hash, dictionary, document);
        
        
        
    }
   
   
  
}
