
const firstUniqChar = function(s) {
    //traverse over array
    for (let i = 0, n = s.length; i < n; i++) {
        const char = s[i];
        
        if (s.indexOf(char) === s.lastIndexOf(char))
            return i;
    }
    
    return -1;
};
console.log(firstUniqChar("leetcode"));

console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));

