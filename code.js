var count = 1;

// document.querySelector("#buttonQ").addEventListener("click", textQ);
// document.querySelector("#buttonW").addEventListener("click", textW);
// document.querySelector("#buttonE").addEventListener("click", textE);
// document.querySelector("#buttonR").addEventListener("click", textR);
// document.querySelector("#buttonT").addEventListener("click", textT);
// document.querySelector("#buttonY").addEventListener("click", textY);
// document.querySelector("#buttonU").addEventListener("click", textU);
// document.querySelector("#buttonI").addEventListener("click", textI);
// document.querySelector("#buttonO").addEventListener("click", textO);
// document.querySelector("#buttonP").addEventListener("click", textP);
// document.querySelector("#buttonA").addEventListener("click", textA);
// document.querySelector("#buttonS").addEventListener("click", textS);
// document.querySelector("#buttonD").addEventListener("click", textD);
// document.querySelector("#buttonF").addEventListener("click", textF);
// document.querySelector("#buttonG").addEventListener("click", textG);
// document.querySelector("#buttonH").addEventListener("click", textH);
// document.querySelector("#buttonJ").addEventListener("click", textJ);
// document.querySelector("#buttonK").addEventListener("click", textK);
// document.querySelector("#buttonL").addEventListener("click", textL);
// document.querySelector("#buttonZ").addEventListener("click", textZ);
// document.querySelector("#buttonX").addEventListener("click", textX);
// document.querySelector("#buttonC").addEventListener("click", textC);
// document.querySelector("#buttonV").addEventListener("click", textV);
// document.querySelector("#buttonB").addEventListener("click", textB);
// document.querySelector("#buttonN").addEventListener("click", textN);
// document.querySelector("#buttonM").addEventListener("click", textM);
document.querySelector("#buttonDel").addEventListener("click", deleter);
document.querySelector("#buttonEnter").addEventListener("click", enter);
// document.querySelector("#buttonM").addEventListener("click", function() {
//     text("#buttonM");
// });

for (let letter of "QWERTYUIOPASDFGHJKLZXCVBNM"){
    document.querySelector("#button" + letter).addEventListener("click", function(){
        text("#button"+letter)
    })
}

var enteredWord = [];
var word = "stare";
var letters = ["s","t","a","r","e"];

function clicker(){
    // alert("Clicked");
    document.querySelector("#box1").style.backgroundColor = "yellow";    
}

function text(id){
    document.querySelector("#box" + count).innerHTML = document.querySelector(id).innerHTML
    enteredWord[count] = document.querySelector(id).innerHTML
    count++
}

// function textQ(){
//     alert("clicky"+count)
//     document.querySelector("#box" + count).innerHTML = "q"
//     enteredWord[count] = 'Q';
//     count++;

// }
// function textW(){
//     alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "w"
//     count++;

// }
// function textE(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "e"
//     count++;

// }
// function textR(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "R"
//     count++;

// }
// function textT(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "T"
//     count++;

// }
// function textY(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "Y"
//     count++;

// }
// function textU(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "U"
//     count++;

// }
// function textI(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "I"
//     count++;

// }
// function textO(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "O"
//     count++;

// }
// function textP(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "P"
//     count++;

// }
// function textA(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "A"
//     count++;

// }
// function textS(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "S"
//     count++;

// }
// function textD(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "D"
//     count++;

// }
// function textF(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "F"
//     count++;

// }
// function textG(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "G"
//     count++;

// }
// function textH(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "H"
//     count++;

// }
// function textJ(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "J"
//     count++;

// }
// function textK(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "K"
//     count++;

// }
// function textL(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "L"
//     count++;
// }
// function textZ(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "Z"
//     count++;

// }
// function textX(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "X"
//     count++;

// }
// function textC(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "C"
//     count++;

// }
// function textV(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "V"
//     count++;

// }
// function textB(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "B"
//     count++;

// }
// function textN(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "N"
//     count++;

// }
// function textM(){
//     // alert("clicky")
//     document.querySelector("#box" + count).innerHTML = "M"
//     count++;

// }
function deleter(){
    document.querySelector("#box" + (count-1)).innerHTML =""
    enteredWord[count] = "";
    count--

}

function enter(){
    alert(enteredWord)
    for (int i; i<enteredWord.length; i++){
        document.querySelector("#box" + (i+1)).innerHTML =enteredWord[i];
    }
}