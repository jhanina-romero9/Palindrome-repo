class PalindromeError extends Error {
    constructor(message){
        super(message);
        this.name = "PalindromeError";
    }
}

module.exports = PalindromeError;