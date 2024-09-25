/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   
        const romanvalues = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
        let total = 0;
        let prevvalue =0;
        for (let i = 0; i < s.length - 1; i++) {
            if (romanDict[s[i]] < romanDict[s[i + 1]]) {
                total -= romanDict[s[i]];
            } else {
                total += romanDict[s[i]];
            }
        }
        return total + romanDict[s[s.length - 1]];

};


module.exports={romanToInt}