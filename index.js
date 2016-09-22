console.time("non-memoized call");
var findMe = memoizeGetElementById("findMe");
console.timeEnd("non-memoized call");

findMe.style.color = "blue";

console.time("memoized call");
var findMeAgain = memoizeGetElementById("findMe");
console.timeEnd("memoized call");

findMeAgain.style.fontWeight = "bold";

console.time("non-memoized call");
var alsoFindMe = memoizeQuerySelector("#alsoFindMe");
console.timeEnd("non-memoized call");

alsoFindMe.style.color = "red";

console.time("memoized call");
var alsoFindMeAgain = memoizeQuerySelector("#alsoFindMe");
console.timeEnd("memoized call");

alsoFindMeAgain.style.textAlign = "center";