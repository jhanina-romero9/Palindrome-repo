const PalindromeError = require("./PalindromeError");

class Palindrome {

    constructor(text) {
        this.text = text;
    }

    isPalindrome() {
        this.#reviewText(this.text);
        const cleanText = this.#normalize(this.text);
        const reversed = this.#reverse(cleanText);

        //main version
        return cleanText === reversed;
    }

    #reviewText(text) {
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


    #normalize(text) {
        return text
            .toLowerCase()
            .replace(/[\s',!?-]/g, '');
    }

    #reverse(text) {
        return [...text].reverse().join('');
    }

}
module.exports = Palindrome;