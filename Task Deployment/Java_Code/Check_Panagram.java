import java.util.Scanner;

public class Main {
    public static boolean isPangram(String sentence) {
        // Create an array to mark the presence of each letter
        boolean[] isPresent = new boolean[26];
        // Convert the sentence to lowercase to make it case-insensitive
        sentence = sentence.toLowerCase();
        // Iterate through each character in the sentence
        for (int i = 0; i < sentence.length(); i++) {
            char currentChar = sentence.charAt(i);
            // Check if the character is an English alphabet
            if (currentChar >= 'a' && currentChar <= 'z') {
                // Mark the presence of the letter in the array
                isPresent[currentChar - 'a'] = true;
            }
        }
        // Check if all letters are present
        for (boolean letterPresent : isPresent) {
            if (!letterPresent) {
                return false; // If any letter is not present, it's not a pangram
            }
        }
        return true; // All letters are present, it's a pangram
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a sentence:");
        String inputSentence = scanner.nextLine();
        if (isPangram(inputSentence)) {
            System.out.println("The sentence is a pangram.");
        } else {
            System.out.println("The sentence is not a pangram.");
        }
    }
}
