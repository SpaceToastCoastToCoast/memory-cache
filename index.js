setTimeout(function() {
console.time("non-memoized call getById");
var findMe = memoizeGetElementById("findMe");
console.timeEnd("non-memoized call getById");

findMe.style.color = "blue";

console.time("memoized call getById");
var findMeAgain = memoizeGetElementById("findMe");
console.timeEnd("memoized call getById");

findMeAgain.style.fontWeight = "bold";

console.time("non-memoized call query");
var alsoFindMe = memoizeQuerySelector("#alsoFindMe");
console.timeEnd("non-memoized call query");

alsoFindMe.style.color = "red";

console.time("memoized call query");
var alsoFindMeAgain = memoizeQuerySelector("#alsoFindMe");
console.timeEnd("memoized call query");

alsoFindMeAgain.style.textAlign = "center"; }, 1000);