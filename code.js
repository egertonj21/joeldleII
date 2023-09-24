var count = 1;
var guess =1;
var guess1 = [];
var targetChar;
var guessChar;

document.querySelector("#buttonDel").addEventListener("click", deleter);
document.querySelector("#buttonEnter").addEventListener("click", enter);


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
    if(count<6){
    document.querySelector("#box" + count).innerHTML = document.querySelector(id).innerHTML
    enteredWord[count-1] = document.querySelector(id).innerHTML
    count++
    }
}

function deleter(){
    document.querySelector("#box" + (count-1)).innerHTML =""
    enteredWord[count] = "";
    count--

}

function enter() {
    // alert(enteredWord);
    // alert(count);
    // alert(guess);
    if(guess===1){
        addition=5;
    }else if(guess===2){
        addition=10;
    }else if(guess===3){
        addition=15;
    }else if(guess===4){
        addition=20;
    }else if(guess===5){
        addition=25;
    }
    
    
    for (let i = 1; i < 6; i++) {
        const sourceBox = document.querySelector("#box" + (i)).innerHTML;
        document.querySelector("#box" + (i + addition)).innerHTML = sourceBox;
        guess1[i-1] = sourceBox;
        guessChar = sourceBox.trim();
        targetChar = letters[i-1];
        
        document.querySelector("#box" + (i)).innerHTML="";
        count--;
        
        if(guess1[i-1].includes(letters[i-1])){
            document.querySelector("#box"+(i+addition)).style.backgroundColor = "green";
        }
        else if(letters.includes(guessChar)){
            document.querySelector("#box"+(i+addition)).style.backgroundColor = "yellow";
        }
        
    };
    // alert("helpme")
    // alert(guess1)
    // alert(letters)
    // alert(letters + guess1)
    guess++;
}


