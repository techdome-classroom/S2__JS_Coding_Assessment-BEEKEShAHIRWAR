// program2.js

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (s.length === 0) return 0; // Handle the edge case for an empty string
    
    const romanDict = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let total = 0;

    for (let i = 0; i < s.length - 1; i++) {
        if (romanDict[s[i]] < romanDict[s[i + 1]]) {
            total -= romanDict[s[i]];
        } else {
            total += romanDict[s[i]];
        }
    }

    total += romanDict[s[s.length - 1]];
    return total;
};

module.exports = { romanToInt };
