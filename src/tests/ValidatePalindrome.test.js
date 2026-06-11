const Palindrome = require("../models/Palindrome");
const PalindromeError = require("../models/PalindromeError");

test('Should return true for a palindrome word', () => {
    const text = "level";
    const palindrome = new Palindrome(text);

    expect(palindrome.isPalindrome()).toBe(true);
});

test('Should return false for a non-palindrome word', () => {
    const text = "Computer";
    const palindrome = new Palindrome(text);

    expect(palindrome.isPalindrome()).toBe(false);
});

test('Should return true for a palindrome phrase', () => {
    const text = "Never odd or even";
    const palindrome = new Palindrome(text);

    expect(palindrome.isPalindrome()).toBe(true);
});


test('Should return false for a non-palindrome word', () => {
    const text = "Hello world";
    const palindrome = new Palindrome(text);

    expect(palindrome.isPalindrome()).toBe(false);
});

test('Should throw error when text is blank', () => {
    const text = " ";
    const palindrome = new Palindrome(text);

    expect(() => palindrome.isPalindrome()).toThrow("Text cannot be empty or null");
});

test('Should throw error when text contains numbers', () => {
    const text = "test1234A";
    const palindrome = new Palindrome(text);

    expect(() => palindrome.isPalindrome()).toThrow("Text cannot contains numbers");
});

test('Should throw error when text contains special characteres', () => {
    const text = "Hello [world] @test";
    const palindrome = new Palindrome(text);

    expect(() => palindrome.isPalindrome()).toThrow("Text cannot contains special characters");
});