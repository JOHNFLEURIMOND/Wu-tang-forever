//the user is going to play our wu-tang application
//the user will be able to answer a survey question
// upon his answer he'll receive the names of the wutang members

// const wuTang = ["rza","gza","u-god","odb","method man","raekwon","inspectah deck","masta killa","ghostface killah"];
// const buttonPress = document.getElementById("press");
//
// let name = document.getElementById("firstName");
// let yoHood = document.getElementById("hood");
// let faveSong = document.getElementById("wuSong");
// let yoAge = document.getElementById("age");
// let howTall = document.getElementById("height");
// let nameGenerated = document.getElementById("generated");
//
// let inputs = document.getElementsByTagName("input");
// let bar =  inputs[i].value
//
// buttonPress.addEventListener("click", () => {
//   for(let i = 0; i <= inputs.length; i++){
//     if(bar !== ""){
//       let random = wuTang[Math.round(Math.random()* wuTang.length - 1)];
//       nameGenerated.innerHTML = random;
//     }
//   }
// });
alert("answer all questions, then submit to see which wu-tang character you are ")
const wtArray = ["rza","gza","u-god","odb","method man","raekwon","inspectah deck","masta killa","ghostface killah"]
const push = document.getElementById("Wbutton")
let name = document.getElementById("firstName");

let faveSong = document.getElementById("what");
let artist = document.getElementById("who");
let which = document.getElementById("why");
let block = document.getElementById("hood");
let feelings = document.getElementById("feel");

const nameBruh = document.getElementById("bruh");
let inputs = document.getElementsByTagName('input');
let damn = inputs[1].value

push.addEventListener("click", () => {
  for(let i = 0; i <= inputs.length; i++){
    if (damn !== "") {
    let random = wtArray[Math.round(Math.random()*wtArray.length - 1)];
    nameBruh.innerHTML = random;
    }
  };
});
