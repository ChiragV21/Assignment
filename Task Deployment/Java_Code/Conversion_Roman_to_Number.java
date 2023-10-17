import java.util.*;

public class Main {
    public static int romanToInt(String s) {
        // Create a HashMap to store the values of Roman numerals
        Map<Character, Integer> m = new HashMap<>();
        // Add the values for each Roman numeral character
        m.put('I', 1);
        m.put('V', 5);
        m.put('X', 10);
        m.put('L', 50);
        m.put('C', 100);
        m.put('D', 500);
        m.put('M', 1000);
        // Initialize the result variable
        int ans = 0;
        // Loop through the input string
        for (int i = 0; i < s.length(); i++) {
            // Check if the current character is smaller than the next character
            if (i < s.length() - 1 && m.get(s.charAt(i)) < m.get(s.charAt(i + 1))) {
                // If so, subtract its value from the result
                ans -= m.get(s.charAt(i));
            } else {
                // Otherwise, add its value to the result
                ans += m.get(s.charAt(i));
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        // Create a Scanner object to read input from the user
        Scanner sc = new Scanner(System.in);
        // Read a line of input from the user
        String str = sc.nextLine();
        // Call the romanToInt function
        int ans = romanToInt(str);
        // Print the result
        System.out.println(ans);
    }
}
