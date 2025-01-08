class Solution {
  anagram(s,t) {
    if(s.length !== t.length) {
      return false;
    }

    let sSort = s.split("").toSorted().join();
    let tSort = t.split("").toSorted().join();
    return sSort == tSort;
  }
}

const test = new Solution();
console.log(test.anagram("racecar", "carrace"));
console.log(test.anagram("jar", "jam"));