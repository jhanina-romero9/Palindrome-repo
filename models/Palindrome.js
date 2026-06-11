class Palindrome {

    constructor(text) {
        this.text = text;
    }

    isPalindrome() {
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
}
module.exports = Palindrome;