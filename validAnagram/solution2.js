class Solution {
  anagram(s,t) {
    if(s.length !== t.length) {
      return false;
    }

    const mapS = new Map();
    const mapT = new Map();

    for(const char of s) {
      mapS.set(char, (mapS.get(char) || 0) + 1);
    }

    for(const char of t) {
      mapT.set(char, (mapT.get(char) || 0) + 1);
    }

    for(const [key, value] of mapS) {
      if (mapT.get(key) !== value) return false;
    }

    return true;
  }
}

const test = new Solution();
console.log(test.anagram("racecar", "carrace"));
console.log(test.anagram("jar", "jam"));