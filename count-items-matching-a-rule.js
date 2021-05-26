//https://leetcode.com/problems/count-items-matching-a-rule/



var countMatches = function(items, ruleKey, ruleValue) {
    let r = ["type", "color", "name"]
    let idx = r.indexOf(ruleKey)
    // console.log(r.indexOf(ruleKey))
    return items.filter(i=> i[idx] === ruleValue).length
};

var a = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]]
var b = "color"
var c = "silver"

countMatches(a,b,c)
