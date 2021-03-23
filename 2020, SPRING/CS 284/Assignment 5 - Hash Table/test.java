package AssignmentFive;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Random;

public class test {
    public static void main(String[] args){
        QuadraticProbingTable<Integer> table = new QuadraticProbingTable<>(2);
        Random r = new Random();
        ArrayList<Integer> inserted = new ArrayList<>();
        for(int i = 0; i<70; i++){
            int insert = r.nextInt(100);
            table.insert(insert);
            if (!inserted.contains(insert)) inserted.add(insert);
        }
        Collections.sort(inserted);
        ArrayList<Boolean> result = new ArrayList<>();
        for(int i = 0; i<100; i++){
            result.add(table.contains(i));
        }
        System.out.println(Arrays.toString(result.toArray()));
        System.out.println(Arrays.toString(inserted.toArray()));
        for(int i = 0; i<20; i++){
            int remove = r.nextInt(100);
            if (table.remove(remove))   System.out.println(remove + " removed");
        }
        result = new ArrayList<>();
        for(int i = 0; i<100; i++){
            result.add(table.contains(i));
        }
        System.out.println(Arrays.toString(result.toArray()));
        System.out.println(Arrays.toString(inserted.toArray()));
    }
}
