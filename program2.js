/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanDict = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let total = 0;

    for (let i = 0; i < s.length - 1; i++) {
        // Check if the current numeral is less than the next numeral (indicating subtraction)
        if (romanDict[s[i]] < romanDict[s[i + 1]]) {
            total -= romanDict[s[i]];
        } else {
            total += romanDict[s[i]];
        }
    }

    // Add the value of the last numeral in the string
    total += romanDict[s[s.length - 1]];

    return total;
};

module.exports = { romanToInt };
