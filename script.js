function isPalindrome(str) {
    // Clean string (lowercase and remove non-alphanumeric characters)
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse and compare
    const reversedStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === reversedStr;
}

// Make sure you export the correctly named function
module.exports = isPalindrome;