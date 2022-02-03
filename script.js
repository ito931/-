function randomNumber(n) {
    return Math.floor(Math.random() * n);
}

  function guessMyNumber() {
    const random = randomNumber(3)
    if (0 === random) {
    pattern1()
    } else if (1 === random) {
    pattern2()
    } else if (2 === random){
    pattern3()
    }
}


function feildClear() {
 while (box1[[2]].firstChild) {
     box1[2].removeChild(box1[2].firstChild);
 }
 while (box2[2].firstChild) {
   box2[2].removeChild(box2[2].firstChild);
 }
 while (box3[2].firstChild) {
   box3[2].removeChild(box3[2].firstChild);
 }
}

function visivle() {
    box1[1].style.display = "none"
    box2[1].style.display = "none"
    box3[1].style.display = "none"
}

function pattern1() {
    feildClear()
    visivle()
    let input = Number(document.getElementById("textbox").value);
    document.body.style.backgroundColor = "darkgrey";
    box1[1].style.display = "block";
    console.log(input)
    if (input !== 0 ){
        nn = input
    } else {
        nn = 1000
    }
    const random1 = randomNumber(nn)
    for (let i = 0; i < nn; i++){
    if (i === random1){
        box1[2].append("🐺")
    } else {
        box1[2].append("🦊")
    }
  }
}

function pattern2() {
    feildClear()
    visivle()
    let input = Number(document.getElementById("textbox").value);
    document.body.style.backgroundColor = "darkgreen";
    box2[1].style.display = "block";
    if (input !== 0 ){
        nn = input
    } else {
        nn = 1000
    }
    const random2 = randomNumber(nn)
    for (let i = 0; i < nn; i++){
        if (i === random2){
        box2[2].append("🍀")
        } else {
        box2[2].append("☘️")
    }
  }
}

function pattern3() {
    feildClear()
    visivle()
    let input = Number(document.getElementById("textbox").value);
    document.body.style.backgroundColor = "dimgray";
    box3[1].style.display = "block";
    if (input !== 0 ){
        nn = input
    } else {
        nn = 1000
    }
    const random3 = randomNumber(nn)
    for (let i = 0; i < nn; i++){
    if (i === random3){
    box3[2].append("🦈")
    } else {
    box3[2].append("🐬")
    }
  }
}

let nn = 0;
const box1 = document.getElementsByClassName("box1")
const box2 = document.getElementsByClassName("box2")
const box3 = document.getElementsByClassName("box3")
const button = document.getElementById("button");
button.addEventListener("click",  guessMyNumber);
