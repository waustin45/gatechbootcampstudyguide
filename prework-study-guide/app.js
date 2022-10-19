// function showConsole () {
//     console.log("HTML")
//     console.log("CSS")
//     console.log("Git")
//     console.log("Javascript")
// }
// showConsole()



var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

for (var x = 0; x < topics.length; x++) {
 console.log(topics[x]);
}
let topic = Math.floor((Math.random() * topics.length) + 1) 

if (topic === 1) {
 console.log("Let's study HTML!");
} else if (topic === 2) {
 console.log("Let's study CSS!");
} else if (topic === 3) {
 console.log("Let's study Git!");
} else if (topic === 4) {
 console.log("Let's study JavaScript!");
} else {
 console.log('Please try again!');
}
