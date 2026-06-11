const Palindrome = require("../models/Palindrome");

test('Validate a word is palindrome', () => {
    const text = "level";
    const palindrome = new Palindrome(text);

    expect(palindrome.isPalindrome()).toBe(true);
});

test('Validate a word is not palindrome', () => {
    const text = "Computer";
    const palindrome = new Palindrome(text);

    expect(palindrome.isPalindrome()).toBe(false);
});

test('Validate a phrase is palindrome', () => {
    const text = "Never odd or even";
    const palindrome = new Palindrome(text);

    expect(palindrome.isPalindrome()).toBe(true);
});


test('Validate a phrase is not palindrome', () => {
    const text = "Hello world";
    const palindrome = new Palindrome(text);

    expect(palindrome.isPalindrome()).toBe(false);
});