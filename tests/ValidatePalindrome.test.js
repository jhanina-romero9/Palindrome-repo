const Palindrome = require("../models/Palindrome");
const PalindromeError = require("../models/PalindromeError");

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

test('Validate throw error when text is blank', () => {
    const text = " ";
    const palindrome = new Palindrome(text);

    expect(() => palindrome.isPalindrome()).toThrow("Text cannot be empty or null");
});

test('Validate throw error when text contains numbers', () => {
    const text = "test1234A";
    const palindrome = new Palindrome(text);

    expect(() => palindrome.isPalindrome()).toThrow("Text cannot contains numbers");
});

test('Validate throw error when text contains special characteres', () => {
    const text = "Hello [world] @test";
    const palindrome = new Palindrome(text);

    expect(() => palindrome.isPalindrome()).toThrow("Text cannot contains special characters");
});