const PalindromeError = require("../models/PalindromeError");

class Palindrome {

    constructor(text) {
        this.text = text;
    }

    isPalindrome() {
        this.reviewText(this.text);
        const cleanText = this.text.toLowerCase().replace(/[\s',!?-]/g, '');
        const reversed = cleanText.split('').reverse().join('');

        if (cleanText === reversed) {
            console.log(this.text + " => It's a palindrome!");
            return true;
        } else {
            console.log(this.text + " => Not a palindrome.");
            return false;
        }

    }

    reviewText(text) {
        const specialCharacterRegex = /[@#$%^&*()\+={}[\]:;"<>.\/|\\]/;
        const numberRegex = /\d/;

        if (!text || text.trim() === '') {
            throw new PalindromeError("Text cannot be empty or null");
        }
        if (specialCharacterRegex.test(text)) {
            throw new PalindromeError("Text cannot contains special characters");
        }

        if (numberRegex.test(text)) {
            throw new PalindromeError("Text cannot contains numbers");
        }
    }
}
module.exports = Palindrome;